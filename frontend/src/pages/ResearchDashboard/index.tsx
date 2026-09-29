import React from 'react';
import { FiActivity, FiDatabase, FiLayers, FiList } from 'react-icons/fi';

const ResearchDashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-[#172033]">Research Dashboard</h1>
        <p className="text-sm text-gray-500">Pusat evaluasi metode AI, dataset DKPS, RAG parameter, dan metrik akurasi generasi dokumen LAMEMBA.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white border rounded-xl p-5 shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-gray-500">Evaluation Dataset</span>
            <FiDatabase className="text-gray-400" size={24} />
          </div>
          <span className="text-2xl font-bold text-[#172033]">1</span>
          <span className="text-xs text-emerald-600 font-medium">Ready for evaluation</span>
        </div>
        <div className="bg-white border rounded-xl p-5 shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-gray-500">Test Cases</span>
            <FiList className="text-gray-400" size={24} />
          </div>
          <span className="text-2xl font-bold text-[#172033]">120 Cases</span>
          <span className="text-xs text-blue-600 font-medium">Fully mapped</span>
        </div>
        <div className="bg-white border rounded-xl p-5 shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-gray-500">Methods</span>
            <FiLayers className="text-gray-400" size={24} />
          </div>
          <span className="text-2xl font-bold text-[#172033]">3 Metode</span>
          <span className="text-xs text-blue-600 font-medium">Active: Hybrid RAG</span>
        </div>
        <div className="bg-white border rounded-xl p-5 shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-gray-500">Latest Run</span>
            <FiActivity className="text-gray-400" size={24} />
          </div>
          <span className="text-lg font-bold text-gray-500 mt-1">Belum ada</span>
          <span className="text-xs text-amber-500 font-medium">No results yet</span>
        </div>
      </div>

      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-[#172033] mb-4">Aktivitas Riset Terkini</h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-start border-b pb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <FiDatabase size={20} />
            </div>
            <div>
              <p className="font-bold text-sm text-[#172033]">Dataset Evaluasi Berhasil Diunggah</p>
              <p className="text-sm text-gray-500 mt-1">File S1_Mgt_Eval_Dataset_v1.json berisikan 120 pasang QA berhasil dimuat ke repositori.</p>
              <p className="text-xs text-gray-400 mt-1">10 menit yang lalu</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <FiLayers size={20} />
            </div>
            <div>
              <p className="font-bold text-sm text-[#172033]">Konfigurasi Hybrid RAG Diperbarui</p>
              <p className="text-sm text-gray-500 mt-1">Parameter Reciprocal Rank Fusion disesuaikan ke default k = 60.</p>
              <p className="text-xs text-gray-400 mt-1">1 jam yang lalu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDashboard;
