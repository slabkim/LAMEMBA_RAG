import { Router } from 'express';
import { getInstruments, getInstrumentTree, importInstrument } from './instruments.controller';
import { authenticate } from '../../middleware/authenticate';

const router = Router();

router.use(authenticate);
router.get('/', getInstruments);
router.get('/:id/tree', getInstrumentTree);
router.post('/import', importInstrument);

export default router;
