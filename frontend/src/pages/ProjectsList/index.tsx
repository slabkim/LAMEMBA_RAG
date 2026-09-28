import React, { useState } from "react";
import { FiPlus, FiFilter, FiSearch, FiFolder, FiMoreVertical } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ProjectsList() {
  const [showModal, setShowModal] = useState(false);
  
  // Dummy data for phase 2 testing
  const projects = [
    {
      id: "demo-1",
      name: "Akreditasi S1 Manajemen 2026",
      institution: "Universitas Demo",
      year: 2026,
      status: "ACTIVE",
      progress: "67%",
      members: 4
    }
  ];

  return (
    <div className="flex flex-col gap-6">
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
      <div className="bg-white border border-[#E4E7EC] rounded-lg p-4 flex justify-between items-center">
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
      <div className="grid grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white border border-[#E4E7EC] rounded-lg p-5 hover:shadow-sm transition">
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
              <p className="text-sm text-gray-500 mb-4">{project.institution} · {project.year}</p>
            </Link>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="flex flex-col gap-1 w-24">
                <span className="text-[10px] text-gray-500 font-medium uppercase">DED Progress</span>
                <span className="text-sm font-bold text-[#172033]">{project.progress}</span>
              </div>
              <div className="flex flex-col gap-1 items-end">
                <span className="text-[10px] text-gray-500 font-medium uppercase">Tim</span>
                <span className="text-sm font-bold text-[#172033]">{project.members} Anggota</span>
              </div>
            </div>
          </div>
        ))}
      </div>

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
                <input type="text" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" placeholder="Contoh: Akreditasi S1 Manajemen 2026" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tahun Akreditasi</label>
                  <input type="number" defaultValue="2026" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Instrumen</label>
                  <select className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 bg-white">
                    <option>LAMEMBA v2024</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Institusi / Perguruan Tinggi</label>
                <input type="text" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status Awal</label>
                <select className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 bg-white">
                  <option>Persiapan (Planning)</option>
                  <option>Aktif</option>
                </select>
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
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-[#163A5F] text-white rounded-md font-medium hover:bg-blue-800 transition"
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
