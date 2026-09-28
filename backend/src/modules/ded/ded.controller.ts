import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/database';
import { AppError } from '../../middleware/errorHandler';

// GET /api/projects/:projectId/ded - DED overview (all sections + progress)
export const getDedOverview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const projectId = req.params.projectId as string;

    const sections = await prisma.dedSection.findMany({
      where: { project_id: projectId, parent_id: null },
      orderBy: { sort_order: 'asc' },
      include: {
        children: {
          orderBy: { sort_order: 'asc' },
          include: {
            children: {
              orderBy: { sort_order: 'asc' },
              include: {
                responses: {
                  orderBy: { version: 'desc' },
                  take: 1,
                  select: { id: true, status: true, version: true, is_ai_generated: true }
                }
              }
            },
            responses: {
              orderBy: { version: 'desc' },
              take: 1,
              select: { id: true, status: true, version: true }
            }
          }
        }
      }
    });

    // Compute progress
    const allSections = await prisma.dedSection.findMany({
      where: { project_id: projectId, level: 2 }, // indicator level
      select: { id: true, status: true }
    });
    const total = allSections.length;
    const approved = allSections.filter(s => s.status === 'APPROVED').length;
    const drafted = allSections.filter(s => s.status !== 'EMPTY').length;

    res.json({
      data: {
        sections,
        progress: {
          total_indicators: total,
          approved,
          drafted,
          completion: total > 0 ? Math.round((approved / total) * 100) : 0
        }
      }
    });
  } catch (error) { next(error); }
};

// GET /api/projects/:projectId/ded/sections - Section tree
export const getDedSections = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const projectId = req.params.projectId as string;
    const sections = await prisma.dedSection.findMany({
      where: { project_id: projectId },
      orderBy: { sort_order: 'asc' }
    });
    res.json({ data: sections });
  } catch (error) { next(error); }
};

// GET /api/ded/sections/:id - Section detail
export const getSectionDetail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const section = await prisma.dedSection.findUnique({
      where: { id },
      include: {
        children: { orderBy: { sort_order: 'asc' } },
        responses: {
          orderBy: { version: 'desc' },
          take: 1,
          include: {
            evidenceRefs: true,
            generationRun: { select: { id: true, model_name: true, retrieval_method: true, duration_ms: true } }
          }
        }
      }
    });
    if (!section) throw new AppError(404, 'NOT_FOUND', 'Section not found');
    res.json({ data: section });
  } catch (error) { next(error); }
};

// GET /api/ded/sections/:id/response - Current response for section
export const getSectionResponse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sectionId = req.params.id as string;
    const response = await prisma.dedResponse.findFirst({
      where: { section_id: sectionId },
      orderBy: { version: 'desc' },
      include: {
        evidenceRefs: true,
        generationRun: {
          select: { id: true, model_name: true, retrieval_method: true, retrieval_config: true, duration_ms: true, retrieved_chunks: true }
        }
      }
    });
    res.json({ data: response }); // null if no response yet
  } catch (error) { next(error); }
};

// POST /api/ded/sections/:id/generate - Generate AI draft (stub for Phase 4)
export const generateDraft = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sectionId = req.params.id as string;
    const userId = (req as any).user?.id || 'system';
    const { top_k = 10, retrieval_method = 'HYBRID_RRF', instruction } = req.body;

    const section = await prisma.dedSection.findUnique({ where: { id: sectionId } });
    if (!section) throw new AppError(404, 'NOT_FOUND', 'Section not found');

    // Create generation run record
    const run = await prisma.aiGenerationRun.create({
      data: {
        section_id: sectionId,
        project_id: section.project_id,
        status: 'RUNNING',
        model_name: 'gemini-1.5-pro',
        retrieval_method,
        top_k,
        instruction,
        created_by: userId,
      }
    });

    // Phase 4 stub: In production, this dispatches to BullMQ job queue.
    // The worker would: 1) semantic retrieval, 2) BM25 retrieval, 3) RRF fusion,
    // 4) context assembly, 5) Gemini call, 6) output validation, 7) save response.

    // For now, simulate with a stub response
    const stubText = `[AI Generated Draft - Stub]\n\nNarasi DED untuk ${section.title} (${section.code}) akan dihasilkan oleh pipeline Hybrid RAG + Gemini.\n\nPipeline: Semantic Retrieval → BM25 → RRF Fusion → Context Assembly → Gemini Generation\nTop-K: ${top_k}\nMethod: ${retrieval_method}`;

    // Update run as completed
    await prisma.aiGenerationRun.update({
      where: { id: run.id },
      data: {
        status: 'COMPLETED',
        generated_text: stubText,
        duration_ms: 1500,
        completed_at: new Date(),
        retrieved_chunks: JSON.parse('[]'),
      }
    });

    // Create/update DED response
    const existingResponse = await prisma.dedResponse.findFirst({
      where: { section_id: sectionId },
      orderBy: { version: 'desc' }
    });

    const newVersion = existingResponse ? existingResponse.version + 1 : 1;

    const response = await prisma.dedResponse.create({
      data: {
        section_id: sectionId,
        content: stubText,
        status: 'DRAFT',
        version: newVersion,
        is_ai_generated: true,
        generation_run_id: run.id,
        created_by: userId,
      }
    });

    // Create version snapshot
    await prisma.dedResponseVersion.create({
      data: {
        response_id: response.id,
        version_no: newVersion,
        content: stubText,
        status: 'DRAFT',
        change_summary: 'AI Generated Draft',
        created_by: userId,
      }
    });

    // Update section status
    await prisma.dedSection.update({
      where: { id: sectionId },
      data: { status: 'DRAFT' }
    });

    res.status(202).json({
      data: {
        generation_run_id: run.id,
        response_id: response.id,
        status: 'COMPLETED',
        message: 'Draft generated successfully (stub)'
      }
    });
  } catch (error) { next(error); }
};

