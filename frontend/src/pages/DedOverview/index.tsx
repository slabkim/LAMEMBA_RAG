import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronDown, FiChevronRight, FiFileText, FiCheckCircle, FiClock, FiAlertCircle, FiActivity, FiEdit, FiCpu, FiBookOpen } from 'react-icons/fi';

const DedOverview = () => {
  const navigate = useNavigate();
  const [expandedKriteria, setExpandedKriteria] = useState<number | null>(1);
  
  const stats = {
    totalDimensi: 21,
    totalIndikator: 74,
    drafted: 24,
    approved: 12,
    pending: 38
  };

  const kriteriaList = [
    { id: 1, name: 'Orientasi Strategis', progress: 80, status: 'APPROVED', docs: 12, dimensi: [
      { id: '1.1', name: 'Visi dan Misi', indikator: [
        { id: '1.1.1', name: 'Kejelasan Visi', status: 'APPROVED' },
        { id: '1.1.2', name: 'Strategi Pencapaian', status: 'IN_REVIEW' }
      ]}
    ]},
    { id: 2, name: 'Tata Kelola', progress: 65, status: 'DRAFT', docs: 8, dimensi: [] },
    { id: 3, name: 'Mahasiswa', progress: 45, status: 'IN_REVIEW', docs: 15, dimensi: [] },
    { id: 4, name: 'Dosen & Tendik', progress: 90, status: 'APPROVED', docs: 22, dimensi: [] },
    { id: 5, name: 'Keuangan & Sarana', progress: 30, status: 'REVISION_REQUESTED', docs: 5, dimensi: [] },
    { id: 6, name: 'Pendidikan', progress: 55, status: 'DRAFT', docs: 18, dimensi: [] },
    { id: 7, name: 'Pengabdian', progress: 20, status: 'EMPTY', docs: 3, dimensi: [] }
  ];

  const getStatusStyle = (status: string) => {
    switch(status) {
      case 'EMPTY': return 'bg-gray-50 text-gray-600 border-gray-200';
      case 'DRAFT': return 'bg-amber-50 text-amber-600 border-amber-200';
      case 'SUBMITTED': return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'IN_REVIEW': return 'bg-purple-50 text-purple-600 border-purple-200';
      case 'APPROVED': return 'bg-emerald-50 text-emerald-600 border-emerald-200';
      case 'REVISION_REQUESTED': return 'bg-red-50 text-red-600 border-red-200';
      default: return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#172033] p-6">
      {/* Header */}
      <div className="mb-6 border-b border-[#E4E7EC] pb-4">
        <h1 className="text-2xl font-bold text-[#172033]">Kompilasi DED LAMEMBA</h1>
        <p className="text-[#667085]">Project: Akreditasi Program Studi Manajemen 2026</p>
      </div>

      {/* Overall Progress */}
      <div className="bg-white p-5 rounded-lg border border-[#E4E7EC] mb-6 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-lg text-[#163A5F]">Overall Progress</span>
          <span className="font-bold text-[#163A5F]">67%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div className="bg-[#163A5F] h-2.5 rounded-full" style={{ width: '67%' }}></div>
        </div>
        <div className="grid grid-cols-5 gap-4 mt-4">
          <div className="p-3 bg-[#F7F9FC] rounded-md border border-[#E4E7EC] text-center">
            <div className="text-2xl font-bold">{stats.totalDimensi}</div>
            <div className="text-xs text-[#667085] uppercase">Total Dimensi</div>
          </div>
          <div className="p-3 bg-[#F7F9FC] rounded-md border border-[#E4E7EC] text-center">
            <div className="text-2xl font-bold">{stats.totalIndikator}</div>
            <div className="text-xs text-[#667085] uppercase">Total Indikator</div>
          </div>
          <div className="p-3 bg-amber-50 rounded-md border border-amber-100 text-center">
            <div className="text-2xl font-bold text-amber-600">{stats.drafted}</div>
            <div className="text-xs text-amber-600 uppercase">Drafted</div>
          </div>
          <div className="p-3 bg-emerald-50 rounded-md border border-emerald-100 text-center">
            <div className="text-2xl font-bold text-emerald-600">{stats.approved}</div>
            <div className="text-xs text-emerald-600 uppercase">Approved</div>
          </div>
          <div className="p-3 bg-purple-50 rounded-md border border-purple-100 text-center">
            <div className="text-2xl font-bold text-purple-600">{stats.pending}</div>
            <div className="text-xs text-purple-600 uppercase">Pending Review</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Panel: Kriteria List */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-lg font-semibold text-[#172033] mb-4">Daftar Kriteria</h2>
          {kriteriaList.map(kriteria => (
            <div key={kriteria.id} className="bg-white rounded-lg border border-[#E4E7EC] overflow-hidden shadow-sm">
              <div 
                className="p-4 cursor-pointer hover:bg-[#F7F9FC] flex justify-between items-center"
                onClick={() => setExpandedKriteria(expandedKriteria === kriteria.id ? null : kriteria.id)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">Kriteria {kriteria.id}. {kriteria.name}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className={`px-2 py-0.5 rounded border ${getStatusStyle(kriteria.status)}`}>{kriteria.status}</span>
                    <span className="text-[#667085] flex items-center gap-1"><FiFileText /> {kriteria.docs} docs</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                    <div className="bg-[#163A5F] h-1.5 rounded-full" style={{ width: `${kriteria.progress}%` }}></div>
                  </div>
                </div>
                <div className="text-gray-400 ml-4">
                  {expandedKriteria === kriteria.id ? <FiChevronDown /> : <FiChevronRight />}
                </div>
              </div>
              
              {/* Expanded Dimensi */}
              {expandedKriteria === kriteria.id && kriteria.dimensi && kriteria.dimensi.length > 0 && (
                <div className="bg-[#F7F9FC] p-3 border-t border-[#E4E7EC]">
                  {kriteria.dimensi.map(dim => (
                    <div key={dim.id} className="mb-2 last:mb-0">
                      <div className="text-xs font-semibold text-[#163A5F] mb-1">{dim.id} {dim.name}</div>
                      <div className="space-y-1 pl-2 border-l-2 border-[#163A5F] ml-1">
                        {dim.indikator.map(ind => (
                          <div key={ind.id} className="flex justify-between items-center bg-white p-2 rounded border border-[#E4E7EC] text-xs cursor-pointer hover:border-[#163A5F]">
                            <span>{ind.id} {ind.name}</span>
                            <span className={`px-1.5 py-0.5 rounded text-[10px] border ${getStatusStyle(ind.status)}`}>{ind.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Panel: Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* AI Pipeline Visualization */}
          <div className="bg-white p-5 rounded-lg border border-[#E4E7EC] shadow-sm">
            <h3 className="text-md font-semibold mb-4 flex items-center gap-2"><FiCpu className="text-[#163A5F]" /> AI Processing Pipeline</h3>
            <div className="flex justify-between items-center relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
              {['Retrieval', 'RRF Fusion', 'Context Assembly', 'Generation', 'Validation'].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center bg-white px-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 mb-2 ${idx < 4 ? 'bg-[#163A5F] text-white border-[#163A5F]' : idx === 4 ? 'bg-amber-100 text-amber-600 border-amber-300' : 'bg-white text-gray-400 border-gray-300'}`}>
                    {idx < 4 ? <FiCheckCircle /> : idx === 4 ? <FiActivity /> : idx + 1}
                  </div>
                  <span className="text-xs text-[#667085] font-medium text-center w-16">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Indicator Info */}
          <div className="bg-white p-5 rounded-lg border border-[#E4E7EC] shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="text-xs text-[#667085] mb-1">Indikator 1.1.1</div>
                <h3 className="text-lg font-bold text-[#172033]">Kejelasan Visi dan Realistik</h3>
              </div>
              <span className={`px-2 py-1 rounded text-xs border ${getStatusStyle('DRAFT')}`}>DRAFT</span>
            </div>

            {/* AI Warning */}
            <div className="bg-amber-50 border border-amber-200 rounded-md p-3 flex gap-3 items-start mb-4">
              <FiAlertCircle className="text-amber-500 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-amber-800">
                <span className="font-semibold">AI-Assisted Draft.</span> Harap tinjau dan verifikasi draf yang dihasilkan AI sebelum melakukan submit. Selalu rujuk pada dokumen sumber untuk akurasi.
              </div>
            </div>

            {/* Draft Preview */}
            <div className="border border-gray-200 rounded-md p-4 bg-gray-50 mb-4 h-32 overflow-hidden relative">
              <p className="text-sm text-[#172033] leading-relaxed">
                Visi Program Studi Manajemen dirumuskan dengan sangat jelas dan sangat realistik. Visi ini telah mengantisipasi perubahan lingkungan eksternal dan internal yang tertuang dalam Renstra 2022-2026. Berdasarkan Surat Keputusan Rektor No. 123/2022, visi program studi sejalan dengan visi universitas dalam mengembangkan ilmu pengetahuan yang berbasis kewirausahaan dan teknologi...
              </p>
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-gray-50 to-transparent"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="text-sm font-semibold mb-2 flex items-center gap-1"><FiBookOpen /> Source Citations</h4>
                <ul className="text-xs space-y-1 text-[#667085]">
                  <li>• Renstra Prodi 2022-2026.pdf (Hal 12)</li>
                  <li>• SK Rektor Visi Misi.pdf (Hal 2)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2 flex items-center gap-1"><FiFileText /> Evidence Linked</h4>
                <ul className="text-xs space-y-1 text-[#667085]">
                  <li>• 4 chunks retrieved</li>
                  <li>• Avg Relevance: 0.89</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-[#E4E7EC]">
              <button onClick={() => navigate('/editor')} className="px-4 py-2 bg-[#163A5F] text-white rounded-md hover:bg-[#112a45] transition-colors flex items-center gap-2 text-sm font-medium">
                <FiEdit /> Buka Editor
              </button>
              <button className="px-4 py-2 bg-white border border-[#163A5F] text-[#163A5F] rounded-md hover:bg-[#F7F9FC] transition-colors flex items-center gap-2 text-sm font-medium">
                <FiCpu /> Generate AI Draft
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DedOverview;
