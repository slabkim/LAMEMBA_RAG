import { Router } from 'express';
import { authenticate } from '../../middleware/authenticate';
import { validate } from '../../middleware/validate';
import { createDatasetSchema, createExperimentSchema } from './research.schema';
import {
  getDashboard, listDatasets, createDataset, getDatasetDetail,
  listExperiments, createExperiment, getExperimentDetail,
  getExperimentResults, compareExperiments, getRetrievalInspection
} from './research.controller';

const router = Router();

router.get('/dashboard', authenticate, getDashboard);
router.post('/retrieval-inspection', authenticate, getRetrievalInspection);

// Datasets
router.get('/datasets', authenticate, listDatasets);
router.post('/datasets', authenticate, validate(createDatasetSchema), createDataset);
router.get('/datasets/:id', authenticate, getDatasetDetail);

// Experiments
router.get('/experiments', authenticate, listExperiments);
router.post('/experiments', authenticate, validate(createExperimentSchema), createExperiment);
router.get('/experiments/compare', authenticate, compareExperiments); // Must be before /:id
router.get('/experiments/:id', authenticate, getExperimentDetail);
router.get('/experiments/:id/results', authenticate, getExperimentResults);

export default router;
