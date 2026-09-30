import React from 'react';
import { useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function ReviewCompare() {
  const { responseId } = useParams();
  
  return (
    <div className="p-8 w-full h-full flex flex-col">
      <div className="flex items-center gap-4 mb-6">
        <button className="p-2 hover:bg-gray-100 rounded-lg"><FiArrowLeft /></button>
        <div>
          <h1 className="text-xl font-bold text-[#163A5F]">Perbandingan Versi DED</h1>
          <p className="text-sm text-gray-500">Melihat perubahan manual yang dilakukan oleh author terhadap hasil generasi AI.</p>
        </div>
      </div>
      
      <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
        <div className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 font-semibold text-gray-700">Versi Asli AI (Baseline)</div>
          <div className="p-5 overflow-y-auto text-gray-600 leading-relaxed text-sm">
            <p>Ini adalah teks asli yang di-*generate* oleh Gemini berdasarkan ekstraksi dokumen RAG.</p>
          </div>
        </div>
        <div className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div className="px-4 py-3 bg-blue-50 border-b border-blue-100 font-semibold text-blue-800">Versi Final (Diedit Author)</div>
          <div className="p-5 overflow-y-auto text-gray-900 leading-relaxed text-sm">
            <p>Ini adalah teks <span className="bg-green-100 text-green-800 px-1 rounded">yang telah direvisi manual</span> oleh Author untuk penyesuaian gaya bahasa.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
