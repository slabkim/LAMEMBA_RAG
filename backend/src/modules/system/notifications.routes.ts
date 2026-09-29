import { Router } from 'express';
import { authenticate } from '../../middleware/authenticate';
import {
  getNotifications, markAsRead, markAllAsRead, deleteNotification,
  getPreferences, updatePreferences
} from './notifications.controller';

const router = Router();
router.use(authenticate);

router.get('/', getNotifications);
router.post('/read-all', markAllAsRead);
router.patch('/:id/read', markAsRead);
router.delete('/:id', deleteNotification);

router.get('/preferences', getPreferences);
router.put('/preferences', updatePreferences);

export default router;
