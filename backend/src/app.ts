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


// Global Error Handler
app.use(errorHandler);
