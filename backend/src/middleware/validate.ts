import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';
import { AppError } from './errorHandler';

export const validate = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error: any) {
      if (error instanceof ZodError) {
        const details = error.issues.map((e) => ({
          field: e.path.join('.'),
          message: e.message,
        }));
        return next(new AppError(400, 'VALIDATION_ERROR', 'Validasi input gagal.', details));
      }
      return next(error);
    }
  };
};
