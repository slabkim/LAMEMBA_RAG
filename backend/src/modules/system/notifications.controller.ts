import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/database';

export const getNotifications = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user?.id || 'system';
    const notifications = await prisma.notification.findMany({
      where: { user_id: userId },
      orderBy: { created_at: 'desc' }
    });
    res.json({ data: notifications });
  } catch (error) { next(error); }
};

export const markAsRead = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    const updated = await prisma.notification.update({
      where: { id },
      data: { is_read: true, read_at: new Date() }
    });
    res.json({ data: updated });
  } catch (error) { next(error); }
};

export const markAllAsRead = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user?.id || 'system';
    await prisma.notification.updateMany({
      where: { user_id: userId, is_read: false },
      data: { is_read: true, read_at: new Date() }
    });
    res.json({ message: 'All notifications marked as read' });
  } catch (error) { next(error); }
};

export const deleteNotification = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    await prisma.notification.delete({ where: { id } });
    res.json({ message: 'Notification deleted' });
  } catch (error) { next(error); }
};

export const getPreferences = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user?.id || 'system';
    const prefs = await prisma.userNotificationPreference.findMany({
      where: { user_id: userId }
    });
    res.json({ data: prefs });
  } catch (error) { next(error); }
};

export const updatePreferences = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user?.id || 'system';
    const { notification_type, in_app_enabled, email_enabled } = req.body;
    
    const pref = await prisma.userNotificationPreference.upsert({
      where: { user_id_notification_type: { user_id: userId, notification_type } },
      update: { in_app_enabled, email_enabled },
      create: { user_id: userId, notification_type, in_app_enabled, email_enabled }
    });
    res.json({ data: pref });
  } catch (error) { next(error); }
};
