import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/database';

export const getInstruments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const instruments = await prisma.instrument.findMany({
      include: { versions: { select: { id: true, version: true, status: true } } }
    });
    res.json({ data: instruments });
  } catch (error) { next(error); }
};

export const getInstrumentTree = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params; // Instrument ID
    // Dalam implementasi nyata, ini akan me-load tree secara lengkap: Version -> Criteria -> Dimensions -> Indicators
    // Sebagai stub Phase 2:
    const instrument = await prisma.instrument.findUnique({
      where: { id },
      include: {
        versions: {
          include: {
            criteria: {
              include: {
                dimensions: {
                  include: {
                    indicators: { include: { evidence_requirements: true } }
                  }
                }
              }
            }
          }
        }
      }
    });
    
    if (!instrument) return res.status(404).json({ error: { message: 'Instrument not found' }});
    res.json({ data: instrument });
  } catch (error) { next(error); }
};
