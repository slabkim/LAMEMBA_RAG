import { z } from 'zod';

export const createProjectSchema = z.object({
  body: z.object({
    name: z.string().min(3),
    accreditation_year: z.number().int(),
    // In full version, these are required UUIDs. Making optional for testing Phase 2 without complete seed data.
    institution_id: z.string().uuid().optional(),
    study_program_id: z.string().uuid().optional(),
    instrument_version_id: z.string().uuid().optional(),
    status: z.enum(['PLANNING', 'ACTIVE']).default('PLANNING')
  }),
});
