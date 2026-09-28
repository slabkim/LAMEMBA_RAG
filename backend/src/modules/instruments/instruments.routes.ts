import { Router } from 'express';
import { getInstruments, getInstrumentTree } from './instruments.controller';
import { authenticate } from '../../middleware/authenticate';

const router = Router();
router.use(authenticate);
router.get('/', getInstruments);
router.get('/:id/tree', getInstrumentTree);

export default router;
