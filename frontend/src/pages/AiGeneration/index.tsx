import React, { useState } from 'react';
import { FiChevronRight, FiInfo, FiSettings, FiPlay, FiX, FiCheckCircle, FiLoader, FiClock, FiFileText, FiAlertTriangle, FiEdit3, FiSave, FiRefreshCw } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const steps = [
  { id: 1, label: 'Load Indicator', status: 'done', time: '10:00:01' },
  { id: 2, label: 'Determine Scope', status: 'done', time: '10:00:02' },
  { id: 3, label: 'Semantic Retrieval', status: 'done', time: '10:00:04' },
  { id: 4, label: 'BM25 Retrieval', status: 'done', time: '10:00:05' },
  { id: 5, label: 'RRF Fusion', status: 'done', time: '10:00:06' },
  { id: 6, label: 'Context Assembly', status: 'done', time: '10:00:07' },
  { id: 7, label: 'Gemini Generation', status: 'running', time: '...' },
  { id: 8, label: 'Evidence Mapping', status: 'pending', time: '' },
  { id: 9, label: 'Save Response', status: 'pending', time: '' }
];

const chunks = [
  { id: 1, doc: 'Panduan_Akademik_2023.pdf', page: 12, text: 'Visi misi program studi diturunkan dari visi misi institusi dengan penekanan pada aspek terapan...', sem: 0.92, bm25: 0.88, rrf: 0.95 },
  { id: 2, doc: 'Renstra_Fakultas_2020_2025.pdf', page: 24, text: 'Mekanisme penyusunan visi misi melibatkan pemangku kepentingan internal dan eksternal...', sem: 0.89, bm25: 0.91, rrf: 0.92 },
  { id: 3, doc: 'SK_Rektor_Visi_Misi.pdf', page: 2, text: 'Menetapkan Visi Universitas sebagai perguruan tinggi terkemuka di tingkat nasional...', sem: 0.85, bm25: 0.75, rrf: 0.82 },
  { id: 4, doc: 'Notulensi_Rapat_Tinjauan_Manajemen.pdf', page: 4, text: 'Evaluasi pemahaman visi misi dilakukan setiap tahun melalui kuesioner kepada dosen dan mahasiswa...', sem: 0.78, bm25: 0.85, rrf: 0.80 },
  { id: 5, doc: 'Laporan_Kinerja_Prodi_2022.pdf', page: 15, text: 'Ketercapaian sasaran visi misi dipantau melalui indikator kinerja utama dan tambahan...', sem: 0.75, bm25: 0.70, rrf: 0.76 }
];

