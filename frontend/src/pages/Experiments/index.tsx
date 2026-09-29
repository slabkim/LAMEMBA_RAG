import React from 'react';
import { FiPlay, FiPlus, FiSettings } from 'react-icons/fi';

const Experiments: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-[#172033]">Experiments</h1>
          <p className="text-sm text-gray-500">Konfigurasi dan jalankan pengujian berbagai metode LLM & RAG.</p>
        </div>
        <button className="bg-[#163A5F] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-opacity-90">
          <FiPlus /> Buat Eksperimen
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'LLM Only (Zero-shot)', color: 'text-red-600', bg: 'bg-red-50', badge: 'Not Recommended' },
          { name: 'Semantic RAG', color: 'text-blue-600', bg: 'bg-blue-50', badge: 'Baseline' },
          { name: 'Hybrid RAG (RRF)', color: 'text-emerald-600', bg: 'bg-emerald-50', badge: 'Active / Default' }
        ].map((method, idx) => (
          <div key={idx} className="bg-white border rounded-xl p-5 shadow-sm flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-[#172033]">{method.name}</h3>
              <span className={`px-2 py-1 ${method.bg} ${method.color} rounded text-xs font-bold`}>{method.badge}</span>
            </div>
            <p className="text-sm text-gray-500 flex-1">
              Metode pengujian menggunakan arsitektur ini untuk mengevaluasi kualitas jawaban dari pertanyaan akreditasi.
            </p>
            <div className="flex gap-2 mt-2">
              <button className="flex-1 border text-[#172033] px-3 py-2 rounded-lg text-xs font-bold flex justify-center items-center gap-2 hover:bg-gray-50">
                <FiSettings /> Konfigurasi
              </button>
              <button className="flex-1 bg-[#163A5F] text-white px-3 py-2 rounded-lg text-xs font-bold flex justify-center items-center gap-2 hover:bg-opacity-90">
                <FiPlay /> Run Evaluasi
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiments;
