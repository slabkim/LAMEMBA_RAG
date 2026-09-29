import { Router } from 'express';
import { authenticate } from '../../middleware/authenticate';
import { getSettings, updateSettings } from './settings.controller';

const router = Router();
router.use(authenticate);

router.get('/', getSettings);
router.put('/', updateSettings);

export default router;
