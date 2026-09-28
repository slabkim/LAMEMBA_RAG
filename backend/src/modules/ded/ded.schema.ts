import { z } from 'zod';

export const generateDedSchema = z.object({
  body: z.object({
    top_k: z.number().int().min(1).max(50).default(10),
    retrieval_method: z.enum(['HYBRID_RRF', 'SEMANTIC_ONLY', 'BM25_ONLY']).default('HYBRID_RRF'),
    instruction: z.string().max(2000).optional(),
  })
});

export const updateResponseSchema = z.object({
  body: z.object({
    content: z.string().min(1),
  })
});

export const submitResponseSchema = z.object({
  body: z.object({
    comment: z.string().max(2000).optional(),
  })
});
