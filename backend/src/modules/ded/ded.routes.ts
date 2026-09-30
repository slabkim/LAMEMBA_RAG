import { Router } from 'express';
import { authenticate } from '../../middleware/authenticate';
import { validate } from '../../middleware/validate';
import { generateDedSchema, updateResponseSchema } from './ded.schema';
import {
  getDedOverview, getDedSections, getSectionDetail, getSectionResponse,
  saveResponseBySection, generateDraft, getGenerationRun, updateResponse, submitResponse,
  getVersionHistory, getVersionDetail, compareVersions, getEvidenceRefs
} from './ded.controller';

const router = Router();

// Project-scoped DED routes
router.get('/projects/:projectId/ded', authenticate, getDedOverview);
router.get('/projects/:projectId/ded/sections', authenticate, getDedSections);

// Section routes
router.get('/sections/:id', authenticate, getSectionDetail);
router.get('/sections/:id/response', authenticate, getSectionResponse);
router.post('/sections/:id/save', authenticate, saveResponseBySection);
router.post('/sections/:id/generate', authenticate, validate(generateDedSchema), generateDraft);

// Generation run
router.get('/generation-runs/:id', authenticate, getGenerationRun);

// Response routes
router.patch('/responses/:id', authenticate, validate(updateResponseSchema), updateResponse);
router.post('/responses/:id/submit', authenticate, submitResponse);
router.get('/responses/:id/versions', authenticate, getVersionHistory);
router.get('/responses/:id/compare', authenticate, compareVersions);
router.get('/responses/:id/evidence', authenticate, getEvidenceRefs);

// Version routes
router.get('/versions/:id', authenticate, getVersionDetail);

export default router;
