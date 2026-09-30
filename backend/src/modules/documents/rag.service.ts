import fs from 'fs';
import path from 'path';
const pdfParse = require('pdf-parse');
import * as xlsx from 'xlsx';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { prisma } from '../../config/database';
import { env } from '../../config/env';

// Inisialisasi Gemini API
const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY || '');
const embeddingModel = genAI.getGenerativeModel({ model: "gemini-embedding-2" });

function chunkText(text: string, maxLen = 1000, overlap = 200): string[] {
  const chunks: string[] = [];
  let i = 0;
  while (i < text.length) {
    const chunk = text.slice(i, i + maxLen);
    if (chunk.trim().length > 50) {
      chunks.push(chunk.trim());
    }
    i += (maxLen - overlap);
  }
  return chunks;
}

export const processDocumentRAG = async (documentId: string) => {
  try {
    const doc = await prisma.document.findUnique({ where: { id: documentId } });
    if (!doc) throw new Error('Dokumen tidak ditemukan');

    const fullPath = doc.file_path;
    if (!fs.existsSync(fullPath)) {
      throw new Error(`File tidak ditemukan di disk: ${fullPath}`);
    }

    let extractedText = '';
    const ext = path.extname(doc.original_name || doc.file_path).toLowerCase();
    
    if (ext === '.pdf' || doc.mime_type === 'application/pdf') {
      try {
        const dataBuffer = fs.readFileSync(fullPath);
        const parsed = await pdfParse(dataBuffer);
        extractedText = parsed.text;
      } catch (e: any) {
        throw new Error(`File PDF rusak atau tidak valid (Error: ${e.message})`);
      }
    } else if (ext === '.docx' || doc.mime_type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      const mammoth = require('mammoth');
      const result = await mammoth.extractRawText({ path: fullPath });
      extractedText = result.value;
    } else if (ext === '.xlsx' || ext === '.xls' || doc.mime_type.includes('excel') || doc.mime_type.includes('spreadsheet')) {
      const workbook = xlsx.readFile(fullPath);
      for (const sheetName of workbook.SheetNames) {
        const sheet = workbook.Sheets[sheetName];
        const csv = xlsx.utils.sheet_to_csv(sheet);
        extractedText += `\n[Sheet: ${sheetName}]\n${csv}\n`;
      }
    } else {
      throw new Error(`Saat ini RAG Engine baru mendukung PDF, DOCX, dan XLSX. File Anda: ${ext || doc.mime_type}`);
    }
    
    if (!extractedText || extractedText.trim() === '') {
      throw new Error('Ekstraksi teks gagal. Dokumen mungkin kosong atau berupa hasil scan gambar.');
    }

    const chunks = chunkText(extractedText);
    await prisma.documentChunk.deleteMany({ where: { document_id: documentId } });

    let chunkIndex = 1;
    for (const textChunk of chunks) {
      const result = await embeddingModel.embedContent(textChunk);
      const embeddingArray = result.embedding.values;
      const vectorString = `[${embeddingArray.join(',')}]`;

      await prisma.$executeRawUnsafe(`
        INSERT INTO "document_chunks" (
          "id", "document_id", "chunk_index", "content", "token_count", "char_count", "embedding", "updated_at"
        ) VALUES (
          gen_random_uuid(), 
          $1::uuid, 
          $2, 
          $3, 
          $4, 
          $5, 
          $6::vector,
          NOW()
        )
      `, documentId, chunkIndex, textChunk, Math.round(textChunk.length / 4), textChunk.length, vectorString);

      chunkIndex++;
    }

    await prisma.document.update({
      where: { id: documentId },
      data: { status: 'PROCESSED', processed_at: new Date() }
    });

  } catch (error: any) {
    console.error(`[RAG Error] Gagal memproses dokumen ${documentId}:`, error);
    await prisma.document.update({
      where: { id: documentId },
      data: { status: 'FAILED', error_message: error.message }
    });
  }
};
