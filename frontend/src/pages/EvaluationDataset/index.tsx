import React from 'react';
import { FiUploadCloud, FiSearch, FiFileText } from 'react-icons/fi';

const EvaluationDataset: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-[#172033]">Evaluation Dataset</h1>
          <p className="text-sm text-gray-500">Kelola dataset pertanyaan-jawaban untuk evaluasi akurasi dokumen RAG LAMEMBA.</p>
        </div>
        <button className="bg-[#163A5F] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-opacity-90">
          <FiUploadCloud /> Upload Dataset JSON
        </button>
      </div>

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center">
          <div className="relative w-64">
            <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
            <input type="text" placeholder="Cari dataset..." className="w-full pl-9 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-[#163A5F]" />
          </div>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">Nama Dataset</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">Total Entries</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">Last Updated</th>
              <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <FiFileText className="text-[#163A5F]" size={20} />
                  <span className="font-bold text-[#172033] text-sm">S1_Mgt_Eval_Dataset_v1.json</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">120 Cases</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-bold">Ready</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">10 menit lalu</td>
              <td className="px-6 py-4 text-sm text-[#163A5F] font-bold cursor-pointer hover:underline">Lihat Detail</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EvaluationDataset;
