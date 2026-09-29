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
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

// Shared Workspace Pages
import AdminDashboard from './pages/AdminDashboard';
import ProjectsList from './pages/ProjectsList';
import ProjectDetail from './pages/ProjectDetail';
import DocumentsProcessing from './pages/DocumentsProcessing';
import KnowledgeBase from './pages/KnowledgeBase';

// DED Workflow
import DedOverview from './pages/DedOverview';
import DedWorkspaceEditor from './pages/DedWorkspaceEditor';
import EvidenceViewer from './pages/EvidenceViewer';
import VersionHistory from './pages/VersionHistory';

// Penyusun
import MyProjects from './pages/MyProjects';
import AiGeneration from './pages/AiGeneration';
import ReviewStatus from './pages/ReviewStatus';

// Review
import ReviewDashboard from './pages/ReviewDashboard';
import ReviewWorkspace from './pages/ReviewWorkspace';
import RevisionRequests from './pages/RevisionRequests';

// Research
import ResearchDashboard from './pages/ResearchDashboard';
import EvaluationDataset from './pages/EvaluationDataset';
import DatasetDetail from './pages/DatasetDetail';
import Experiments from './pages/Experiments';
import ExperimentDetail from './pages/ExperimentDetail';
import RetrievalInspection from './pages/RetrievalInspection';
import RagasEvaluation from './pages/RagasEvaluation';
import MethodComparison from './pages/MethodComparison';

// System Pages (Phase 7)
import UsersAccess from './pages/system/UsersAccess';
import RolesPermissions from './pages/system/RolesPermissions';
import Notifications from './pages/system/Notifications';
import AuditLogs from './pages/system/AuditLogs';
import Settings from './pages/system/Settings';
import DedStructure from './pages/system/DedStructure';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/403" element={<AccessDenied />} />
          <Route path="/session-expired" element={<SessionExpired />} />

          {/* Protected Routes */}
          <Route element={<RequireAuth />}>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/projects" element={<ProjectsList />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/projects/:id/documents" element={<DocumentsProcessing />} />
              <Route path="/projects/:id/knowledge-base" element={<KnowledgeBase />} />
              
              <Route path="/projects/:id/ded" element={<DedOverview />} />
              <Route path="/projects/:id/ded/:criterionId/edit" element={<DedWorkspaceEditor />} />
              <Route path="/projects/:id/ded/:criterionId/generate" element={<AiGeneration />} />
              <Route path="/projects/:id/ded/:criterionId/versions" element={<VersionHistory />} />
              <Route path="/projects/:id/evidence/:evidenceId" element={<EvidenceViewer />} />
              
              {/* Notifikasi Global */}
              <Route path="/system/notifications" element={<Notifications />} />

              <Route element={<RequireRole roles={['ADMIN', 'PENYUSUN']} />}>
                <Route path="/my-projects" element={<MyProjects />} />
                <Route path="/projects/:id/review-status" element={<ReviewStatus />} />
              </Route>

              <Route element={<RequireRole roles={['ADMIN', 'REVIEWER']} />}>
                <Route path="/review" element={<ReviewDashboard />} />
                <Route path="/review/projects/:projectId/criteria/:criterionId" element={<ReviewWorkspace />} />
                <Route path="/review/revisions" element={<RevisionRequests />} />
              </Route>
              
              <Route element={<RequireRole roles={['ADMIN', 'RESEARCHER']} />}>
                <Route path="/research" element={<ResearchDashboard />} />
                <Route path="/research/datasets" element={<EvaluationDataset />} />
                <Route path="/research/datasets/:id" element={<DatasetDetail />} />
                <Route path="/research/experiments" element={<Experiments />} />
                <Route path="/research/experiments/:id" element={<ExperimentDetail />} />
                <Route path="/research/retrieval-inspection" element={<RetrievalInspection />} />
                <Route path="/research/ragas-evaluation" element={<RagasEvaluation />} />
                <Route path="/research/method-comparison" element={<MethodComparison />} />
              </Route>

              <Route element={<RequireRole roles={['ADMIN']} />}>
                <Route path="/system/users" element={<UsersAccess />} />
                <Route path="/system/roles" element={<RolesPermissions />} />
                <Route path="/system/audit-logs" element={<AuditLogs />} />
                <Route path="/system/settings" element={<Settings />} />
                <Route path="/system/ded-structure" element={<DedStructure />} />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
