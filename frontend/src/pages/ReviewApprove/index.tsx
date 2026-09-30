import React from 'react';
import { useParams } from 'react-router-dom';
import { FiCheck, FiX, FiMessageSquare } from 'react-icons/fi';

export default function ReviewApprove() {
  const { projectId } = useParams();
  
  return (
    <div className="p-8 w-full max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-[#163A5F] mb-2">Finalisasi Penilaian DED</h1>
      <p className="text-gray-500 mb-8">Berikan keputusan akhir atau permintaan revisi major untuk proyek ini.</p>
      
      <div className="bg-white border border-[#E4E7EC] rounded-xl shadow-sm p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Catatan Penilaian (Opsional)</h3>
        <textarea 
          className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 min-h-[150px]" 
          placeholder="Berikan ringkasan penilaian, evaluasi komprehensif, atau temuan utama terkait DED ini..."
        ></textarea>
      </div>

      <div className="flex gap-4">
        <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
          <FiCheck size={20} /> Approve DED
        </button>
        <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
          <FiX size={20} /> Reject / Revisi Major
        </button>
      </div>
    </div>
  );
}
