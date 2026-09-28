import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  FiHome, FiFolder, FiFileText, FiDatabase, FiBookOpen, 
  FiPieChart, FiList, FiBox, FiCheckSquare, FiSearch, 
  FiBell, FiSettings, FiUsers, FiLogOut 
} from 'react-icons/fi';

export default function AppLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path);

  const isAdmin = user?.roles.includes('ADMIN');
  const isResearcher = user?.roles.includes('RESEARCHER');
  const isReviewer = user?.roles.includes('REVIEWER');
  const isPenyusun = user?.roles.includes('DED_AUTHOR');

  // Helpers to determine visibility based on role matrix (doc 13)
  const showWorkspace = isAdmin || isPenyusun || isReviewer;
  const showReview = isAdmin || isReviewer || isPenyusun;
  const showResearch = isAdmin || isResearcher;
  const showSystem = isAdmin;

  return (
    <div className="flex h-screen bg-[#F7F9FC] overflow-hidden text-[#172033]">
      {/* SIDEBAR */}
      <div className="w-[260px] bg-white border-r border-[#E4E7EC] flex flex-col shrink-0 overflow-y-auto">
        {/* Brand */}
        <div className="p-6 pb-2">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">D</div>
            <div className="flex flex-col">
              <span className="text-[#163A5F] text-base font-bold">DED LAMEMBA</span>
              <span className="text-[#667085] text-[10px] font-bold">AI DOC GENERATOR</span>
            </div>
          </div>

          {/* Active Workspace Card */}
          <div className="bg-[#F7F9FC] p-3 rounded-lg border border-[#E4E7EC] mb-5">
            <span className="text-[#667085] text-[9px] font-bold">AKTIF WORKSPACE</span>
            <div className="text-[#172033] text-xs font-bold mt-1">S1 Manajemen 2026</div>
            <div className="flex items-center gap-1 mt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
              <span className="text-[#667085] text-[10px]">DEMO Mode</span>
            </div>
          </div>
        </div>

        {/* Navigation Groups */}
        <div className="flex-1 px-4 pb-6 space-y-6">
          
          {showWorkspace && (
            <div className="flex flex-col gap-1">
              <span className="text-[#667085] text-[11px] font-bold mb-1 px-2">Workspace</span>
              <NavItem to="/dashboard" icon={<FiHome />} label="Dashboard" active={isActive('/dashboard')} />
              {(isAdmin || isPenyusun) && <NavItem to="/projects" icon={<FiFolder />} label={isPenyusun && !isAdmin ? "My Projects" : "Projects"} active={isActive('/projects')} />}
              <NavItem to="/projects/demo/documents" icon={<FiFileText />} label="Documents" active={isActive('/projects/demo/documents')} />
              <NavItem to="/projects/demo/knowledge-base" icon={<FiDatabase />} label="Knowledge Base" active={isActive('/projects/demo/knowledge-base')} />
              <NavItem to="/projects/demo/ded" icon={<FiBookOpen />} label="DED Overview" active={isActive('/projects/demo/ded')} />
            </div>
          )}

          {showReview && (
            <div className="flex flex-col gap-1">
              <span className="text-[#667085] text-[11px] font-bold mb-1 px-2">Review</span>
              <NavItem to="/review" icon={<FiCheckSquare />} label="Review Dashboard" active={isActive('/review') && !isActive('/review/revisions')} />
              <NavItem to="/review/revisions" icon={<FiList />} label="Revision Requests" active={isActive('/review/revisions')} />
            </div>
          )}

          {showResearch && (
            <div className="flex flex-col gap-1">
              <span className="text-[#667085] text-[11px] font-bold mb-1 px-2">Research</span>
              <NavItem to="/research" icon={<FiPieChart />} label="Research Dashboard" active={location.pathname === '/research'} />
              <NavItem to="/research/datasets" icon={<FiList />} label="Evaluation Dataset" active={isActive('/research/datasets')} />
              <NavItem to="/research/experiments" icon={<FiBox />} label="Experiments" active={isActive('/research/experiments')} />
              <NavItem to="/research/retrieval-inspection" icon={<FiSearch />} label="Retrieval Inspection" active={isActive('/research/retrieval-inspection')} />
            </div>
          )}

          {showSystem && (
            <div className="flex flex-col gap-1">
              <span className="text-[#667085] text-[11px] font-bold mb-1 px-2">System</span>
              <NavItem to="/system/users" icon={<FiUsers />} label="Users & Access" active={isActive('/system/users')} />
              <NavItem to="/system/settings" icon={<FiSettings />} label="Settings" active={isActive('/system/settings')} />
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-[#E4E7EC] mt-auto">
          <button onClick={logout} className="flex items-center gap-2 text-[#667085] hover:text-red-600 text-sm font-medium w-full px-2 py-2">
            <FiLogOut /> Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-[72px] bg-white border-b border-[#E4E7EC] flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center text-sm">
            <span className="text-[#667085] mr-2 capitalize">{user?.roles[0]?.toLowerCase().replace('_', ' ') || 'User'}</span>
            <span className="text-[#667085] mr-2">/</span>
            <span className="text-[#172033] font-bold capitalize">{location.pathname.split('/')[1] || 'Dashboard'}</span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center bg-[#F7F9FC] rounded-lg border border-[#E4E7EC] px-3 py-2 w-[240px]">
              <FiSearch className="text-[#667085] mr-2" />
              <input
                type="text"
                placeholder="Cari..."
                className="bg-transparent border-none outline-none text-sm w-full text-[#667085]"
              />
            </div>
            
            <button className="relative text-[#667085] hover:text-[#163A5F]">
              <FiBell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="flex items-center gap-3 border-l border-[#E4E7EC] pl-5">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">
                {user?.full_name?.charAt(0) || 'U'}
              </div>
              <div className="flex flex-col">
                <span className="text-[#172033] text-[13px] font-bold">{user?.full_name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[#667085] text-[11px] truncate w-24">{user?.email}</span>
                  <span className="bg-[#163A5F] text-white text-[9px] font-bold px-1.5 rounded uppercase">
                    {user?.roles[0]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

// NavItem Helper Component
function NavItem({ to, icon, label, active }: { to: string, icon: React.ReactNode, label: string, active: boolean }) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
        active 
          ? 'bg-[#E8EEF5] text-[#163A5F] font-bold' 
          : 'text-[#172033] hover:bg-gray-100'
      }`}
    >
      <div className={`text-lg ${active ? 'text-blue-600' : 'text-gray-400'}`}>
        {icon}
      </div>
      {label}
    </Link>
  );
}
