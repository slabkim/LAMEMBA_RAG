import { z } from 'zod';

export const createUserSchema = z.object({
  body: z.object({
    email: z.string().email(),
    full_name: z.string().min(3),
    role_id: z.string().uuid(),
    status: z.enum(['ACTIVE', 'DISABLED']).default('ACTIVE'),
  }),
});
