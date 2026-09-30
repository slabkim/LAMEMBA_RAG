import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  PORT: z.string().default('4000'),
  DATABASE_URL: z.string(),
  SESSION_SECRET: z.string().min(32),
  FRONTEND_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  GEMINI_API_KEY: z.string().optional(),
});

export const env = envSchema.parse(process.env);
