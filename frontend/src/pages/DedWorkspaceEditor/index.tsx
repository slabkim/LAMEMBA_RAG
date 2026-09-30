import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FiChevronRight, FiSave, FiSend, FiAlertTriangle, FiFileText, FiLink, FiCpu, FiBold, FiItalic, FiList, FiAlignLeft, FiLoader, FiCheckCircle, FiInfo } from 'react-icons/fi';
import { fetchAPI } from '../../lib/api';

export default function DedWorkspaceEditor() {
  const { id: projectId, criterionId: sectionId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('generator');
  
  const [section, setSection] = useState<any>(null);
  const [content, setContent] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  // AI Chat & Generator States
  const [instruction, setInstruction] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationRun, setGenerationRun] = useState<any>(null);
  const pollingIntervalRef = useRef<any>(null);

  useEffect(() => {
    const loadSection = async () => {
      try {
        setLoading(true);
        const res = await fetchAPI(`/ded/sections/${sectionId}`);
        setSection(res.data);
        
        if (res.data.responses && res.data.responses.length > 0) {
          setContent(res.data.responses[0].content || '');
        }
      } catch (err) {
        console.error(err);
        alert("Gagal memuat detail kriteria.");
      } finally {
        setLoading(false);
      }
    };
    if (sectionId) loadSection();
    
    return () => {
      if (pollingIntervalRef.current) clearInterval(pollingIntervalRef.current);
    };
  }, [sectionId]);

  const handleSave = async () => {
    try {
      setIsSaving(true);
      await fetchAPI(`/ded/sections/${sectionId}/save`, {
        method: 'POST',
        body: JSON.stringify({ content })
      });
      alert('Draft berhasil disimpan!');
    } catch (err: any) {
      alert(err.message);
    } finally {
      setIsSaving(false);
    }
  };

  const pollGeneration = async (runId: string) => {
    try {
      const res = await fetchAPI(`/ded/generation-runs/${runId}`);
      const run = res.data;
      setGenerationRun(run);
      
      if (run.status === 'COMPLETED' || run.status === 'FAILED') {
        setIsGenerating(false);
        if (pollingIntervalRef.current) clearInterval(pollingIntervalRef.current);
        
        if (run.status === 'COMPLETED') {
          // Auto-update text editor dengan hasil generasi AI
          setContent(run.generated_text);
        } else {
          alert("Pembuatan Draf Gagal: " + run.error_message);
        }
      }
    } catch (err) {
      console.error("Polling error:", err);
    }
  };

  const handleGenerateAI = async () => {
    try {
      setIsGenerating(true);
      setGenerationRun({ status: 'RUNNING' });
      
      if (pollingIntervalRef.current) clearInterval(pollingIntervalRef.current);
      
      const res = await fetchAPI(`/ded/sections/${sectionId}/generate`, {
        method: 'POST',
        body: JSON.stringify({ top_k: 10, retrieval_method: 'HYBRID_RRF', instruction })
      });
      
      const runId = res.data.id;
      
      pollingIntervalRef.current = setInterval(() => {
        pollGeneration(runId);
      }, 2000);

      setInstruction(''); // Clear input after sending
    } catch (err: any) {
      alert(err.message);
      setIsGenerating(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center text-gray-500">Memuat Editor...</div>;
  }

  if (!section) return null;

  return (
    <div className="min-h-screen bg-[#F7F9FC] flex flex-col h-screen">
      {/* Warning Banner */}
      <div className="bg-amber-500 text-white px-4 py-2 text-[13px] flex items-center justify-center gap-2 font-medium shrink-0">
        <FiAlertTriangle />
        Mode Workspace: Draf ini dapat dibantu oleh generasi AI. Selalu pastikan narasi didukung oleh bukti dan sitasi yang tepat.
      </div>

      {/* Header Breadcrumb */}
      <header className="bg-white border-b border-[#E4E7EC] px-6 py-4 shrink-0">
        <div className="flex items-center text-sm text-[#667085] mb-2">
          <Link to={`/projects/${projectId}/ded`} className="hover:text-[#163A5F]">DED Overview</Link>
          <FiChevronRight className="mx-1" />
          <span className="font-mono text-[11px] font-bold uppercase bg-gray-100 px-2 py-0.5 rounded text-gray-600">{section.code}</span>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#172033]">{section.title}</h1>
          <div className="flex items-center gap-3">
            <span className={`px-2 py-1 border rounded text-xs font-semibold uppercase ${
              section.status === 'APPROVED' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
              section.status === 'IN_REVIEW' ? 'bg-purple-50 text-purple-600 border-purple-200' :
              'bg-amber-50 text-amber-600 border-amber-200'
            }`}>
              {section.status}
            </span>
            <button className="text-sm text-[#163A5F] hover:underline font-bold">Riwayat Versi</button>
          </div>
        </div>
      </header>

      {/* Editor & Context Area */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left: Text Editor */}
        <div className="flex-1 flex flex-col border-r border-[#E4E7EC] bg-white">
          <div className="flex items-center justify-between px-4 py-2 border-b border-[#E4E7EC] bg-gray-50 shrink-0">
            <div className="flex items-center gap-1">
              <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded"><FiBold /></button>
              <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded"><FiItalic /></button>
              <div className="w-px h-4 bg-gray-300 mx-1"></div>
              <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded"><FiList /></button>
              <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded"><FiAlignLeft /></button>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E4E7EC] text-[#172033] hover:bg-gray-50 rounded-md text-[13px] font-bold transition disabled:opacity-50"
              >
                <FiSave /> {isSaving ? 'Menyimpan...' : 'Simpan Draf'}
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-[#163A5F] text-white hover:bg-blue-800 rounded-md text-[13px] font-bold transition">
                <FiSend /> Ajukan Review
              </button>
            </div>
          </div>
          <div className="flex-1 p-8 overflow-y-auto">
            <textarea 
              className="w-full h-full resize-none outline-none text-[#172033] leading-relaxed text-[15px]"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Mulai mengetik narasi evaluasi diri Anda di sini, atau minta AI (di panel kanan) untuk menyusun draf awalnya..."
            />
          </div>
        </div>

        {/* Right: AI Chat / Evidence Board */}
        <div className="w-[400px] bg-white flex flex-col shrink-0 shadow-[-4px_0_15px_rgba(0,0,0,0.03)] z-10">
          <div className="flex border-b border-[#E4E7EC] shrink-0 bg-[#F7F9FC]">
            <button 
              className={`flex-1 py-3 text-[13px] font-bold text-center ${activeTab === 'generator' ? 'bg-white text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:bg-gray-50'}`}
              onClick={() => setActiveTab('generator')}
            >
              <div className="flex items-center justify-center gap-2"><FiCpu /> AI Assistant</div>
            </button>
            <button 
              className={`flex-1 py-3 text-[13px] font-bold text-center ${activeTab === 'evidence' ? 'bg-white text-[#163A5F] border-b-2 border-[#163A5F]' : 'text-gray-500 hover:bg-gray-50'}`}
              onClick={() => setActiveTab('evidence')}
            >
              <div className="flex items-center justify-center gap-2"><FiFileText /> Bukti Terkait</div>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-gray-50">
            {activeTab === 'generator' && (
              <>
                <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-2">
                  <h4 className="text-xs font-bold text-indigo-800 mb-1 flex items-center gap-1.5"><FiInfo /> AI Copilot</h4>
                  <p className="text-[12px] text-indigo-900 leading-snug">
                    Beri tahu saya apa yang ingin Anda tulis. Saya akan mencarikan data dari <b>Knowledge Base</b> Anda dan menuliskannya langsung ke lembar kerja di samping.
                  </p>
                </div>

                {isGenerating && (
                  <div className="bg-white border border-blue-200 rounded-lg p-5 flex flex-col items-center justify-center text-center shadow-sm">
                    <FiLoader size={28} className="animate-spin text-blue-600 mb-3" />
                    <span className="text-[13px] font-bold text-[#172033]">AI Sedang Mengetik...</span>
                    <span className="text-[11px] text-gray-500 mt-1">Mencari bukti dan menyusun narasi DED.</span>
                  </div>
                )}

                {generationRun?.status === 'COMPLETED' && !isGenerating && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center gap-1.5 mb-2">
                      <FiCheckCircle className="text-emerald-600" />
                      <span className="text-[12px] font-bold text-emerald-800">Draf Selesai Dibuat</span>
                    </div>
                    <p className="text-[11px] text-emerald-900 leading-snug">
                      Teks berhasil ditambahkan ke lembar kerja. AI menggunakan <b>{generationRun.retrieved_chunks?.length || 0} sumber dokumen</b> untuk menulis ini.
                    </p>
                  </div>
                )}

                {generationRun?.status === 'COMPLETED' && Array.isArray(generationRun.retrieved_chunks) && generationRun.retrieved_chunks.length > 0 && (
                  <div className="flex flex-col gap-2 mt-2">
                    <span className="text-[10px] font-bold uppercase text-gray-500">Sumber yang Dipakai AI:</span>
                    {generationRun.retrieved_chunks.map((chunk: any, i: number) => (
                      <div key={i} className="bg-white p-2.5 rounded border border-[#E4E7EC] shadow-sm">
                        <span className="text-[11px] font-bold text-[#163A5F] line-clamp-1">{chunk.doc_name}</span>
                        <span className="text-[10px] text-gray-500">Hal. {chunk.page || '-'} (Dist: {Number(chunk.distance || 0).toFixed(3)})</span>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {activeTab === 'evidence' && (
              <div className="flex flex-col items-center justify-center h-full text-center p-6 text-gray-500">
                <FiLink size={32} className="text-gray-300 mb-3" />
                <p className="text-[13px] font-medium text-[#172033] mb-1">Pustaka Bukti</p>
                <p className="text-[11px]">Anda bisa mentautkan secara manual dokumen DKPS ke narasi DED dari sini pada iterasi selanjutnya.</p>
              </div>
            )}
          </div>

          {/* Chat Input Box (Fixed at bottom right) */}
          {activeTab === 'generator' && (
            <div className="p-4 bg-white border-t border-[#E4E7EC] shrink-0">
              <div className="relative">
                <textarea 
                  value={instruction}
                  onChange={e => setInstruction(e.target.value)}
                  placeholder="Ketik instruksi untuk AI di sini (Misal: 'Tuliskan draf lengkap untuk kriteria ini')..."
                  className="w-full bg-gray-50 border border-[#E4E7EC] rounded-xl py-3 pl-4 pr-12 text-[13px] text-[#172033] focus:outline-none focus:border-indigo-400 focus:bg-white transition resize-none h-[80px]"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleGenerateAI();
                    }
                  }}
                />
                <button 
                  onClick={handleGenerateAI}
                  disabled={isGenerating || !instruction.trim()}
                  className={`absolute right-3 bottom-3 p-2 rounded-lg transition ${
                    isGenerating || !instruction.trim() ? 'bg-gray-200 text-gray-400' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md'
                  }`}
                >
                  <FiSend size={14} />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
