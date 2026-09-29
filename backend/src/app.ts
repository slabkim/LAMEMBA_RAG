import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { env } from './config/env';
import authRoutes from './modules/auth/auth.routes';
import { errorHandler } from './middleware/errorHandler';
import { requestId } from './middleware/requestId';

import dashboardRoutes from './modules/dashboard/dashboard.routes';
import userRoutes from './modules/users/users.routes';
import roleRoutes from './modules/roles/roles.routes';
import projectRoutes from './modules/projects/projects.routes';
import instrumentRoutes from './modules/instruments/instruments.routes';
import documentRoutes from './modules/documents/documents.routes';
import knowledgeBaseRoutes from './modules/knowledge-base/knowledge-base.routes';
import dedRoutes from './modules/ded/ded.routes';
import reviewRoutes from './modules/review/review.routes';
import researchRoutes from './modules/research/research.routes';
import notificationRoutes from './modules/system/notifications.routes';
import auditRoutes from './modules/system/audit.routes';
import settingsRoutes from './modules/system/settings.routes';
import dedStructureRoutes from './modules/system/ded-structure.routes';

export const app = express();

// Middleware
app.use(requestId);
app.use(cors({
  origin: env.FRONTEND_URL,
  credentials: true, // Allow cookies
}));
app.use(express.json());
app.use(cookieParser());

// Health Check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes - Phase 1
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/instruments', instrumentRoutes);

// Routes - Phase 3
app.use('/api/documents', documentRoutes);
app.use('/api/knowledge-base', knowledgeBaseRoutes);

// Routes - Phase 4
app.use('/api/ded', dedRoutes);

// Routes - Phase 5
app.use('/api/review', reviewRoutes);

// Routes - Phase 6
app.use('/api/research', researchRoutes);

// Routes - Phase 7
app.use('/api/notifications', notificationRoutes);
app.use('/api/audit-logs', auditRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/ded-structure', dedStructureRoutes);


// Global Error Handler
app.use(errorHandler);
