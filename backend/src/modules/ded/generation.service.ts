import { GoogleGenerativeAI } from '@google/generative-ai';
import { prisma } from '../../config/database';
import { env } from '../../config/env';

const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY || '');
const embeddingModel = genAI.getGenerativeModel({ model: "gemini-embedding-2" });
const generateModel = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });

export const generateDedResponse = async (runId: string, sectionId: string, projectId: string, instruction: string, topK: number) => {
  try {
    const section = await prisma.dedSection.findUnique({ 
      where: { id: sectionId }
    });
    if (!section) throw new Error("Section not found");

    // Dapatkan data Kriteria terkait jika ada
    let rubric = '';
    if (section.instrument_id) {
      const criterion = await prisma.instrumentCriterion.findFirst({
        where: { code: section.code }
      });
      if (criterion) {
        rubric = `\n\nKRITERIA & RUBRIK LAMEMBA:\n${criterion.description || ''}\nSyarat Unggul: ${criterion.rubric_description || ''}\nInstruksi AI: ${criterion.ai_instruction || ''}`;
      }
    }

    // 1. Convert Prompt/Instruction to Vector
    const queryStr = `${section.title} ${instruction} ${rubric}`;
    const embedResult = await embeddingModel.embedContent(queryStr);
    const queryVector = `[${embedResult.embedding.values.join(',')}]`;

    // 2. Vector Search (Semantic Retrieval) via pgvector
    const chunks: any[] = await prisma.$queryRawUnsafe(`
      SELECT c.id, c.content, c.page_number, 
             c.embedding <=> $1::vector AS distance,
             d.name as doc_name
      FROM document_chunks c
      JOIN documents d ON c.document_id = d.id
      WHERE d.project_id = $2::uuid AND d.deleted_at IS NULL AND c.status = 'INDEXED'
      ORDER BY distance ASC
      LIMIT $3
    `, queryVector, projectId, topK);

    const retrievedChunksInfo = chunks.map((c: any) => ({
      id: c.id, doc_name: c.doc_name, page: c.page_number, distance: c.distance, content: c.content
    }));

    // 3. Context Assembly
    let contextText = chunks.map((c: any, i) => `[EVIDENCE ${i+1}] Dari dokumen ${c.doc_name} (Hal ${c.page_number || '-'}):\n${c.content}`).join('\n\n');
    
    if (chunks.length === 0) {
      contextText = "TIDAK ADA BUKTI DOKUMEN YANG DITEMUKAN. Buat narasi berdasarkan instruksi tanpa data bukti.";
    }

    // 4. Gemini Prompt Construction
    const finalPrompt = `Anda adalah Ahli Penulis Dokumen Evaluasi Diri (DED) Akreditasi LAMEMBA.
Tugas Anda adalah menulis narasi untuk bagian: ${section.title} (${section.code}).

INSTRUKSI USER:
${instruction || 'Tuliskan draf narasi yang komprehensif berdasarkan bukti yang tersedia.'}
${rubric}

BUKTI (EVIDENCE) DARI DOKUMEN FAKULTAS/PRODI:
${contextText}

ATURAN PENULISAN:
1. Tulislah dalam bahasa Indonesia formal, akademis, dan persuasif.
2. JANGAN MENGARANG FAKTA. Gunakan hanya data dan angka yang ada di dalam BUKTI.
3. Cantumkan sitasi otomatis dalam format (Nama Dokumen, Hal. X) jika mengutip data/fakta spesifik.
4. Pastikan tulisan terstruktur menggunakan paragraf yang rapi dan mematuhi rubrik LAMEMBA untuk nilai Unggul.
`;

    // 5. Generate Content
    const startTime = Date.now();
    const result = await generateModel.generateContent(finalPrompt);
    const generatedText = result.response.text();
    const duration = Date.now() - startTime;

    // 6. Update Run Status
    await prisma.aiGenerationRun.update({
      where: { id: runId },
      data: {
        status: 'COMPLETED',
        generated_text: generatedText,
        duration_ms: duration,
        completed_at: new Date(),
        retrieved_chunks: retrievedChunksInfo,
      }
    });

    // 7. Simpan sebagai Draft di DedResponse
    let response = await prisma.dedResponse.findFirst({
      where: { section_id: sectionId },
      orderBy: { version: 'desc' }
    });

    if (response && response.status !== 'APPROVED') {
      response = await prisma.dedResponse.update({
        where: { id: response.id },
        data: { content: generatedText, updated_at: new Date() }
      });
    } else {
      response = await prisma.dedResponse.create({
        data: {
          section_id: sectionId,
          content: generatedText,
          status: 'DRAFT',
          version: response ? response.version + 1 : 1,
          created_by: section.project_id // using project id as proxy since we are running in background
        }
      });
    }

  } catch (error: any) {
    console.error("Generate Draft Error:", error);
    await prisma.aiGenerationRun.update({
      where: { id: runId },
      data: { status: 'FAILED', error_message: error.message }
    });
  }
};
