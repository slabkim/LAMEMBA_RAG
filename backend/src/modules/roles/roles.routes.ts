import { Router } from 'express';
import { getRoles } from './roles.controller';
import { authenticate } from '../../middleware/authenticate';

const router = Router();
router.get('/', authenticate, getRoles);
export default router;
