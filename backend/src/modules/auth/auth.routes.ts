import { Router } from 'express';
import { login, logout, me, changePassword } from './auth.controller';
import { validate } from '../../middleware/validate';
import { authenticate } from '../../middleware/authenticate';
import { loginSchema, changePasswordSchema } from './auth.schema';

const router = Router();

// Public
router.post('/login', validate(loginSchema), login);

// Protected
router.post('/logout', authenticate, logout);
router.get('/me', authenticate, me);
router.post('/change-password', authenticate, validate(changePasswordSchema), changePassword);

export default router;
