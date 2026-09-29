import { Router } from 'express';
import { authenticate } from '../../middleware/authenticate';
import { getDedStructure } from './ded-structure.controller';

const router = Router();
router.get('/', authenticate, getDedStructure);
export default router;
