import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/database';

export const getDedStructure = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const structure = await prisma.dedStructureTemplate.findMany({
      orderBy: { display_order: 'asc' }
    });
    res.json({ data: structure });
  } catch (error) { next(error); }
};
