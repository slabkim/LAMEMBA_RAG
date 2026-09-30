import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FiEdit2, FiSettings, FiFileText, FiCheckCircle } from "react-icons/fi";
import { fetchAPI } from "../../lib/api";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const res = await fetchAPI(`/projects/${id}`);
        setProject(res.data);
      } catch (err) {
        console.error(err);
        alert("Gagal memuat detail proyek.");
        navigate('/projects');
      } finally {
        setLoading(false);
      }
    };
    if (id) loadProject();
  }, [id, navigate]);

  if (loading) {
    return <div className="p-6 text-gray-500">Memuat detail proyek...</div>;
  }

  if (!project) return null;

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Page Header */}
      <div className="flex items-start justify-between bg-white p-6 rounded-lg border border-[#E4E7EC] shadow-sm">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${project.status === 'ACTIVE' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
              {project.status}
            </span>
            <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded font-mono">
              {project.code}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-[#172033]">{project.name}</h1>
          <p className="text-[#667085] text-sm">
            {project.program_studi} · {project.jenjang} · {project.instrumentVersion?.version_label || 'Instrumen Default'}
          </p>
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-lg border border-[#E4E7EC] shadow-sm">
          <span className="text-[#667085] text-xs font-bold uppercase mb-1 block">DED Progress</span>
          <span className="text-3xl font-bold text-[#172033]">0%</span>
        </div>
        <div className="bg-white p-5 rounded-lg border border-[#E4E7EC] shadow-sm">
          <span className="text-[#667085] text-xs font-bold uppercase mb-1 block">Dokumen (DKPS)</span>
          <span className="text-3xl font-bold text-[#172033]">{project.documents?.length || 0}</span>
        </div>
        <div className="bg-white p-5 rounded-lg border border-[#E4E7EC] shadow-sm">
          <span className="text-[#667085] text-xs font-bold uppercase mb-1 block">KB Chunks</span>
          <span className="text-3xl font-bold text-[#172033]">0</span>
        </div>
        <div className="bg-white p-5 rounded-lg border border-[#E4E7EC] shadow-sm">
          <span className="text-[#667085] text-xs font-bold uppercase mb-1 block">Pending Review</span>
          <span className="text-3xl font-bold text-[#172033]">0</span>
        </div>
      </div>

      {/* Quick Links / Navigation within Project */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-[#172033]">Project Workspace</h3>
          
          <Link to={`/projects/${project.id}/ded`} className="bg-white p-4 rounded-lg border border-[#E4E7EC] shadow-sm flex items-center justify-between hover:border-blue-400 group transition">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <FiCheckCircle size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#172033] group-hover:text-blue-600 transition">DED Overview & Editor</h4>
                <p className="text-xs text-gray-500 mt-1">Susun narasi per kriteria & indikator menggunakan AI</p>
              </div>
            </div>
          </Link>

          <Link to={`/projects/${project.id}/documents`} className="bg-white p-4 rounded-lg border border-[#E4E7EC] shadow-sm flex items-center justify-between hover:border-blue-400 group transition">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <FiFileText size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#172033] group-hover:text-blue-600 transition">Manajemen Dokumen</h4>
                <p className="text-xs text-gray-500 mt-1">Upload DKPS, Panduan, dan bangun Knowledge Base</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-[#172033]">Tim & Aktivitas</h3>
          
          <div className="bg-white p-5 rounded-lg border border-[#E4E7EC] shadow-sm h-full">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-sm text-[#667085] uppercase">Anggota Tim (1)</h4>
              <button className="text-sm text-blue-600 font-medium">Kelola</button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">
                  {project.created_by ? 'AD' : 'U'}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-[#172033]">Admin Utama</span>
                  <span className="text-xs text-gray-500">Pembuat Proyek</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
