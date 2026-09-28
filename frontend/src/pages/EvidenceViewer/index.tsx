import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiFile, FiInfo, FiTag, FiClock, FiSearch, FiZoomIn, FiZoomOut } from 'react-icons/fi';

const EvidenceViewer = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FC]">
      {/* Header */}
      <header className="bg-[#172033] text-white px-6 py-3 flex justify-between items-center shadow-md z-10">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/editor')} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
            <FiArrowLeft />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-lg">Renstra_Prodi_Manajemen_2022-2026.pdf</h1>
              <span className="bg-blue-500/20 text-blue-200 border border-blue-500/30 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider">PDF</span>
            </div>
            <p className="text-xs text-gray-400">Menampilkan Halaman 12 dari 45</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-white/10 rounded text-gray-300"><FiZoomOut /></button>
          <span className="text-sm">100%</span>
          <button className="p-2 hover:bg-white/10 rounded text-gray-300"><FiZoomIn /></button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel: PDF Viewer Placeholder */}
        <div className="w-[65%] bg-gray-200 p-8 overflow-y-auto flex justify-center border-r border-[#E4E7EC]">
          <div className="w-full max-w-2xl bg-white shadow-lg min-h-[800px] relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <span className="text-6xl font-bold text-gray-400">PDF VIEWER</span>
            </div>
            
            <div className="p-12 text-[#172033]">
              <h2 className="text-xl font-bold mb-6 text-center">BAB II<br/>VISI, MISI, DAN TUJUAN</h2>
              
              <h3 className="font-bold mb-2">2.1 Visi Program Studi</h3>
              <p className="mb-4 text-justify leading-relaxed">
                Menjadi program studi manajemen yang unggul di tingkat nasional pada tahun 2026 yang berbasis pada kewirausahaan dan teknologi digital.
              </p>

              <h3 className="font-bold mb-2 mt-6">2.2 Perumusan Visi</h3>
              <p className="mb-4 text-justify leading-relaxed">
                Proses perumusan visi program studi dilakukan melalui serangkaian tahapan yang komprehensif dan partisipatif. 
                <span className="bg-yellow-200/50 border-b-2 border-yellow-400 px-1 mx-1 rounded">Visi program studi dirumuskan dengan melibatkan seluruh pemangku kepentingan (stakeholders) internal dan eksternal. Pemangku kepentingan internal meliputi dosen, tenaga kependidikan, dan mahasiswa. Sedangkan pemangku kepentingan eksternal meliputi alumni, pengguna lulusan (industri), dan pakar pendidikan manajemen.</span> 
                Pelibatan ini dibuktikan dengan adanya Focus Group Discussion (FGD) yang dilaksanakan pada tanggal 14 Agustus 2022.
              </p>

              <p className="mb-4 text-justify leading-relaxed">
                Hasil masukan dari berbagai pihak tersebut kemudian dianalisis keterkaitannya dengan visi perguruan tinggi dan perkembangan kebutuhan pasar kerja di masa depan.
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel: Metadata & Context */}
        <div className="w-[35%] bg-white flex flex-col">
          <div className="p-5 border-b border-[#E4E7EC]">
            <h2 className="text-lg font-bold text-[#172033] flex items-center gap-2 mb-1">
              <FiInfo className="text-[#163A5F]" /> Chunk Details
            </h2>
            <div className="text-xs text-[#667085] flex gap-3">
              <span>ID: chunk_8f9a2b</span>
              <span>Page: 12</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {/* Highlighted text card */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 shadow-sm">
              <div className="text-xs font-semibold text-amber-800 mb-2">Extracted Content</div>
              <p className="text-sm text-[#172033] leading-relaxed italic">
                "Visi program studi dirumuskan dengan melibatkan seluruh pemangku kepentingan (stakeholders) internal dan eksternal. Pemangku kepentingan internal meliputi dosen, tenaga kependidikan, dan mahasiswa. Sedangkan pemangku kepentingan eksternal meliputi alumni, pengguna lulusan (industri), dan pakar pendidikan manajemen."
              </p>
            </div>

            {/* Metadata */}
            <div>
              <h3 className="text-sm font-semibold text-[#172033] mb-3">Document Metadata</h3>
              <div className="space-y-3 text-sm">
                <div className="flex gap-2">
                  <FiFile className="text-[#667085] mt-0.5" />
                  <div>
                    <div className="text-xs text-[#667085]">Source</div>
                    <div className="font-medium">Renstra Prodi 2022-2026</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <FiTag className="text-[#667085] mt-0.5" />
                  <div>
                    <div className="text-xs text-[#667085]">Mapped to</div>
                    <div className="font-medium">Kriteria 1, Dimensi 1.1</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <FiClock className="text-[#667085] mt-0.5" />
                  <div>
                    <div className="text-xs text-[#667085]">Uploaded Date</div>
                    <div className="font-medium">12 Oct 2025, 09:45 AM</div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-[#E4E7EC]" />

            {/* Related Chunks */}
            <div>
              <h3 className="text-sm font-semibold text-[#172033] mb-3 flex items-center gap-2">
                <FiSearch className="text-[#163A5F]" /> Related Chunks in Document
              </h3>
              <div className="space-y-3">
                {[
                  { pg: 12, score: 0.94, text: 'Visi program studi dirumuskan dengan melibatkan...' },
                  { pg: 15, score: 0.88, text: 'Mekanisme sosialisasi visi dilakukan melalui website...' },
                  { pg: 13, score: 0.75, text: 'Keterkaitan visi prodi dengan visi universitas...' },
                  { pg: 20, score: 0.62, text: 'Pemahaman sivitas akademika terhadap visi diukur...' },
                  { pg: 8, score: 0.55, text: 'SK Rektor No 123/2022 tentang penetapan visi...' }
                ].map((chunk, idx) => (
                  <div key={idx} className={`p-3 rounded border text-xs cursor-pointer transition-colors ${idx === 0 ? 'bg-blue-50 border-blue-200' : 'bg-white border-[#E4E7EC] hover:border-gray-300'}`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold">Page {chunk.pg}</span>
                      <span className="bg-gray-100 px-1.5 py-0.5 rounded text-[10px] font-mono">Score: {chunk.score}</span>
                    </div>
                    <p className="text-[#667085] truncate">{chunk.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-[#E4E7EC] bg-[#F7F9FC]">
            <button onClick={() => navigate('/editor')} className="w-full py-2 bg-white border border-[#163A5F] text-[#163A5F] font-medium rounded-md hover:bg-gray-50 text-sm">
              Kembali ke Editor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvidenceViewer;
