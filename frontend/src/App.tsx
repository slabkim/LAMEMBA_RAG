import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import CriterionDetailOrientasiStrategis from './pages/CriterionDetailOrientasiStrategis';
import DedOverview from './pages/DedOverview';
import DocumentsProcessing from './pages/DocumentsProcessing';
import EvaluationDataset from './pages/EvaluationDataset';
import Experiments from './pages/Experiments';
import KnowledgeBase from './pages/KnowledgeBase';
import ProjectDetail from './pages/ProjectDetail';
import ProjectsList from './pages/ProjectsList';
import ResearchDashboard from './pages/ResearchDashboard';
import RetrievalInspection from './pages/RetrievalInspection';
function App() {
  return (
    <BrowserRouter>
        <Routes>
			<Route path="/" element={<AdminDashboard />} />
			<Route path="/AdminDashboard" element={<AdminDashboard />} />
			<Route path="/CriterionDetailOrientasiStrategis" element={<CriterionDetailOrientasiStrategis />} />
			<Route path="/DedOverview" element={<DedOverview />} />
			<Route path="/DocumentsProcessing" element={<DocumentsProcessing />} />
			<Route path="/EvaluationDataset" element={<EvaluationDataset />} />
			<Route path="/Experiments" element={<Experiments />} />
			<Route path="/KnowledgeBase" element={<KnowledgeBase />} />
			<Route path="/ProjectDetail" element={<ProjectDetail />} />
			<Route path="/ProjectsList" element={<ProjectsList />} />
			<Route path="/ResearchDashboard" element={<ResearchDashboard />} />
			<Route path="/RetrievalInspection" element={<RetrievalInspection />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;