import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/database';

export const getDashboardSummary = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const roles = req.user.roles || [];
    // Ini adalah stub untuk dashboard role-scoped.
    // Pada implementasi asli, data akan ditarik dari database berdasarkan project membership user.

    res.json({
      role: roles.length > 0 ? roles[0] : 'USER',
      stats: {
        active_projects: 0,
        total_documents: 0,
        processed_docs: 0,
        ded_progress: 0,
        ai_drafts: 0,
        pending_reviews: 0
      },
      recent_activity: []
    });
  } catch (error) {
    next(error);
  }
};
