import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/database';
import { verifyPassword, hashPassword } from '../../lib/password';
import { AppError } from '../../middleware/errorHandler';
import crypto from 'crypto';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    // Normalisasi email
    const normalizedEmail = email.toLowerCase().trim();

    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
      include: { userRoles: { include: { role: true } } }
    });

    if (!user || !user.password_hash) {
      throw new AppError(401, 'INVALID_CREDENTIALS', 'Email atau password salah.');
    }

    if (user.status !== 'ACTIVE') {
      throw new AppError(403, 'FORBIDDEN', 'Akun Anda dinonaktifkan. Hubungi Admin.');
    }

    const isValid = await verifyPassword(user.password_hash, password);
    if (!isValid) {
      throw new AppError(401, 'INVALID_CREDENTIALS', 'Email atau password salah.');
    }

    // Buat session
    const sessionToken = crypto.randomBytes(32).toString('hex');
    const sessionHash = crypto.createHash('sha256').update(sessionToken).digest('hex');
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 1); // 1 hari

    await prisma.session.create({
      data: {
        user_id: user.id,
        session_hash: sessionHash,
        expires_at: expiresAt,
        ip_hash: req.ip ? crypto.createHash('sha256').update(req.ip).digest('hex') : null,
        user_agent: req.headers['user-agent']
      }
    });

    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { last_login_at: new Date() }
    });

    // Set HTTP-only Cookie
    res.cookie('ded_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 24 * 60 * 60 * 1000 // 1 hari
    });

    const roles = user.userRoles.map((ur: any) => ur.role.code);

    res.json({
      user: {
        id: user.id,
        email: user.email,
        full_name: user.full_name,
        avatar_url: user.avatar_url,
        must_change_password: user.must_change_password,
        roles
      }
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sessionId = req.sessionId;
    if (sessionId) {
      await prisma.session.update({
        where: { id: sessionId },
        data: { revoked_at: new Date() }
      });
    }

    res.clearCookie('ded_session', { path: '/' });
    res.json({ message: 'Logout berhasil' });
  } catch (error) {
    next(error);
  }
};

export const me = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      include: { userRoles: { include: { role: true } } }
    });

    if (!user) throw new AppError(404, 'NOT_FOUND', 'User tidak ditemukan');

    res.json({
      user: {
        id: user.id,
        email: user.email,
        full_name: user.full_name,
        avatar_url: user.avatar_url,
        must_change_password: user.must_change_password,
        roles: user.userRoles.map((ur: any) => ur.role.code)
      }
    });
  } catch (error) {
    next(error);
  }
};

export const changePassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { oldPassword, newPassword } = req.body;
    
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (!user || !user.password_hash) throw new AppError(404, 'NOT_FOUND', 'User tidak ditemukan');

    const isValid = await verifyPassword(user.password_hash, oldPassword);
    if (!isValid) throw new AppError(400, 'VALIDATION_ERROR', 'Password lama tidak sesuai');

    const newHash = await hashPassword(newPassword);

    await prisma.user.update({
      where: { id: user.id },
      data: { 
        password_hash: newHash,
        must_change_password: false
      }
    });

    res.json({ message: 'Password berhasil diubah' });
  } catch (error) {
    next(error);
  }
};
