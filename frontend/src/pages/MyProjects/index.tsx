import React, { useState } from 'react';
import { FiSearch, FiFilter, FiFolder, FiFileText, FiCheckCircle, FiClock, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    name: 'Akreditasi Manajemen S1 2024',
    prodi: 'Manajemen',
    jenjang: 'S1',
    tahun: 2024,
    progress: 75,
    docs: 120,
    drafted: 45,
    approved: 30,
    status: 'Active'
  },
  {
    id: 2,
    name: 'Re-akreditasi Akuntansi D3 2023',
    prodi: 'Akuntansi',
    jenjang: 'D3',
    tahun: 2023,
    progress: 100,
    docs: 98,
    drafted: 60,
    approved: 60,
    status: 'Completed'
  },
  {
    id: 3,
    name: 'Pengajuan Prodi Baru Bisnis Digital S1',
    prodi: 'Bisnis Digital',
    jenjang: 'S1',
    tahun: 2025,
    progress: 15,
    docs: 45,
    drafted: 10,
    approved: 2,
    status: 'Draft'
  }
];

export default function MyProjects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Semua');

  const filteredProjects = projects.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = statusFilter === 'Semua' || p.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#172033] p-6 font-sans">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#163A5F]">Proyek Saya</h1>
        <p className="text-[#667085] mt-1 text-sm">Daftar proyek akreditasi LAMEMBA yang ditugaskan kepada Anda.</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded-lg shadow-sm border border-[#E4E7EC] flex items-center">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-full mr-4">
            <FiFolder size={24} />
          </div>
          <div>
            <p className="text-sm text-[#667085] font-medium">Active Projects</p>
            <p className="text-2xl font-bold">2</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-[#E4E7EC] flex items-center">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-full mr-4">
            <FiCheckCircle size={24} />
          </div>
          <div>
            <p className="text-sm text-[#667085] font-medium">DED Progress (Avg)</p>
            <p className="text-2xl font-bold">45%</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-[#E4E7EC] flex items-center">
          <div className="p-3 bg-amber-50 text-amber-600 rounded-full mr-4">
            <FiClock size={24} />
          </div>
          <div>
            <p className="text-sm text-[#667085] font-medium">Pending Reviews</p>
            <p className="text-2xl font-bold">8</p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-[#E4E7EC] mb-6 gap-4">
        <div className="relative w-full md:w-96">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input 
            type="text" 
            placeholder="Cari nama proyek atau prodi..." 
            className="w-full pl-10 pr-4 py-2 border border-[#E4E7EC] rounded-md text-sm focus:outline-none focus:border-[#163A5F]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center w-full md:w-auto space-x-3">
          <FiFilter className="text-gray-400" />
          <select 
            className="border border-[#E4E7EC] rounded-md px-3 py-2 text-sm focus:outline-none"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>Semua</option>
            <option>Active</option>
            <option>Completed</option>
            <option>Draft</option>
          </select>
        </div>
      </div>

      {/* Project Cards */}
      {filteredProjects.length === 0 ? (
        <div className="bg-white p-10 rounded-lg shadow-sm border border-[#E4E7EC] text-center">
          <div className="inline-block p-4 bg-gray-50 rounded-full mb-4 text-gray-400">
            <FiFolder size={32} />
          </div>
          <h3 className="text-lg font-medium mb-1">Tidak ada proyek</h3>
          <p className="text-[#667085] text-sm">Tidak ada proyek yang cocok dengan filter pencarian.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-sm border border-[#E4E7EC] p-5 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="px-2 py-0.5 bg-gray-100 text-[#172033] text-xs font-semibold rounded">{project.jenjang}</span>
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded">{project.tahun}</span>
                    {project.status === 'Active' && <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded border border-green-200">Active</span>}
                    {project.status === 'Completed' && <span className="px-2 py-0.5 bg-gray-50 text-gray-700 text-xs font-medium rounded border border-gray-200">Completed</span>}
                    {project.status === 'Draft' && <span className="px-2 py-0.5 bg-amber-50 text-amber-700 text-xs font-medium rounded border border-amber-200">Draft</span>}
                  </div>
                  <h3 className="text-lg font-bold text-[#163A5F]">{project.name}</h3>
                  <p className="text-sm text-[#667085]">Program Studi {project.prodi}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-[#667085]">Progress Keseluruhan</span>
                  <span className="font-bold">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className={`h-2 rounded-full ${project.progress === 100 ? 'bg-emerald-500' : 'bg-[#163A5F]'}`} style={{ width: `${project.progress}%` }}></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 border-y border-gray-100 py-3">
                <div className="text-center">
                  <p className="text-xs text-[#667085] mb-1">Total Dokumen</p>
                  <p className="font-semibold text-[#172033]">{project.docs}</p>
                </div>
                <div className="text-center border-l border-gray-100">
                  <p className="text-xs text-[#667085] mb-1">DED Drafted</p>
                  <p className="font-semibold text-[#172033]">{project.drafted}</p>
                </div>
                <div className="text-center border-l border-gray-100">
                  <p className="text-xs text-[#667085] mb-1">Approved</p>
                  <p className="font-semibold text-emerald-600">{project.approved}</p>
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-700">AB</div>
                  <div className="w-8 h-8 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-xs font-bold text-green-700">CD</div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">+2</div>
                </div>
                <Link to={`/projects/${project.id}`} className="px-4 py-2 bg-[#163A5F] text-white text-sm font-medium rounded hover:bg-blue-800 flex items-center transition-colors">
                  Buka Proyek <FiChevronRight className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
