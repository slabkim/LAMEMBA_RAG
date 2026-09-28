import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/database';

// GET /api/knowledge-base/stats - KB statistics
export const getKBStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { project_id } = req.query as any;
    const docWhere: any = {};
    if (project_id) docWhere.project_id = project_id;

    const [totalSources, totalChunks, indexedChunks, failedChunks] = await Promise.all([
      prisma.document.count({ where: { ...docWhere, status: 'PROCESSED' } }),
      prisma.documentChunk.count({ where: { document: docWhere } }),
      prisma.documentChunk.count({ where: { document: docWhere, status: 'INDEXED' } }),
      prisma.documentChunk.count({ where: { document: docWhere, status: 'FAILED' } }),
    ]);

    res.json({
      data: {
        total_sources: totalSources,
        total_chunks: totalChunks,
        indexed_chunks: indexedChunks,
        failed_chunks: failedChunks,
        index_rate: totalChunks > 0 ? ((indexedChunks / totalChunks) * 100).toFixed(1) : '0'
      }
    });
  } catch (error) { next(error); }
};

// GET /api/knowledge-base/chunks - List chunks with filters
export const listChunks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      project_id, document_id,
      status, page = 1, limit = 20, search
    } = req.query as any;

    const where: any = {};
    if (document_id) where.document_id = document_id;
    if (status) where.status = status;
    if (search) where.content = { contains: search, mode: 'insensitive' };

    // Filter via document relations
    if (project_id) {
      where.document = { project_id };
    }

    const [chunks, total] = await Promise.all([
      prisma.documentChunk.findMany({
        where,
        skip: (Number(page) - 1) * Number(limit),
        take: Number(limit),
        orderBy: { chunk_index: 'asc' },
        include: {
          document: {
            select: {
              original_name: true,
              document_type: true,
              criteriaMapping: {
                include: { instrument: { select: { code: true, name: true } } }
              }
            }
          }
        }
      }),
      prisma.documentChunk.count({ where })
    ]);

    res.json({
      data: chunks,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) { next(error); }
};

// GET /api/knowledge-base/chunks/:id - Chunk detail
export const getChunkDetail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const chunk = await prisma.documentChunk.findUnique({
      where: { id },
      include: {
        document: {
          select: {
            original_name: true, document_type: true, project_id: true,
            criteriaMapping: {
              include: { instrument: { select: { code: true, name: true } } }
            }
          }
        }
      }
    });
    if (!chunk) return res.status(404).json({ error: { message: 'Chunk not found' }});
    res.json({ data: chunk });
  } catch (error) { next(error); }
};

// POST /api/knowledge-base/reindex - Trigger re-indexing (RRF rebuild)
export const triggerReindex = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { project_id } = req.body;
    // Phase 3 stub: In production, this dispatches a BullMQ job to:
    //   1. Re-compute semantic embeddings for changed chunks
    //   2. Rebuild BM25 index
    //   3. Update RRF fusion weights
    res.json({ message: 'Re-index job queued', project_id });
  } catch (error) { next(error); }
};
