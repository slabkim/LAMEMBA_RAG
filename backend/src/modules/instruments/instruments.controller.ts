import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/database';

export const getInstruments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { project_id } = req.query as any;
    const where: any = {};
    if (project_id) where.project_id = project_id;

    const instruments = await prisma.instrument.findMany({
      where: { ...where, parent_id: null }, // Top-level only
      include: {
        children: {
          include: {
            children: true // 2 levels deep
          }
        }
      },
      orderBy: { sort_order: 'asc' }
    });
    res.json({ data: instruments });
  } catch (error) { next(error); }
};

export const getInstrumentTree = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const instrument = await prisma.instrument.findUnique({
      where: { id },
      include: {
        children: {
          include: {
            children: {
              include: {
                children: true // 3 levels: kriteria -> sub -> indikator -> sub-indikator
              }
            }
          },
          orderBy: { sort_order: 'asc' }
        },
        documentCriteria: {
          include: { document: { select: { id: true, name: true, document_type: true } } }
        }
      }
    });

    if (!instrument) return res.status(404).json({ error: { message: 'Instrument not found' }});
    res.json({ data: instrument });
  } catch (error) { next(error); }
};
