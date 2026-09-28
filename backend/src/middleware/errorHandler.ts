import { Request, Response, NextFunction } from 'express';

// Standard Error Response Contract
export class AppError extends Error {
  public statusCode: number;
  public code: string;
  public details?: any[];

  constructor(statusCode: number, code: string, message: string, details?: any[]) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const code = err.code || 'INTERNAL_ERROR';
  const message = err.message || 'Terjadi kesalahan server internal.';
  const details = err.details || undefined;

  // Log error internally (hide details from client if 500)
  console.error(`[Error] ${req.reqId} - ${code}: ${message}`, err);

  const errorResponse: any = {
    error: {
      code: statusCode === 500 ? 'INTERNAL_ERROR' : code,
      message: statusCode === 500 ? 'Terjadi kesalahan server internal.' : message,
      request_id: req.reqId,
    }
  };

  if (details && statusCode !== 500) {
    errorResponse.error.details = details;
  }

  res.status(statusCode).json(errorResponse);
};