// GET /api/ded/generation-runs/:id - Generation run status
export const getGenerationRun = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const run = await prisma.aiGenerationRun.findUnique({ where: { id } });
    if (!run) throw new AppError(404, 'NOT_FOUND', 'Generation run not found');
    res.json({ data: run });
  } catch (error) { next(error); }
};

// PATCH /api/ded/responses/:id - Edit response content
export const updateResponse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const userId = (req as any).user?.id || 'system';
    const { content } = req.body;

    const response = await prisma.dedResponse.findUnique({ where: { id } });
    if (!response) throw new AppError(404, 'NOT_FOUND', 'Response not found');
    if (response.status === 'APPROVED') throw new AppError(409, 'INVALID_STATE_TRANSITION', 'Cannot edit approved response');

    const updated = await prisma.dedResponse.update({
      where: { id },
      data: { content, updated_at: new Date() }
    });

    // Create version snapshot
    await prisma.dedResponseVersion.create({
      data: {
        response_id: id,
        version_no: response.version,
        content,
        status: response.status,
        change_summary: 'Manual edit',
        created_by: userId,
      }
    });

    res.json({ data: updated });
  } catch (error) { next(error); }
};

// POST /api/ded/responses/:id/submit - Submit for review
export const submitResponse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const userId = (req as any).user?.id || 'system';

    const response = await prisma.dedResponse.findUnique({ where: { id } });
    if (!response) throw new AppError(404, 'NOT_FOUND', 'Response not found');

    const validFromStatuses = ['DRAFT', 'REVISED'];
    if (!validFromStatuses.includes(response.status)) {
      throw new AppError(409, 'INVALID_STATE_TRANSITION', `Cannot submit from status ${response.status}`);
    }

    const updated = await prisma.dedResponse.update({
      where: { id },
      data: { status: 'SUBMITTED', submitted_at: new Date() }
    });

    // Update section status
    await prisma.dedSection.update({
      where: { id: response.section_id },
      data: { status: 'SUBMITTED' }
    });

    // Version snapshot
    await prisma.dedResponseVersion.create({
      data: {
        response_id: id,
        version_no: response.version,
        content: response.content,
        status: 'SUBMITTED',
        change_summary: 'Submitted for review',
        created_by: userId,
      }
    });

    res.json({ data: updated });
  } catch (error) { next(error); }
};

// GET /api/ded/responses/:id/versions - Version history
export const getVersionHistory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const responseId = req.params.id as string;
    const versions = await prisma.dedResponseVersion.findMany({
      where: { response_id: responseId },
      orderBy: { version_no: 'desc' }
    });
    res.json({ data: versions });
  } catch (error) { next(error); }
};

// GET /api/ded/versions/:id - Specific version detail
export const getVersionDetail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const version = await prisma.dedResponseVersion.findUnique({ where: { id } });
    if (!version) throw new AppError(404, 'NOT_FOUND', 'Version not found');
    res.json({ data: version });
  } catch (error) { next(error); }
};

// GET /api/ded/responses/:id/compare - Compare 2 versions
export const compareVersions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const responseId = req.params.id as string;
    const { v1, v2 } = req.query as { v1: string; v2: string };

    const [version1, version2] = await Promise.all([
      prisma.dedResponseVersion.findFirst({ where: { response_id: responseId, version_no: Number(v1) } }),
      prisma.dedResponseVersion.findFirst({ where: { response_id: responseId, version_no: Number(v2) } }),
    ]);

    if (!version1 || !version2) throw new AppError(404, 'NOT_FOUND', 'One or both versions not found');
    res.json({ data: { version1, version2 } });
  } catch (error) { next(error); }
};

// GET /api/ded/responses/:id/evidence - Evidence references
export const getEvidenceRefs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const responseId = req.params.id as string;
    const refs = await prisma.dedEvidenceReference.findMany({
      where: { response_id: responseId }
    });
    res.json({ data: refs });
  } catch (error) { next(error); }
};
