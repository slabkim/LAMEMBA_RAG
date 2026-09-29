import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/database';

export const getSettings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const settings = await prisma.systemSetting.findMany();
    res.json({ data: settings });
  } catch (error) { next(error); }
};

export const updateSettings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { key, value, description } = req.body;
    const userId = (req as any).user?.id || 'system';
    const setting = await prisma.systemSetting.upsert({
      where: { key },
      update: { value, description, updated_by: userId },
      create: { key, value, description, updated_by: userId }
    });
    res.json({ data: setting });
  } catch (error) { next(error); }
};
