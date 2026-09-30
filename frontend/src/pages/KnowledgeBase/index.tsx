import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FiDatabase, FiSearch, FiRefreshCw, FiPlus, FiChevronDown,
  FiCheckCircle, FiAlertCircle, FiAlertTriangle, FiFileText,
  FiX, FiLoader
} from "react-icons/fi";
import { fetchAPI } from "../../lib/api";

const STATUS_CFG: Record<string, { bg: string; text: string; label: string }> = {
  ACTIVE:       { bg: 'bg-emerald-50', text: 'text-emerald-500', label: '✓ Active' },
  NEEDS_REVIEW: { bg: 'bg-amber-100',  text: 'text-amber-600',   label: '⚠ Needs Review' },
  ARCHIVED:     { bg: 'bg-red-50',     text: 'text-red-500',     label: '✕ Archived' },
};

export default function KnowledgeBase() {
  const { id: projectId } = useParams();
  const [selectedChunk, setSelectedChunk] = useState<any | null>(null);
  
  const [stats, setStats] = useState<any>(null);
  const [chunks, setChunks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      setLoading(true);
      const [statsRes, chunksRes] = await Promise.all([
        fetchAPI(`/knowledge-base/stats?project_id=${projectId}`),
        fetchAPI(`/knowledge-base/chunks?project_id=${projectId}&limit=50`)
      ]);
      setStats(statsRes.data);
      setChunks(chunksRes.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (projectId) loadData();
  }, [projectId]);

  const handleReindex = async () => {
    try {
      await fetchAPI('/knowledge-base/reindex', { method: 'POST', body: JSON.stringify({ project_id: projectId }) });
      alert("Proses reindex RAG dijalankan.");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-[#172033] text-[28px] font-bold">RAG Knowledge Base</h1>
          <p className="text-[#667085] text-sm max-w-[650px]">
            Index pintar dokumen bukti (Evidence) LAMEMBA. Vector database pgvector mengolah dan menyimpan dokumen
            sebagai vektor untuk pencarian akurat melalui Semantic Search (Embedding) dan BM25 (Keyword).
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleReindex}
            className="flex items-center bg-white text-[#172033] border border-[#E4E7EC] py-2.5 px-4 gap-2 rounded-lg font-bold text-[13px] hover:bg-gray-50 transition"
          >
            <FiRefreshCw /> Reindex Vector
          </button>
        </div>
      </div>

      {/* Stats KPI */}
      {stats && (
        <div className="grid grid-cols-4 gap-4">
          <StatCard title="Total Chunks" value={stats.total_chunks?.toString() || '0'} icon={<FiDatabase />} />
          <StatCard title="Documents Indexed" value={stats.documents_indexed?.toString() || '0'} icon={<FiFileText />} />
          <StatCard title="Total Tokens (est)" value={stats.total_tokens_est?.toString() || '0'} icon={<FiPlus />} />
          <StatCard title="Vector Dimensi" value="768" icon={<FiCheckCircle />} />
        </div>
      )}

      {/* Filters */}
      <div className="flex items-center bg-white py-4 px-4 rounded-lg border border-[#E4E7EC] gap-3 flex-wrap shadow-sm">
        <div className="flex items-center bg-[#F7F9FC] py-2 px-3 gap-2 rounded-md border border-[#E4E7EC]">
          <FiSearch className="w-4 h-4 text-[#667085]" />
          <input type="text" placeholder="Cari isi teks chunk..." className="bg-transparent border-none outline-none text-[13px] text-[#172033] w-56" />
        </div>
        <FilterDD label="Kriteria Target" options={['Semua']} />
        <FilterDD label="Status" options={['Semua', 'ACTIVE', 'ARCHIVED']} />
      </div>

      {/* Main Area: Table & Sidebar */}
      <div className="flex gap-6">
        <div className={`bg-white rounded-xl border border-[#E4E7EC] overflow-hidden shadow-sm ${selectedChunk ? 'flex-1' : 'w-full'}`}>
          <div className="flex items-center bg-[#F7F9FC] py-2.5 px-4 text-[#667085] text-[11px] font-bold uppercase">
            <span className="w-16">ID Chunk</span>
            <span className="flex-1 px-4">Snippet (Isi Teks)</span>
            <span className="w-40 text-center">Dokumen Asal</span>
            <span className="w-24 text-center">Status</span>
          </div>

          {loading ? (
             <div className="p-8 text-center text-gray-500 flex flex-col items-center">
                <FiLoader className="animate-spin text-2xl mb-2 text-blue-500" />
                Mengambil vector chunks...
             </div>
          ) : chunks.length === 0 ? (
             <div className="p-8 text-center text-gray-500">
                Belum ada vektor embedding (chunks) untuk proyek ini. Silakan upload dan proses dokumen terlebih dahulu di menu Documents.
             </div>
          ) : chunks.map((chunk) => {
            const st = STATUS_CFG[chunk.status] || STATUS_CFG.ACTIVE;
            const isSel = selectedChunk?.id === chunk.id;
            return (
              <div 
                key={chunk.id} 
                onClick={() => setSelectedChunk(chunk)}
                className={`flex items-start py-3.5 px-4 border-t border-gray-100 cursor-pointer transition ${isSel ? 'bg-[#E8EEF5]' : 'bg-white hover:bg-gray-50'}`}
              >
                <span className="w-16 text-[#667085] text-[11px] font-mono truncate">{chunk.id.split('-')[0]}</span>
                <div className="flex-1 px-4 text-[#172033] text-[13px] line-clamp-2">
                  {chunk.content}
                </div>
                <span className="w-40 text-center text-[#667085] text-[12px] truncate">{chunk.document?.name || 'Dokumen'}</span>
                <div className="w-24 flex justify-center">
                  <span className={`flex items-center gap-1.5 ${st.bg} ${st.text} py-0.5 px-2 rounded font-bold text-[10px] uppercase`}>
                    {st.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {selectedChunk && (
          <div className="bg-white w-[380px] shrink-0 rounded-xl border border-[#E4E7EC] p-6 flex flex-col gap-4 self-start shadow-sm sticky top-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <span className="text-[#172033] text-sm font-bold">Chunk Detail</span>
                <span className="text-[#667085] text-[11px] font-mono">ID: {selectedChunk.id}</span>
              </div>
              <button onClick={() => setSelectedChunk(null)} className="text-gray-400 hover:text-gray-600"><FiX size={18} /></button>
            </div>
            
            <div className="h-px bg-[#E4E7EC]" />

            <div className="flex flex-col gap-3">
              <div>
                <span className="text-[#667085] text-[10px] font-bold uppercase mb-1 block">Teks Asli (Isi Chunk)</span>
                <div className="bg-[#F7F9FC] p-3 rounded-md border border-[#E4E7EC] text-[13px] text-[#172033] leading-relaxed max-h-48 overflow-y-auto">
                  {selectedChunk.content}
                </div>
              </div>

              <div>
                <span className="text-[#667085] text-[10px] font-bold uppercase mb-1 block">Sumber Dokumen</span>
                <div className="flex items-center gap-2">
                  <FiFileText className="text-blue-500" />
                  <span className="text-[#172033] text-[13px] font-medium">{selectedChunk.document?.name}</span>
                </div>
                <div className="text-[11px] text-[#667085] mt-1 ml-6">
                  Page / Halaman: {selectedChunk.page_number || '-'}
                </div>
              </div>
              
              <div className="flex items-center justify-between border-t border-[#E4E7EC] pt-4 mt-2">
                <div className="flex flex-col">
                  <span className="text-[#667085] text-[10px] font-bold uppercase mb-1 block">Vector Embeddings</span>
                  <span className="text-emerald-500 text-xs font-bold flex items-center gap-1">
                    <FiCheckCircle /> Indexed di pgvector
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-[#E4E7EC] shadow-sm flex items-center gap-4">
      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[#172033] text-2xl font-bold">{value}</span>
        <span className="text-[#667085] text-[11px] font-bold uppercase mt-0.5">{title}</span>
      </div>
    </div>
  );
}

function FilterDD({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="relative">
      <select className="appearance-none bg-white text-[#172033] text-[13px] py-2 pl-3 pr-8 rounded-md border border-[#E4E7EC] cursor-pointer">
        {options.map(o => <option key={o} value={o}>{label}: {o}</option>)}
      </select>
      <FiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
    </div>
  );
}
