import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/database';

export const getRoles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const roles = await prisma.role.findMany({ select: { id: true, code: true, name: true } });
    res.json({ data: roles });
  } catch (error) { next(error); }
};
