import { z } from 'zod';

export const createProjectSchema = z.object({
  body: z.object({
    name: z.string().min(3),
    program_studi: z.string().min(2),
    jenjang: z.enum(['D3', 'D4', 'S1', 'S2', 'S3', 'Profesi']),
    // instrument_version_id akan diisi otomatis di controller jika tidak ada
  }),
});
