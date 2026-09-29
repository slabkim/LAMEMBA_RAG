import { z } from 'zod';

export const createDatasetSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    description: z.string().optional()
  })
});

export const createExperimentSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    dataset_id: z.string().uuid(),
    method: z.enum(['LLM_ONLY', 'SEMANTIC_RAG', 'HYBRID_RAG']),
    model_name: z.string(),
    evidence_first: z.boolean().default(true),
    retrieval_config: z.any().optional()
  })
});
