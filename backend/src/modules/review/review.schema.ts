import { z } from 'zod';

export const approveReviewSchema = z.object({
  body: z.object({
    comment: z.string().optional(),
  })
});

export const requestRevisionSchema = z.object({
  body: z.object({
    comment: z.string().min(1),
    specific_issues: z.array(z.string()).optional(),
  })
});
