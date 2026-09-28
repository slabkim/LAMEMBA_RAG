import { Request, Response, NextFunction } from 'express';
import { prisma } from '../config/database';
import { AppError } from './errorHandler';
import crypto from 'crypto';

// Extend Request interface
declare global {
  namespace Express {
    interface Request {
      user?: any;
      sessionId?: string;
    }
  }
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const sessionToken = req.cookies.ded_session;
  
  if (!sessionToken) {
    return next(new AppError(401, 'UNAUTHENTICATED', 'Sesi tidak valid. Silakan login kembali.'));
  }

  try {
    const sessionHash = crypto.createHash('sha256').update(sessionToken).digest('hex');
    
    const session = await prisma.session.findUnique({
      where: { session_hash: sessionHash },
      include: { user: true }
    });

    if (!session || session.revoked_at || session.expires_at < new Date()) {
      return next(new AppError(401, 'SESSION_EXPIRED', 'Sesi telah berakhir. Silakan login kembali.'));
    }

    if (session.user.status !== 'ACTIVE') {
      return next(new AppError(403, 'FORBIDDEN', 'Akun Anda dinonaktifkan. Hubungi Admin.'));
    }

    // Update last_seen_at
    await prisma.session.update({
      where: { id: session.id },
      data: { last_seen_at: new Date() }
    });

    // Pass user to request
    req.user = session.user;
    req.sessionId = session.id;
    next();
  } catch (error) {
    next(error);
  }
};
