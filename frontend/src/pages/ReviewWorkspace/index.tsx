import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiArrowLeft, 
  FiClock, 
  FiMessageSquare, 
  FiCheck, 
  FiXCircle, 
  FiInfo, 
  FiBookOpen,
  FiChevronDown
} from 'react-icons/fi';

const ReviewWorkspace = () => {
  const [showRevisionModal, setShowRevisionModal] = useState(false);
  const [comment, setComment] = useState('');

  const versions = ['v1.2 (Current)', 'v1.1 (Pending)', 'v1.0 (Initial)'];
  
  const history = [
    { id: 1, user: 'Dr. Ahmad', comment: 'Bagian analisis lulusan kurang spesifik pada metrik 2023.', date: '2026-09-25' },
    { id: 2, user: 'Prof. Siti', comment: 'Mohon cantumkan SK Rektor terkait panduan kurikulum.', date: '2026-09-20' }
  ];

  const evidences = [
    { id: 1, source: 'Buku_Pedoman_Akademik_2023.pdf', page: 12, content: 'Universitas memiliki visi menjadi perguruan tinggi unggul...' },
    { id: 2, source: 'Renstra_2020_2024.pdf', page: 45, content: 'Strategi pencapaian visi misi melibatkan partisipasi aktif seluruh...' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-[#172033] flex flex-col">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center">
          <Link to="/review-dashboard" className="mr-4 text-gray-400 hover:text-[#163A5F] transition-colors">
            <FiArrowLeft size={20} />
          </Link>
          <div>
            <div className="text-xs text-gray-500 font-medium mb-1">DED 2024 Univ Teknologi / Kriteria 1</div>
            <h1 className="text-xl font-bold text-[#163A5F]">1.1.a Visi, Misi, dan Tujuan</h1>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <select className="bg-gray-50 border border-gray-200 text-sm rounded-lg px-3 py-2 text-[#172033] focus:outline-none focus:border-[#163A5F]">
            {versions.map(v => <option key={v}>{v}</option>)}
          </select>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex-1 p-6 flex flex-col lg:flex-row gap-6">
        
        {/* Left Panel: Content (60%) */}
        <div className="lg:w-[60%] flex flex-col gap-6">
          {/* AI Generated Narasi */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex-1">
            <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
              <h2 className="text-lg font-bold text-[#163A5F] flex items-center">
                Generated Narasi DED
              </h2>
              <span className="px-2 py-1 text-xs font-semibold rounded bg-amber-100 text-amber-700">Needs Review</span>
            </div>
            <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>Visi Universitas Teknologi adalah menjadi perguruan tinggi yang unggul dalam pengembangan ilmu pengetahuan dan teknologi terapan di tingkat nasional pada tahun 2030.</p>
              <p>Dalam mencapai visi tersebut, institusi telah merumuskan misi yang mencakup tridharma perguruan tinggi. Penjabaran visi dan misi telah didukung oleh dokumen Rencana Strategis (Renstra) 2020-2024 yang memuat indikator kinerja utama (IKU) secara spesifik.</p>
              <p>Pemahaman pemangku kepentingan terhadap visi misi disosialisasikan secara berkala melalui rapat kerja tahunan dan media digital institusi.</p>
            </div>
          </div>

          {/* Previous Comments History */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-base font-bold text-[#163A5F] mb-4 flex items-center">
              <FiClock className="mr-2" /> Revision History
            </h2>
            <div className="space-y-4">
              {history.map(item => (
                <div key={item.id} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-sm text-[#172033]">{item.user}</span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel: Evidence & Actions (40%) */}
        <div className="lg:w-[40%] flex flex-col gap-6">
          {/* Evidence Panel */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-base font-bold text-[#163A5F] mb-4 flex items-center">
              <FiBookOpen className="mr-2" /> Retrieved Evidence
            </h2>
            <div className="space-y-3">
              {evidences.map(ev => (
                <div key={ev.id} className="p-3 border border-blue-100 bg-blue-50/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#163A5F]">{ev.source}</span>
                    <span className="text-xs bg-white border border-blue-200 px-2 py-0.5 rounded text-blue-600">Page {ev.page}</span>
                  </div>
                  <p className="text-xs text-gray-600 italic">"{ev.content}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Review Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex-1 flex flex-col">
            <h2 className="text-base font-bold text-[#163A5F] mb-4 flex items-center">
              <FiMessageSquare className="mr-2" /> Reviewer Decision
            </h2>
            
            <textarea 
              rows={4} 
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#163A5F] focus:border-transparent mb-4"
              placeholder="Add your review notes or revision requirements here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <div className="mt-auto flex flex-col gap-3">
              <button className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg flex items-center justify-center transition-colors">
                <FiCheck className="mr-2" /> Approve Narasi
              </button>
              <button 
                onClick={() => setShowRevisionModal(true)}
                className="w-full py-2.5 bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 font-semibold rounded-lg flex items-center justify-center transition-colors"
              >
                <FiXCircle className="mr-2" /> Request Revision
              </button>
            </div>

            <div className="mt-6 flex items-start text-xs text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100">
              <FiInfo className="mr-2 mt-0.5 flex-shrink-0 text-[#163A5F]" />
              <p>By approving, you confirm that the AI generated text accurately represents the source evidence and complies with LAMEMBA guidelines.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Dummy Modal for Revision */}
      {showRevisionModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[400px] shadow-xl">
            <h3 className="text-lg font-bold text-[#163A5F] mb-2">Confirm Revision Request</h3>
            <p className="text-sm text-gray-600 mb-4">Are you sure you want to request a revision? This will notify the drafter.</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowRevisionModal(false)} className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">Cancel</button>
              <button onClick={() => setShowRevisionModal(false)} className="px-4 py-2 text-sm font-medium bg-red-600 text-white rounded-lg hover:bg-red-700">Submit Request</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewWorkspace;
