import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/database';
import { hashPassword } from '../../lib/password';
import { AppError } from '../../middleware/errorHandler';

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true, email: true, full_name: true, status: true, created_at: true, last_login_at: true,
        userRoles: { include: { role: { select: { code: true, name: true } } } }
      }
    });
    res.json({ data: users });
  } catch (error) { next(error); }
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, full_name, role_id, status } = req.body;
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) throw new AppError(409, 'DUPLICATE_ENTRY', 'Email sudah terdaftar');

    const defaultPassword = await hashPassword('password123'); // Dev default

    const user = await prisma.user.create({
      data: {
        email, full_name, password_hash: defaultPassword, status, must_change_password: true,
        userRoles: { create: { role_id } }
      }
    });
    res.status(201).json({ data: { id: user.id, email: user.email } });
  } catch (error) { next(error); }
};

export const disableUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    await prisma.user.update({ where: { id }, data: { status: 'DISABLED' } });
    res.json({ message: 'User dinonaktifkan' });
  } catch (error) { next(error); }
};
