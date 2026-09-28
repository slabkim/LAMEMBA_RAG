import { z } from 'zod';

export const uploadDocumentSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    document_type: z.enum(['DED', 'DKPS', 'EVIDENCE', 'SUPPORTING']),
    project_id: z.string().uuid(),
    criteria_ids: z.array(z.string().uuid()).optional(),
    description: z.string().optional(),
  }),
});

export const listDocumentsSchema = z.object({
  query: z.object({
    project_id: z.string().uuid().optional(),
    document_type: z.enum(['DED', 'DKPS', 'EVIDENCE', 'SUPPORTING']).optional(),
    criteria_id: z.string().uuid().optional(),
    status: z.enum(['UPLOADED', 'PROCESSING', 'PROCESSED', 'FAILED']).optional(),
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(100).default(20),
    search: z.string().optional(),
  }),
});
