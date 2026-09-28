import { z } from 'zod';

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email('Format email tidak valid'),
    password: z.string().min(1, 'Password wajib diisi'),
  }),
});

export const forgotPasswordSchema = z.object({
  body: z.object({
    email: z.string().email('Format email tidak valid'),
  }),
});

export const resetPasswordSchema = z.object({
  body: z.object({
    token: z.string().min(1, 'Token reset wajib disertakan'),
    newPassword: z.string().min(8, 'Password minimal 8 karakter'),
  }),
});

export const changePasswordSchema = z.object({
  body: z.object({
    oldPassword: z.string().min(1, 'Password lama wajib diisi'),
    newPassword: z.string().min(8, 'Password baru minimal 8 karakter'),
  }),
});
