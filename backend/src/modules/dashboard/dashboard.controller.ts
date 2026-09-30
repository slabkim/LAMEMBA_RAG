import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/database';

export const getDashboardSummary = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const roles = req.user.roles || [];
    
    // Tarik data aktual dari database menggunakan Prisma
    const [
      total_projects,
      active_users,
      total_documents,
      approved_ded,
      recent_projects
    ] = await Promise.all([
      prisma.project.count({ where: { deleted_at: null } }),
      prisma.user.count({ where: { status: 'ACTIVE', deleted_at: null } }),
      prisma.document.count({ where: { deleted_at: null } }),
      prisma.dedSection.count({ where: { status: 'APPROVED' } }),
      prisma.project.findMany({
        where: { deleted_at: null },
        orderBy: { updated_at: 'desc' },
        take: 5,
        select: { id: true, name: true, code: true, status: true, program_studi: true, updated_at: true }
      })
    ]);

    res.json({
      role: roles.length > 0 ? roles[0] : 'USER',
      stats: {
        total_projects,
        active_users,
        total_documents,
        approved_ded,
        // Properti cadangan dari struktur awal untuk berjaga-jaga
        active_projects: total_projects,
        processed_docs: total_documents,
        ded_progress: 0,
        ai_drafts: 0,
        pending_reviews: 0
      },
      recent_projects,
      recent_activity: []
    });
  } catch (error) {
    next(error);
  }
};
