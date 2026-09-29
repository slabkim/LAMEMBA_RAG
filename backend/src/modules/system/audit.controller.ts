import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/database';

export const getAuditLogs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const logs = await prisma.auditLog.findMany({
      orderBy: { created_at: 'desc' },
      include: { user: { select: { full_name: true, email: true } } },
      take: 100 // limit for demo
    });
    res.json({ data: logs });
  } catch (error) { next(error); }
};
