import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiChevronRight, FiSave, FiSend, FiAlertTriangle, FiSliders, FiFileText, FiLink, FiCpu, FiBold, FiItalic, FiList, FiAlignLeft } from 'react-icons/fi';

const DedWorkspaceEditor = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('evidence');
  
  const draftText = `Visi Program Studi Manajemen dirumuskan dengan sangat jelas dan sangat realistik. Visi ini telah mengantisipasi perubahan lingkungan eksternal dan internal yang tertuang dalam Renstra 2022-2026. 

Berdasarkan Surat Keputusan Rektor No. 123/2022, visi program studi sejalan dengan visi universitas dalam mengembangkan ilmu pengetahuan yang berbasis kewirausahaan dan teknologi digital. Pelibatan pemangku kepentingan dalam perumusan visi ini sangat nyata, dibuktikan dengan notulensi rapat kurikulum pada tanggal 14 Agustus 2022 yang dihadiri oleh alumni, industri, dan pakar pendidikan.

Mekanisme sosialisasi visi juga telah dilakukan dengan baik dan terstruktur, menggunakan berbagai media seperti website, brosur, banner di area kampus, dan penyampaian langsung saat orientasi mahasiswa baru (PKKMB). Tingkat pemahaman sivitas akademika terhadap visi sangat tinggi berdasarkan survei internal tahun 2023 yang mencapai 89% pemahaman sangat baik.`;

  return (
    <div className="min-h-screen bg-[#F7F9FC] flex flex-col">
      {/* Warning Banner */}
      <div className="bg-amber-500 text-white px-4 py-2 text-sm flex items-center justify-center gap-2 font-medium">
        <FiAlertTriangle />
        Mode Workspace: Draf ini memuat hasil generasi AI. Selalu pastikan narasi didukung oleh bukti dan sitasi yang tepat.
      </div>

      {/* Header Breadcrumb */}
      <header className="bg-white border-b border-[#E4E7EC] px-6 py-4">
        <div className="flex items-center text-sm text-[#667085] mb-2">
          <Link to="/" className="hover:text-[#163A5F]">Kriteria 1</Link>
          <FiChevronRight className="mx-1" />
          <span>Dimensi 1.1</span>
          <FiChevronRight className="mx-1" />
          <span className="font-semibold text-[#172033]">Indikator 1.1.1</span>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#172033]">Kejelasan Visi dan Realistik</h1>
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 bg-amber-50 text-amber-600 border border-amber-200 rounded text-xs font-semibold">DRAFT v2</span>
            <button onClick={() => navigate('/history')} className="text-sm text-[#163A5F] hover:underline">Riwayat Versi</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel: Editor */}
        <div className="w-[60%] flex flex-col border-r border-[#E4E7EC] bg-white">
          <div className="p-2 border-b border-[#E4E7EC] flex gap-2 bg-[#F7F9FC]">
            <button className="p-2 text-[#667085] hover:bg-white rounded hover:shadow-sm"><FiBold /></button>
            <button className="p-2 text-[#667085] hover:bg-white rounded hover:shadow-sm"><FiItalic /></button>
            <button className="p-2 text-[#667085] hover:bg-white rounded hover:shadow-sm"><FiList /></button>
            <button className="p-2 text-[#667085] hover:bg-white rounded hover:shadow-sm"><FiAlignLeft /></button>
          </div>
          <div className="flex-1 p-6">
            <textarea 
              className="w-full h-full resize-none outline-none text-[#172033] leading-relaxed"
              defaultValue={draftText}
            ></textarea>
          </div>
          <div className="p-4 border-t border-[#E4E7EC] bg-[#F7F9FC] flex justify-end gap-3">
            <button className="px-4 py-2 border border-[#E4E7EC] bg-white text-[#172033] rounded-md hover:bg-gray-50 flex items-center gap-2 text-sm font-medium">
              <FiSave /> Save Draft
            </button>
            <button className="px-4 py-2 bg-[#163A5F] text-white rounded-md hover:bg-[#112a45] flex items-center gap-2 text-sm font-medium">
              <FiSend /> Submit for Review
            </button>
          </div>
        </div>

        {/* Right Panel: Tools */}
        <div className="w-[40%] bg-white flex flex-col">
          {/* Tabs */}
          <div className="flex border-b border-[#E4E7EC]">
            <button 
              className={`flex-1 py-3 text-sm font-medium flex justify-center items-center gap-2 ${activeTab === 'evidence' ? 'text-[#163A5F] border-b-2 border-[#163A5F]' : 'text-[#667085] hover:bg-gray-50'}`}
              onClick={() => setActiveTab('evidence')}
            >
              <FiFileText /> Evidence
            </button>
            <button 
              className={`flex-1 py-3 text-sm font-medium flex justify-center items-center gap-2 ${activeTab === 'citations' ? 'text-[#163A5F] border-b-2 border-[#163A5F]' : 'text-[#667085] hover:bg-gray-50'}`}
              onClick={() => setActiveTab('citations')}
            >
              <FiLink /> Citations
            </button>
            <button 
              className={`flex-1 py-3 text-sm font-medium flex justify-center items-center gap-2 ${activeTab === 'ai' ? 'text-[#163A5F] border-b-2 border-[#163A5F]' : 'text-[#667085] hover:bg-gray-50'}`}
              onClick={() => setActiveTab('ai')}
            >
              <FiCpu /> AI Config
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-4 bg-[#F7F9FC]">
            {activeTab === 'evidence' && (
              <div className="space-y-4">
                <h3 className="font-semibold text-sm text-[#172033] mb-3">Retrieved Evidence Chunks</h3>
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="bg-white p-3 rounded border border-[#E4E7EC] shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold text-[#163A5F]">Renstra_Prodi_2022.pdf (Hal {10+i})</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">Score: 0.9{i}</span>
                    </div>
                    <p className="text-xs text-[#667085] italic mb-2">"...Visi program studi dirumuskan dengan melibatkan seluruh pemangku kepentingan..."</p>
                    <button onClick={() => navigate('/evidence')} className="text-xs text-blue-600 hover:underline flex items-center gap-1">
                      Lihat Dokumen <FiChevronRight />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'citations' && (
              <div className="space-y-4">
                <h3 className="font-semibold text-sm text-[#172033] mb-3">Mapped Citations</h3>
                {[
                  { doc: 'SK Rektor No. 123/2022', page: 2, quote: 'Visi universitas berbasis kewirausahaan...' },
                  { doc: 'Notulensi Rapat Kurikulum', page: 1, quote: 'Dihadiri oleh alumni, industri, pakar...' },
                  { doc: 'Laporan Survei Pemahaman', page: 15, quote: 'Tingkat pemahaman mencapai 89%...' }
                ].map((cit, i) => (
                  <div key={i} className="bg-white p-3 rounded border border-[#E4E7EC] shadow-sm flex gap-3 items-start">
                    <div className="bg-[#163A5F] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">{i+1}</div>
                    <div>
                      <div className="text-xs font-bold text-[#172033] mb-1">{cit.doc} (Hal {cit.page})</div>
                      <p className="text-xs text-[#667085]">"{cit.quote}"</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'ai' && (
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-[#172033] mb-1">Metode Retrieval</label>
                  <select className="w-full border border-[#E4E7EC] rounded p-2 text-sm">
                    <option>Hybrid (Dense + Sparse)</option>
                    <option>Semantic Search</option>
                    <option>BM25 (Keyword)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#172033] mb-1 flex justify-between">
                    <span>Top-K Chunks</span>
                    <span className="text-[#163A5F]">5</span>
                  </label>
                  <input type="range" min="1" max="10" defaultValue="5" className="w-full accent-[#163A5F]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#172033] mb-1">Instruksi Tambahan (Prompt)</label>
                  <textarea 
                    className="w-full border border-[#E4E7EC] rounded p-2 text-sm h-24 resize-none" 
                    placeholder="Gunakan gaya bahasa formal dan tegas..."
                  ></textarea>
                </div>
                <button className="w-full py-2 bg-[#163A5F] text-white rounded text-sm font-medium hover:bg-[#112a45] flex justify-center items-center gap-2">
                  <FiCpu /> Regenerate Draft
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DedWorkspaceEditor;
