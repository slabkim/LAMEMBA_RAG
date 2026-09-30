import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiInfo, FiSettings, FiPlay, FiX, FiCheckCircle, FiLoader, FiClock, FiFileText, FiAlertTriangle, FiEdit3, FiCpu } from 'react-icons/fi';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { fetchAPI } from '../../lib/api';

export default function AiGeneration() {
  const { id: projectId, criterionId: sectionId } = useParams();
  const navigate = useNavigate();
  
  const [section, setSection] = useState<any>(null);
  const [retrievalMethod, setRetrievalMethod] = useState('HYBRID_RRF');
  const [topK, setTopK] = useState(10);
  const [instruction, setInstruction] = useState('Tuliskan draf narasi yang komprehensif berdasarkan bukti yang tersedia.');
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [generationRun, setGenerationRun] = useState<any>(null);
  const [pollingInterval, setPollingInterval] = useState<any>(null);

  useEffect(() => {
    const loadSection = async () => {
      try {
        const res = await fetchAPI(`/ded/sections/${sectionId}`);
        setSection(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    if (sectionId) loadSection();
  }, [sectionId]);

  // Cleanup polling on unmount
  useEffect(() => {
    return () => {
      if (pollingInterval) clearInterval(pollingInterval);
    };
  }, [pollingInterval]);

  const pollGeneration = async (runId: string, intervalId: any) => {
    try {
      const res = await fetchAPI(`/ded/generation-runs/${runId}`);
      const run = res.data;
      setGenerationRun(run);
      
      if (run.status === 'COMPLETED' || run.status === 'FAILED') {
        setIsGenerating(false);
        if (intervalId) clearInterval(intervalId);
        if (pollingInterval) clearInterval(pollingInterval);
        
        if (run.status === 'COMPLETED') {
          setShowOutput(true);
        } else {
          alert("Pembuatan Draf Gagal: " + run.error_message);
        }
      }
    } catch (err) {
      console.error("Polling error:", err);
    }
  };

  const handleGenerate = async () => {
    try {
      setIsGenerating(true);
      setShowOutput(false);
      setGenerationRun({ status: 'RUNNING' });
      
      if (pollingInterval) clearInterval(pollingInterval);
      
      const res = await fetchAPI(`/ded/sections/${sectionId}/generate`, {
        method: 'POST',
        body: JSON.stringify({ top_k: topK, retrieval_method: retrievalMethod, instruction })
      });
      
      const runId = res.data.id;
      
      // Mulai polling tiap 2 detik
      const interval = setInterval(() => {
        pollGeneration(runId, interval);
      }, 2000);
      setPollingInterval(interval);

    } catch (err: any) {
      alert(err.message);
      setIsGenerating(false);
    }
  };

  if (!section) return <div className="p-10 text-gray-500">Memuat konfigurasi AI...</div>;

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#172033] p-6">
      {/* Header */}
      <div className="mb-6 border-b border-[#E4E7EC] pb-4">
        <div className="flex items-center text-sm text-[#667085] mb-2">
          <Link to={`/projects/${projectId}/ded`} className="hover:text-[#163A5F]">DED Overview</Link>
          <FiChevronRight className="mx-1" />
          <Link to={`/projects/${projectId}/ded/${sectionId}/edit`} className="hover:text-[#163A5F]">
            {section.code}
          </Link>
          <FiChevronRight className="mx-1" />
          <span className="font-semibold text-[#172033]">AI Draft Generation</span>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#172033]">Generate Draf: {section.title}</h1>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Left: Konfigurasi */}
        <div className="w-[380px] shrink-0 flex flex-col gap-5">
          <div className="bg-white rounded-xl border border-[#E4E7EC] p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E4E7EC]">
              <FiSettings className="text-[#163A5F]" />
              <h2 className="font-bold text-[#172033]">Parameter RAG</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#667085] uppercase mb-1">Metode Pencarian</label>
                <select 
                  value={retrievalMethod} 
                  onChange={e => setRetrievalMethod(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="HYBRID_RRF">Hybrid Search (Vector + BM25)</option>
                  <option value="SEMANTIC_ONLY">Semantic Search (Vector Only)</option>
                </select>
                <p className="text-[11px] text-gray-500 mt-1 flex items-start gap-1">
                  <FiInfo className="mt-0.5 shrink-0" />
                  Hybrid menggabungkan makna semantik dari Gemini Embedding dengan pencocokan kata kunci BM25.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#667085] uppercase mb-1">Top-K Evidence</label>
                <input 
                  type="number" 
                  value={topK}
                  onChange={e => setTopK(Number(e.target.value))}
                  className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-blue-500" 
                  min="1" max="20" 
                />
                <p className="text-[11px] text-gray-500 mt-1">Maksimal paragraf referensi yang disuntikkan ke prompt.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E4E7EC] p-5 shadow-sm">
            <label className="block text-xs font-bold text-[#667085] uppercase mb-2">Instruksi Khusus (Prompt)</label>
            <textarea 
              value={instruction}
              onChange={e => setInstruction(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 px-3 text-sm min-h-[120px] focus:outline-none focus:border-blue-500"
              placeholder="Tambahkan instruksi khusus untuk AI (misal: 'Fokuskan pada peran mahasiswa dalam...')"
            />
            
            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className={`w-full mt-4 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition ${
                isGenerating ? 'bg-indigo-100 text-indigo-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md'
              }`}
            >
              {isGenerating ? <><FiLoader className="animate-spin" /> Memproses AI...</> : <><FiPlay /> Jalankan Hybrid RAG</>}
            </button>
          </div>
        </div>

        {/* Right: Pipeline / Output */}
        <div className="flex-1 flex flex-col gap-5">
          {!showOutput && !isGenerating && (
            <div className="bg-white rounded-xl border border-[#E4E7EC] p-10 flex flex-col items-center justify-center text-center shadow-sm h-full">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <FiCpu size={32} />
              </div>
              <h3 className="text-lg font-bold text-[#172033] mb-2">AI Generation Engine Siap</h3>
              <p className="text-sm text-[#667085] max-w-[400px]">
                Sistem akan membedah parameter rubrik LAMEMBA untuk Kriteria ini, mencari bukti yang relevan dari dokumen Anda menggunakan <b>pgvector</b>, dan menyusun draf melalui <b>Gemini 1.5 Flash</b>.
              </p>
            </div>
          )}

          {isGenerating && (
             <div className="bg-white rounded-xl border border-indigo-200 p-8 shadow-sm h-full flex items-center justify-center flex-col">
                <FiLoader size={48} className="animate-spin text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-[#172033] mb-2">Gemini AI sedang Bekerja...</h3>
                <p className="text-sm text-gray-500 text-center max-w-[400px]">
                  {generationRun?.status === 'RUNNING' 
                    ? 'Sedang mencari Vector Embeddings dari dokumen Anda dan menyusun narasi akreditasi...' 
                    : 'Menyiapkan Pipeline...'}
                </p>
             </div>
          )}

          {showOutput && generationRun?.status === 'COMPLETED' && (
            <>
              {/* Evidence Retrieved */}
              <div className="bg-white rounded-xl border border-[#E4E7EC] p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <FiFileText className="text-blue-600" />
                  <h2 className="font-bold text-[#172033]">Bukti Ditemukan ({generationRun.retrieved_chunks?.length || 0})</h2>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2 snap-x">
                  {(Array.isArray(generationRun.retrieved_chunks) ? generationRun.retrieved_chunks : []).map((chunk: any, i: number) => (
                    <div key={i} className="min-w-[280px] max-w-[280px] bg-blue-50 border border-blue-100 rounded-lg p-3 snap-start">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-[10px] font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
                          Doc {i+1}
                        </span>
                        <span className="text-[10px] text-blue-600 font-mono">
                          Dist: {Number(chunk.distance || 0).toFixed(3)}
                        </span>
                      </div>
                      <p className="text-xs text-[#172033] line-clamp-3 mb-2">{chunk.content || '-'}</p>
                      <div className="text-[10px] text-gray-500 flex items-center gap-1">
                        <FiFileText /> <span className="truncate">{chunk.doc_name || '-'} (Hal {chunk.page || '-'})</span>
                      </div>
                    </div>
                  ))}
                  {(!Array.isArray(generationRun.retrieved_chunks) || generationRun.retrieved_chunks.length === 0) && (
                     <div className="text-sm text-amber-600 bg-amber-50 p-3 rounded-lg border border-amber-200">
                        Peringatan: Tidak ada evidence yang relevan ditemukan di Knowledge Base. AI menyusun draf secara teoretis berdasarkan rubrik.
                     </div>
                  )}
                </div>
              </div>

              {/* Generated Draft */}
              <div className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm flex flex-col flex-1">
                <div className="p-4 border-b border-[#E4E7EC] bg-[#F7F9FC] flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FiEdit3 className="text-[#163A5F]" />
                    <h2 className="font-bold text-[#172033]">Hasil Generasi Draf</h2>
                  </div>
                  <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded">
                    Selesai ({generationRun.duration_ms}ms)
                  </span>
                </div>
                <div className="p-5 flex-1 bg-white min-h-[300px]">
                  <textarea 
                    className="w-full h-full min-h-[300px] resize-y outline-none text-[#172033] leading-relaxed text-sm"
                    readOnly
                    value={generationRun.generated_text}
                  />
                </div>
                <div className="p-4 bg-gray-50 border-t border-[#E4E7EC] flex justify-end gap-3 rounded-b-xl">
                  <button onClick={() => setShowOutput(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-white transition">
                    Batalkan
                  </button>
                  <button 
                    onClick={() => navigate(`/projects/${projectId}/ded/${sectionId}/edit`)}
                    className="px-4 py-2 bg-[#163A5F] text-white rounded-md text-sm font-medium hover:bg-blue-800 transition flex items-center gap-2"
                  >
                    <FiCheckCircle /> Buka di Editor Workspace
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
