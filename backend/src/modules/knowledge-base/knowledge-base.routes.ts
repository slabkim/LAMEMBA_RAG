import { Router } from 'express';
import { getKBStats, listChunks, getChunkDetail, triggerReindex } from './knowledge-base.controller';
import { authenticate } from '../../middleware/authenticate';

const router = Router();
router.use(authenticate);

router.get('/stats', getKBStats);
router.get('/chunks', listChunks);
router.get('/chunks/:id', getChunkDetail);
router.post('/reindex', triggerReindex);

export default router;
