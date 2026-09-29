import React from 'react';
import { FiSearch, FiCode, FiLayers } from 'react-icons/fi';

const RetrievalInspection: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-[#172033]">Retrieval Inspection</h1>
        <p className="text-sm text-gray-500">Inspeksi relevansi chunking dan proses Reciprocal Rank Fusion (RRF).</p>
      </div>

      <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col gap-4">
        <h2 className="font-bold text-[#172033]">Uji Query Retreival</h2>
        <div className="flex gap-3">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input type="text" placeholder="Masukkan query uji coba..." className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-[#163A5F]" />
          </div>
          <button className="bg-[#163A5F] text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-opacity-90">
            Inspect Chunk
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4 border-b pb-3">
            <FiCode className="text-blue-500" />
            <h3 className="font-bold text-[#172033]">Semantic Retrieval (Vector Search)</h3>
          </div>
          <div className="p-4 bg-gray-50 rounded border text-sm text-gray-500 text-center italic">
            Hasil chunk semantik akan tampil di sini
          </div>
        </div>
        <div className="bg-white border rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4 border-b pb-3">
            <FiLayers className="text-emerald-500" />
            <h3 className="font-bold text-[#172033]">BM25 (Keyword Search)</h3>
          </div>
          <div className="p-4 bg-gray-50 rounded border text-sm text-gray-500 text-center italic">
            Hasil chunk BM25 akan tampil di sini
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetrievalInspection;
