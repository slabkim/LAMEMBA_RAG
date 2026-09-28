import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';

// Extend Express Request object
declare global {
  namespace Express {
    interface Request {
      reqId: string;
    }
  }
}

export const requestId = (req: Request, res: Response, next: NextFunction) => {
  req.reqId = crypto.randomUUID();
  res.setHeader('X-Request-Id', req.reqId);
  next();
};
