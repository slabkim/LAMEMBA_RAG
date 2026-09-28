import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/database';
import { AppError } from '../../middleware/errorHandler';

// GET /api/documents - List documents with filters
export const listDocuments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      project_id, document_type, status,
      page = 1, limit = 20, search
    } = req.query as any;

    const where: any = { deleted_at: null };
    if (project_id) where.project_id = project_id;
    if (document_type) where.document_type = document_type;
    if (status) where.status = status;
    if (search) where.original_name = { contains: search, mode: 'insensitive' };

    const [documents, total] = await Promise.all([
      prisma.document.findMany({
        where,
        skip: (Number(page) - 1) * Number(limit),
        take: Number(limit),
        orderBy: { created_at: 'desc' },
        include: {
          criteriaMapping: {
            include: { instrument: { select: { code: true, name: true } } }
          },
          chunks: { select: { id: true } }
        }
      }),
      prisma.document.count({ where })
    ]);

    res.json({
      data: documents.map(d => ({
        ...d,
        chunk_count: d.chunks.length,
        chunks: undefined
      })),
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) { next(error); }
};

// POST /api/documents/upload - Upload document metadata (file upload handled separately)
export const uploadDocument = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, document_type, project_id, criteria_ids } = req.body;
    const userId = (req as any).user?.id || 'system';

    const document = await prisma.document.create({
      data: {
        name,
        original_name: name,
        document_type,
        project_id,
        status: 'UPLOADED',
        uploaded_by: userId,
        file_path: `/uploads/${project_id}/${name}`,
        file_size: 0,
        mime_type: 'application/pdf',
      }
    });

    // Create criteria mappings if provided
    if (criteria_ids?.length) {
      await prisma.documentCriteriaMapping.createMany({
        data: criteria_ids.map((instrumentId: string) => ({
          document_id: document.id,
          instrument_id: instrumentId,
        }))
      });
    }

    res.status(201).json({ data: document });
  } catch (error) { next(error); }
};

// GET /api/documents/:id - Get document detail with processing info
export const getDocumentDetail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const document = await prisma.document.findUnique({
      where: { id },
      include: {
        criteriaMapping: {
          include: { instrument: { select: { code: true, name: true } } }
        },
        chunks: {
          orderBy: { chunk_index: 'asc' },
          select: { id: true, chunk_index: true, status: true, token_count: true, page_number: true }
        }
      }
    });
    if (!document) throw new AppError(404, 'NOT_FOUND', 'Document not found');
    res.json({ data: document });
  } catch (error) { next(error); }
};

// POST /api/documents/:id/process - Trigger document processing pipeline
export const triggerProcessing = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const document = await prisma.document.findUnique({ where: { id } });
    if (!document) throw new AppError(404, 'NOT_FOUND', 'Document not found');

    // Phase 3 stub: Mark as PROCESSING.
    // In Phase 4+, this will dispatch to BullMQ job queue for:
    //   1. Text extraction  2. Clean & normalization  3. Chunking
    //   4. Vector embedding  5. BM25 index  6. Ready for Hybrid RAG
    await prisma.document.update({
      where: { id },
      data: { status: 'PROCESSING' }
    });

    res.json({ message: 'Processing pipeline triggered', document_id: id });
  } catch (error) { next(error); }
};

// DELETE /api/documents/:id - Soft delete
export const deleteDocument = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    await prisma.document.update({
      where: { id },
      data: { deleted_at: new Date() }
    });
    res.json({ message: 'Document deleted' });
  } catch (error) { next(error); }
};
