import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiFilter, FiSearch, FiEye, FiCheckCircle, FiClock, FiMessageSquare } from 'react-icons/fi';

const RevisionRequests = () => {
  const [statusFilter, setStatusFilter] = useState('ALL');
  
  const dummyRequests = [
    { id: 1, project: 'DED 2024 Univ Teknologi', section: '1.1 Visi Misi', reviewer: 'Dr. Budi Santoso', comment: 'Tambahkan landasan hukum pendirian dari statuta.', date: '2026-09-28', status: 'OPEN' },
    { id: 2, project: 'DED 2024 Univ Teknologi', section: '2.1 Mahasiswa', reviewer: 'Prof. Siti', comment: 'Data rasio pendaftar kurang relevan dengan tabel IKU.', date: '2026-09-27', status: 'OPEN' },
    { id: 3, project: 'DED 2024 Institut Sains', section: '3.1 SDM', reviewer: 'Dr. Budi Santoso', comment: 'Tolong rinci jumlah dosen dengan NIDN vs NIDK.', date: '2026-09-25', status: 'RESOLVED' },
    { id: 4, project: 'DED 2024 Institut Sains', section: '4.1 Keuangan', reviewer: 'Prof. Ahmad', comment: 'Grafik pendanaan penelitian tidak sinkron dengan narasi.', date: '2026-09-20', status: 'RESOLVED' }
  ];

  const filteredRequests = dummyRequests.filter(req => 
    statusFilter === 'ALL' ? true : req.status === statusFilter
  );

  return (
    <div className="p-6 text-[#172033] bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#163A5F]">Daftar Revisi</h1>
        <p className="text-sm text-gray-500 mt-1">Track and manage revision requests from reviewers.</p>
      </div>

      {/* Filters and Search Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="relative w-full sm:w-72">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search criteria or reviewer..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#163A5F] focus:ring-1 focus:ring-[#163A5F]"
          />
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <FiFilter className="text-gray-400" />
          <select 
            className="bg-gray-50 border border-gray-200 text-sm rounded-lg px-3 py-2 text-[#172033] focus:outline-none focus:border-[#163A5F]"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="ALL">All Status</option>
            <option value="OPEN">Open</option>
            <option value="RESOLVED">Resolved</option>
          </select>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold">
                <th className="py-3 px-5">Criteria Section</th>
                <th className="py-3 px-5">Project</th>
                <th className="py-3 px-5">Reviewer & Note</th>
                <th className="py-3 px-5">Date</th>
                <th className="py-3 px-5">Status</th>
                <th className="py-3 px-5 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredRequests.map((req) => (
                <tr key={req.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-5">
                    <div className="font-semibold text-[#172033]">{req.section}</div>
                  </td>
                  <td className="py-4 px-5">
                    <div className="text-sm text-gray-600">{req.project}</div>
                  </td>
                  <td className="py-4 px-5 max-w-xs">
                    <div className="text-sm font-medium text-[#163A5F]">{req.reviewer}</div>
                    <div className="text-xs text-gray-500 mt-1 truncate flex items-center">
                      <FiMessageSquare className="mr-1 text-gray-400" /> {req.comment}
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <div className="text-sm text-gray-600">{req.date}</div>
                  </td>
                  <td className="py-4 px-5">
                    {req.status === 'OPEN' ? (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 border border-amber-200">
                        <FiClock className="mr-1" /> Open
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200">
                        <FiCheckCircle className="mr-1" /> Resolved
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-5 text-center">
                    <Link 
                      to={`/review-workspace/${req.id}`}
                      className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded hover:bg-gray-50 transition-colors"
                    >
                      <FiEye className="mr-1.5" /> Detail
                    </Link>
                  </td>
                </tr>
              ))}
              
              {filteredRequests.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-gray-500 text-sm">
                    No revision requests found matching the current filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RevisionRequests;
