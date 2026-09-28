import { Router } from 'express';
import { getUsers, createUser, disableUser } from './users.controller';
import { authenticate } from '../../middleware/authenticate';
import { validate } from '../../middleware/validate';
import { createUserSchema } from './users.schema';

const router = Router();
router.use(authenticate);
// Minimal setup for Phase 2: assume user is ADMIN (in real app, add authorize('users.view') middleware)
router.get('/', getUsers);
router.post('/', validate(createUserSchema), createUser);
router.post('/:id/disable', disableUser);

export default router;
