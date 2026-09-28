import React from "react";
import { Link, useParams } from "react-router-dom";
import { FiEdit2, FiSettings, FiFileText, FiUsers, FiClock, FiCheckCircle } from "react-icons/fi";

export default function ProjectDetail() {
  const { id } = useParams();

  return (
    <div className="flex flex-col gap-6">
      {/* Page Header */}
      <div className="flex items-start justify-between bg-white p-6 rounded-lg border border-[#E4E7EC]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Active</span>
            <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Demo Mode</span>
          </div>
          <h1 className="text-2xl font-bold text-[#172033]">Akreditasi S1 Manajemen 2026</h1>
          <p className="text-[#667085] text-sm">Universitas Demo · S1 · Instrumen LAMEMBA v2024</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center px-4 py-2 bg-gray-50 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
            <FiSettings className="mr-2" /> Pengaturan
          </button>
          <button className="flex items-center px-4 py-2 bg-[#163A5F] text-white rounded-lg text-sm font-medium hover:bg-blue-800 transition">
            <FiEdit2 className="mr-2" /> Edit Metadata
          </button>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-lg border border-[#E4E7EC]">
          <span className="text-[#667085] text-xs font-bold uppercase mb-1 block">DED Progress</span>
          <span className="text-3xl font-bold text-[#172033]">67%</span>
        </div>
        <div className="bg-white p-5 rounded-lg border border-[#E4E7EC]">
          <span className="text-[#667085] text-xs font-bold uppercase mb-1 block">Dokumen</span>
          <span className="text-3xl font-bold text-[#172033]">48</span>
        </div>
        <div className="bg-white p-5 rounded-lg border border-[#E4E7EC]">
          <span className="text-[#667085] text-xs font-bold uppercase mb-1 block">KB Chunks</span>
          <span className="text-3xl font-bold text-[#172033]">2,847</span>
        </div>
        <div className="bg-white p-5 rounded-lg border border-[#E4E7EC]">
          <span className="text-[#667085] text-xs font-bold uppercase mb-1 block">Pending Review</span>
          <span className="text-3xl font-bold text-[#172033]">5</span>
        </div>
      </div>

      {/* Quick Links / Navigation within Project */}
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-[#172033]">Project Workspace</h3>
          
          <Link to={`/projects/${id || 'demo'}/ded`} className="bg-white p-4 rounded-lg border border-[#E4E7EC] flex items-center justify-between hover:border-blue-400 group transition">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <FiCheckCircle size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#172033] group-hover:text-blue-600 transition">DED Overview & Editor</h4>
                <p className="text-xs text-gray-500 mt-1">Susun narasi per kriteria & indikator</p>
              </div>
            </div>
          </Link>

          <Link to={`/projects/${id || 'demo'}/documents`} className="bg-white p-4 rounded-lg border border-[#E4E7EC] flex items-center justify-between hover:border-blue-400 group transition">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <FiFileText size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#172033] group-hover:text-blue-600 transition">Manajemen Dokumen</h4>
                <p className="text-xs text-gray-500 mt-1">Upload DKPS, Evidence, dan lihat status pemrosesan</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-[#172033]">Tim & Aktivitas</h3>
          
          <div className="bg-white p-5 rounded-lg border border-[#E4E7EC]">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-sm text-[#667085] uppercase">Anggota Tim (4)</h4>
              <button className="text-sm text-blue-600 font-medium">Kelola</button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-bold">AD</div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-[#172033]">Admin Utama</span>
                  <span className="text-xs text-gray-500">Project Admin</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">PY</div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-[#172033]">Bapak Penyusun</span>
                  <span className="text-xs text-gray-500">DED Author</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
