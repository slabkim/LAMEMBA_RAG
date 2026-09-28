import { Router } from 'express';
import { getDashboardSummary } from './dashboard.controller';
import { authenticate } from '../../middleware/authenticate';

const router = Router();

router.get('/', authenticate, getDashboardSummary);

export default router;
