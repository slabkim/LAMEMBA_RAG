import React, { useState, useEffect } from "react";
import { FiPlus, FiFilter, FiSearch, FiFolder } from "react-icons/fi";
import { Link } from "react-router-dom";
import { fetchAPI } from "../../lib/api";

export default function ProjectsList() {
  const [showModal, setShowModal] = useState(false);
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Form state
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [program_studi, setProgramStudi] = useState('');
  const [jenjang, setJenjang] = useState('S1');

  const loadProjects = async () => {
    try {
      setLoading(true);
      const res = await fetchAPI('/projects');
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleCreate = async () => {
    try {
      await fetchAPI('/projects', {
        method: 'POST',
        body: JSON.stringify({
          name,
          code,
          program_studi,
          jenjang
        })
      });
      setShowModal(false);
      loadProjects();
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1.5">
          <span className="text-[#172033] text-[28px] font-bold">Projects</span>
          <span className="text-[#667085] text-sm">Kelola proyek akreditasi LAMEMBA Anda di sini.</span>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="flex items-center bg-[#163A5F] text-white py-2.5 px-4 gap-2 rounded-lg font-bold text-sm hover:bg-blue-800 transition"
        >
          <FiPlus /> Buat Proyek Baru
        </button>
      </div>

      {/* Filters & Search */}
      <div className="bg-white border border-[#E4E7EC] rounded-lg p-4 flex justify-between items-center shadow-sm">
        <div className="flex gap-3">
          <div className="relative w-64">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Cari nama proyek..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
            <FiFilter /> Filter
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      {loading ? (
        <div className="text-gray-500">Memuat proyek...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white border border-[#E4E7EC] rounded-xl p-5 hover:shadow-md transition shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <FiFolder size={20} />
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${project.status === 'ACTIVE' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                    {project.status}
                  </span>
                </div>
                
                <Link to={`/projects/${project.id}`} className="block group">
                  <h3 className="text-lg font-bold text-[#172033] group-hover:text-blue-600 transition mb-1 line-clamp-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{project.program_studi} · {project.jenjang}</p>
                </Link>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-gray-500 font-medium uppercase">Total Dokumen</span>
                  <span className="text-sm font-bold text-[#172033]">{project.document_count || 0}</span>
                </div>
                <div className="flex flex-col gap-1 items-end">
                  <span className="text-[10px] text-gray-500 font-medium uppercase">Tim</span>
                  <span className="text-sm font-bold text-[#172033]">{project.members || 1} Anggota</span>
                </div>
              </div>
            </div>
          ))}
          {projects.length === 0 && (
             <div className="col-span-3 text-center py-10 text-gray-500">
               Belum ada proyek. Silakan buat proyek baru.
             </div>
          )}
        </div>
      )}

      {/* Simple Create Project Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-[500px] overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-[#172033]">Buat Proyek Baru</h2>
              <p className="text-sm text-gray-500 mt-1">Inisialisasi workspace akreditasi LAMEMBA baru.</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Proyek</label>
                <input type="text" value={name} onChange={e=>setName(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" placeholder="Contoh: Akreditasi S1 Manajemen 2026" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kode Proyek</label>
                  <input type="text" value={code} onChange={e=>setCode(e.target.value)} placeholder="MGT-2026" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Jenjang</label>
                  <select value={jenjang} onChange={e=>setJenjang(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 bg-white">
                    <option value="D3">D3</option>
                    <option value="D4">D4</option>
                    <option value="S1">S1</option>
                    <option value="S2">S2</option>
                    <option value="S3">S3</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Program Studi</label>
                <input type="text" value={program_studi} onChange={e=>setProgramStudi(e.target.value)} placeholder="Contoh: Manajemen" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
              </div>
            </div>
            <div className="p-6 bg-gray-50 flex justify-end gap-3 border-t border-gray-100">
              <button 
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-white transition"
              >
                Batal
              </button>
              <button 
                onClick={handleCreate}
                disabled={!name || !code || !program_studi}
                className="px-4 py-2 bg-[#163A5F] text-white rounded-md font-medium hover:bg-blue-800 transition disabled:opacity-50"
              >
                Buat Proyek
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