export default function AiGeneration() {
  const [retrievalMethod, setRetrievalMethod] = useState('Hybrid RRF');
  const [topK, setTopK] = useState(10);
  const [instruction, setInstruction] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowOutput(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#172033] p-6 font-sans">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#163A5F]">AI Generation</h1>
        <div className="flex items-center text-sm text-[#667085] mt-2">
          <Link to="/projects/1" className="hover:text-[#163A5F]">Kriteria 1</Link>
          <FiChevronRight className="mx-2" />
          <span>Dimensi 1.1</span>
          <FiChevronRight className="mx-2" />
          <span className="font-semibold text-[#172033]">Indikator 1.1.a</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Panel: Indicator Info */}
        <div className="lg:col-span-3 bg-white p-5 rounded-lg shadow-sm border border-[#E4E7EC]">
          <h2 className="font-semibold text-lg border-b pb-3 mb-4 flex items-center"><FiInfo className="mr-2"/> Informasi Indikator</h2>
          <div className="mb-4">
            <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded mb-2">1.1.a</span>
            <h3 className="font-medium">Kesesuaian Visi Misi</h3>
            <p className="text-sm text-[#667085] mt-2 text-justify">Kesesuaian visi, misi, tujuan, dan sasaran Unit Pengelola Program Studi (UPPS) terhadap visi dan misi Perguruan Tinggi.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2">Kebutuhan Bukti:</h4>
            <ul className="text-sm text-[#667085] list-disc pl-4 space-y-1">
              <li>Dokumen SK Visi Misi UPPS</li>
              <li>Dokumen Renstra UPPS</li>
              <li>Laporan evaluasi kesesuaian</li>
            </ul>
          </div>
        </div>

        {/* Center Panel: Config & Pipeline */}
        <div className="lg:col-span-5 bg-white p-5 rounded-lg shadow-sm border border-[#E4E7EC] flex flex-col">
          <h2 className="font-semibold text-lg border-b pb-3 mb-4 flex items-center"><FiSettings className="mr-2"/> Konfigurasi Generasi</h2>
          
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1">Metode Retrieval</label>
              <select className="w-full border border-[#E4E7EC] rounded p-2 text-sm" value={retrievalMethod} onChange={e => setRetrievalMethod(e.target.value)}>
                <option>Hybrid RRF</option>
                <option>Semantic Only</option>
                <option>BM25 Only</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Top-K ({topK})</label>
              <input type="range" min="1" max="50" value={topK} onChange={e => setTopK(parseInt(e.target.value))} className="w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Instruksi Tambahan (Opsional)</label>
              <textarea 
                className="w-full border border-[#E4E7EC] rounded p-2 text-sm h-20" 
                placeholder="Misal: Fokuskan pada aspek partisipasi mahasiswa..."
                value={instruction}
                onChange={e => setInstruction(e.target.value)}
              />
            </div>

            <div className="flex space-x-3">
              <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className={`flex-1 flex justify-center items-center py-2 rounded text-white font-medium ${isGenerating ? 'bg-blue-400' : 'bg-[#163A5F] hover:bg-blue-800'}`}>
                {isGenerating ? <FiLoader className="animate-spin mr-2"/> : <FiPlay className="mr-2"/>}
                {isGenerating ? 'Memproses...' : 'Generate Draft'}
              </button>
              <button className="px-4 py-2 border border-[#E4E7EC] rounded text-[#667085] hover:bg-gray-50 flex items-center">
                <FiX className="mr-1"/> Batal
              </button>
            </div>
          </div>

          <h3 className="font-medium text-sm border-t pt-4 mb-3">Status Pipeline Processing</h3>
          <div className="space-y-2 flex-1 overflow-y-auto pr-2 text-sm">
            {steps.map(step => (
              <div key={step.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  {step.status === 'done' && <FiCheckCircle className="text-green-500 mr-2"/>}
                  {step.status === 'running' && <FiLoader className="text-blue-500 mr-2 animate-spin"/>}
                  {step.status === 'pending' && <FiClock className="text-gray-300 mr-2"/>}
                  <span className={`${step.status === 'pending' ? 'text-gray-400' : 'text-[#172033]'}`}>{step.label}</span>
                </div>
                <span className="text-xs text-gray-400">{step.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel: Evidence */}
        <div className="lg:col-span-4 bg-white p-5 rounded-lg shadow-sm border border-[#E4E7EC] flex flex-col max-h-[600px]">
          <h2 className="font-semibold text-lg border-b pb-3 mb-4 flex items-center"><FiFileText className="mr-2"/> Evidence Retrieval</h2>
          <div className="overflow-y-auto pr-2 space-y-4">
            {chunks.map(chunk => (
              <div key={chunk.id} className="p-3 border border-gray-100 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold text-[#163A5F] break-all">{chunk.doc} (Hal {chunk.page})</span>
                  <a href="#" className="text-[10px] text-blue-500 hover:underline shrink-0 ml-2">Lihat Asli</a>
                </div>
                <p className="text-xs text-[#667085] mb-2 line-clamp-3">"{chunk.text}"</p>
                <div className="flex space-x-2 text-[10px]">
                  <div className="flex-1 bg-gray-200 rounded-full h-1.5 mt-1 overflow-hidden" title={`Sem: ${chunk.sem}`}>
                    <div className="bg-blue-500 h-1.5" style={{width: `${chunk.sem * 100}%`}}></div>
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-1.5 mt-1 overflow-hidden" title={`BM25: ${chunk.bm25}`}>
                    <div className="bg-green-500 h-1.5" style={{width: `${chunk.bm25 * 100}%`}}></div>
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-1.5 mt-1 overflow-hidden" title={`RRF: ${chunk.rrf}`}>
                    <div className="bg-purple-500 h-1.5" style={{width: `${chunk.rrf * 100}%`}}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Output Area */}
      {showOutput && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-[#E4E7EC]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-xl">Draft Hasil Generasi</h2>
            <div className="flex items-center text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full text-xs font-medium">
              <FiAlertTriangle className="mr-1.5"/> Draft ini dihasilkan AI. Wajib ditinjau manusia.
            </div>
          </div>
          
          <div className="prose prose-sm max-w-none text-[#172033] mb-6">
            <p>Visi dan misi Program Studi telah disusun dan ditetapkan melalui proses yang komprehensif dan melibatkan berbagai pemangku kepentingan, baik internal maupun eksternal <sup>[1]</sup>. Visi program studi dirumuskan dengan merujuk secara langsung pada visi tingkat institusi (universitas) dengan penekanan khusus pada aspek keilmuan terapan yang relevan dengan perkembangan industri <sup>[1][3]</sup>.</p>
            <p>Mekanisme penyusunan tersebut diatur dalam dokumen Rencana Strategis Fakultas dan diresmikan melalui SK Rektor tentang Visi Misi <sup>[2][3]</sup>. Untuk memastikan kesesuaian dan pemahaman yang berkelanjutan, UPPS secara rutin melakukan evaluasi setiap tahun melalui kuesioner yang didistribusikan kepada seluruh civitas akademika (dosen dan mahasiswa) <sup>[4]</sup>, yang hasilnya menjadi dasar perbaikan dalam Laporan Kinerja Program Studi <sup>[5]</sup>.</p>
          </div>

          <div className="border-t pt-4 mb-6">
            <h4 className="text-sm font-semibold mb-2">Referensi Citasi:</h4>
            <ol className="text-xs text-[#667085] list-decimal pl-4 space-y-1">
              <li>Panduan_Akademik_2023.pdf, Hal 12</li>
              <li>Renstra_Fakultas_2020_2025.pdf, Hal 24</li>
              <li>SK_Rektor_Visi_Misi.pdf, Hal 2</li>
              <li>Notulensi_Rapat_Tinjauan_Manajemen.pdf, Hal 4</li>
              <li>Laporan_Kinerja_Prodi_2022.pdf, Hal 15</li>
            </ol>
          </div>

          <div className="flex justify-end space-x-3">
            <button className="px-4 py-2 border border-[#E4E7EC] rounded text-[#667085] hover:bg-gray-50 flex items-center text-sm font-medium">
              <FiRefreshCw className="mr-2"/> Regenerate
            </button>
            <button className="px-4 py-2 bg-white border border-[#163A5F] text-[#163A5F] rounded hover:bg-blue-50 flex items-center text-sm font-medium">
              <FiEdit3 className="mr-2"/> Edit di Workspace
            </button>
            <button className="px-4 py-2 bg-[#163A5F] text-white rounded hover:bg-blue-800 flex items-center text-sm font-medium">
              <FiSave className="mr-2"/> Simpan sebagai Draft
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
