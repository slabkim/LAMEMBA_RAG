import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { RequireAuth, RequireRole } from './components/RequireAuth';
import AppLayout from './layouts/AppLayout';

// Auth Pages
import Login from './pages/auth/Login';
import AccessDenied from './pages/auth/AccessDenied';
import NotFound from './pages/auth/NotFound';
import SessionExpired from './pages/auth/SessionExpired';

// Existing Pages (Akan di-refactor perlahan, dibuang sidebar & header lamanya)
import AdminDashboard from './pages/AdminDashboard';
import DedOverview from './pages/DedOverview';
import DocumentsProcessing from './pages/DocumentsProcessing';
import EvaluationDataset from './pages/EvaluationDataset';
import Experiments from './pages/Experiments';
import KnowledgeBase from './pages/KnowledgeBase';
import ProjectDetail from './pages/ProjectDetail';
import ProjectsList from './pages/ProjectsList';
import ResearchDashboard from './pages/ResearchDashboard';
import RetrievalInspection from './pages/RetrievalInspection';

// System Pages
import UsersAccess from './pages/system/UsersAccess';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/403" element={<AccessDenied />} />
          <Route path="/session-expired" element={<SessionExpired />} />

          {/* Protected Routes - Workspace */}
          <Route element={<RequireAuth />}>
            
            <Route element={<AppLayout />}>
              {/* Redirect root to dashboard */}
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/projects" element={<ProjectsList />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/projects/:id/documents" element={<DocumentsProcessing />} />
              <Route path="/projects/:id/knowledge-base" element={<KnowledgeBase />} />
              <Route path="/projects/:id/ded" element={<DedOverview />} />
              
              {/* Protected Routes - Research (Researcher & Admin only) */}
              <Route element={<RequireRole roles={['ADMIN', 'RESEARCHER']} />}>
                <Route path="/research" element={<ResearchDashboard />} />
                <Route path="/research/datasets" element={<EvaluationDataset />} />
                <Route path="/research/experiments" element={<Experiments />} />
                <Route path="/research/retrieval-inspection" element={<RetrievalInspection />} />
              </Route>

              {/* Protected Routes - System (Admin only) */}
              <Route element={<RequireRole roles={['ADMIN']} />}>
                <Route path="/system/users" element={<UsersAccess />} />
              </Route>
            </Route>

          </Route>

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
