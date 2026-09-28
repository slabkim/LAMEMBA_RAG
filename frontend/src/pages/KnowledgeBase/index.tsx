import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FiDatabase, FiSearch, FiRefreshCw, FiPlus, FiChevronDown,
  FiCheckCircle, FiAlertCircle, FiAlertTriangle, FiFileText,
  FiX
} from "react-icons/fi";

type ChunkStatus = 'INDEXED' | 'NEEDS_REVIEW' | 'FAILED';

interface KBChunk {
  id: string; source: string; org: string; page: string;
  criteria: string; dimension: string; chunkId: string;
  semanticScore: number; bm25Score: number; status: ChunkStatus;
  excerpt?: string;
}

const STATUS_CFG: Record<ChunkStatus, { bg: string; text: string; label: string }> = {
  INDEXED:      { bg: 'bg-emerald-50', text: 'text-emerald-500', label: '\u2713 Indexed' },
  NEEDS_REVIEW: { bg: 'bg-amber-100',  text: 'text-amber-600',   label: '\u26a0 Needs Review' },
  FAILED:       { bg: 'bg-red-50',     text: 'text-red-500',     label: '\u2715 Failed' },
};

const DEMO_CHUNKS: KBChunk[] = [
  { id:'1', source:'Renstra_UPPS_2025.pdf',       org:'UPPS', page:'Hlm. 14',     criteria:'1. Orientasi Strategis', dimension:'Visi & Misi',       chunkId:'chunk_kb_082', semanticScore:0.92, bm25Score:0.88, status:'INDEXED',
    excerpt:'"...visi dan misi UPPS diarahkan pada pengembangan kompetensi manajemen yang berdaya saing global..."' },
  { id:'2', source:'DKPS_Akademik_V2.xlsx',        org:'UPPS', page:'Sheet Dosen', criteria:'4. Dosen & Tendik',      dimension:'Kualifikasi Dosen', chunkId:'chunk_kb_119', semanticScore:0.87, bm25Score:0.91, status:'INDEXED' },
  { id:'3', source:'Kebijakan_SPMI_FE_2024.pdf',   org:'UPPS', page:'Hlm. 8',      criteria:'2. Tata Kelola',         dimension:'Penjaminan Mutu',   chunkId:'chunk_kb_201', semanticScore:0.85, bm25Score:0.79, status:'NEEDS_REVIEW',
    excerpt:'"...Sistem Penjaminan Mutu Internal (SPMI) di Fakultas Ekonomi dikoordinasikan secara berkala setiap akhir semester ganjil..."' },
  { id:'4', source:'Kurikulum_OBE_Manajemen.pdf',  org:'UPPS', page:'Hlm. 42',     criteria:'6. Pendidikan',          dimension:'Kurikulum OBE',     chunkId:'chunk_kb_314', semanticScore:0.78, bm25Score:0.65, status:'FAILED' },
  { id:'5', source:'Laporan_Penelitian_2025.pdf',  org:'UPPS', page:'Hlm. 5',      criteria:'7. Pengabdian',          dimension:'Luaran Penelitian', chunkId:'chunk_kb_402', semanticScore:0.91, bm25Score:0.86, status:'INDEXED' },
];

export default function KnowledgeBase() {
  const { id: projectId } = useParams();
  const [selectedChunk, setSelectedChunk] = useState<KBChunk | null>(null);

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-[#172033] text-[28px] font-bold">Knowledge Base & Vector Store</h1>
          <div className="flex items-center text-sm gap-2">
            <span className="text-[#163A5F] font-bold">Proyek Aktif:</span>
            <span className="text-[#172033]">Akreditasi S1 Manajemen 2026 &middot; DEMO</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
            <span className="text-[#667085] text-[13px]">Last indexing: 5 menit yang lalu</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center bg-white text-[#172033] py-2.5 px-4 gap-2 rounded-lg border border-[#E4E7EC] font-bold text-[13px] hover:bg-gray-50 transition"><FiRefreshCw /> Re-index RRF</button>
          <button className="flex items-center bg-[#163A5F] text-white py-2.5 px-4 gap-2 rounded-lg font-bold text-[13px] hover:bg-blue-800 transition"><FiPlus /> Tambah Source</button>
        </div>
      </div>

      {/* RRF Banner */}
      <div className="bg-blue-50 p-4 gap-2 rounded-xl border border-[#D0E0FF] flex flex-col">
        <div className="flex items-center gap-2"><FiDatabase className="text-blue-500 w-4 h-4" /><span className="text-blue-500 text-sm font-bold">Algoritma Reciprocal Rank Fusion (RRF) Aktif</span></div>
        <span className="text-[#2E4C7E] text-[13px]">Sistem pencarian bukti menggabungkan skor dari Semantic Retrieval (vector) dan BM25 (keyword) melalui fusi peringkat timbal balik (RRF) demi keterlacakan dokumen DED & DKPS kriteria LAMEMBA.</span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard label="Total Sources" value="14 Dokumen" change="+2 Baru" positive />
        <StatCard label="Total Chunks" value="1,842 Chunks" change="+142 Baru" positive />
        <StatCard label="Successfully Indexed" value="1,798 Chunks" change="97.6% Rate" positive />
        <StatCard label="Failed Chunks" value="44 Chunks" change="-5 Berhasil" positive={false} />
      </div>

      {/* Chunks Table + Detail */}
      <div className="flex items-start gap-6">
        <div className="flex-1 flex flex-col gap-6">
          {/* Filters */}
          <div className="bg-white p-4 rounded-xl border border-[#E4E7EC] flex flex-col gap-3">
            <span className="text-[#172033] text-sm font-bold">Filter Pencarian Chunks (RRF Store)</span>
            <div className="flex items-center gap-3 flex-wrap">
              <FilterDD label="Project" value="S1 Manajemen 2026" options={['S1 Manajemen 2026']} />
              <FilterDD label="Document" value="Semua" options={['Semua']} />
              <FilterDD label="Kriteria" value="1 - 7 LAMEMBA" options={['1 - 7 LAMEMBA']} />
            </div>
            <div className="flex items-center gap-3">
              <FilterDD label="Dimensi" value="Semua" options={['Semua']} />
              <div className="flex items-center bg-[#F7F9FC] py-2 px-3 gap-2 rounded-md border border-[#E4E7EC]">
                <FiSearch className="w-3.5 h-3.5 text-[#667085]" />
                <input type="text" placeholder="Cari ID chunk atau kutipan..." className="bg-transparent border-none outline-none text-[13px] text-[#667085] w-48" />
              </div>
              <button className="bg-transparent text-[#172033] text-[13px] font-bold py-2 px-4 rounded-md border border-[#E4E7EC] hover:bg-gray-50">Reset</button>
            </div>
          </div>

          {/* Chunks Table */}
          <div className="bg-white rounded-xl border border-[#E4E7EC] overflow-hidden">
            <div className="flex items-center bg-[#F7F9FC] py-2.5 px-4 text-[#667085] text-[11px] font-bold uppercase gap-2">
              <span className="w-40">Source / Bukti</span><span className="w-16">Hlm</span>
              <span className="w-36">Kriteria / Dimensi</span><span className="w-24">Chunk ID</span>
              <span className="flex-1" /><span className="w-20 text-center">Semantic</span>
              <span className="w-16 text-center">BM25</span><span className="w-24 text-center">Status</span>
            </div>
            {DEMO_CHUNKS.map((chunk) => {
              const st = STATUS_CFG[chunk.status]; const sel = selectedChunk?.id === chunk.id;
              return (
                <div key={chunk.id} onClick={() => setSelectedChunk(chunk)}
                  className={`flex items-center py-3 px-4 border-t border-gray-100 cursor-pointer transition ${sel ? 'bg-[#E8EEF5]' : 'bg-white hover:bg-gray-50'}`}>
                  <div className="w-40 flex flex-col gap-0.5">
                    <span className="text-[#172033] text-[13px] font-bold truncate">{chunk.source}</span>
                    <span className="text-[#667085] text-[11px]">{chunk.org}</span>
                  </div>
                  <span className="w-16 text-[#172033] text-[13px]">{chunk.page}</span>
                  <div className="w-36 flex flex-col gap-0.5">
                    <span className="text-[#172033] text-[13px]">{chunk.criteria}</span>
                    <span className="text-[#667085] text-[11px]">{chunk.dimension}</span>
                  </div>
                  <span className="w-24 text-[#172033] text-xs">{chunk.chunkId}</span>
                  <span className="flex-1" />
                  <div className="w-20 flex justify-center"><ScoreBar score={chunk.semanticScore} /></div>
                  <div className="w-16 flex justify-center"><ScoreBar score={chunk.bm25Score} /></div>
                  <div className="w-24 flex justify-center">
                    <span className={`flex items-center gap-1 ${st.bg} ${st.text} py-[3px] px-2 rounded-md text-[11px] font-bold`}>{st.label}</span>
                  </div>
                </div>
              );
            })}
            <div className="flex justify-between items-center p-4 border-t border-gray-100">
              <span className="text-[#667085] text-[13px]">Menampilkan 1-5 dari 1,842 chunks (DEMO)</span>
              <div className="flex items-center gap-2">
                <button className="bg-white text-[#172033] text-[13px] py-1.5 px-3 rounded-md border border-[#E4E7EC]">Sebelumnya</button>
                <button className="bg-white text-[#172033] text-[13px] py-1.5 px-3 rounded-md border border-[#E4E7EC]">Berikutnya</button>
              </div>
            </div>
          </div>
        </div>

        {/* Chunk Detail */}
        {selectedChunk && (
          <div className="bg-white w-[360px] shrink-0 rounded-xl border border-[#E4E7EC] py-5 flex flex-col">
            <div className="flex justify-between items-start px-5 mb-5">
              <div className="flex flex-col gap-1">
                <span className="text-[#163A5F] text-[11px] font-bold">CHUNK DETAIL & EVIDENCE</span>
                <span className="text-[#172033] text-base font-bold">{selectedChunk.chunkId}</span>
              </div>
              <button onClick={() => setSelectedChunk(null)} className="text-gray-400 hover:text-gray-600"><FiX size={18} /></button>
            </div>
            <div className="h-px bg-[#E4E7EC] mx-5 mb-5" />
            {selectedChunk.excerpt && (
              <div className="flex flex-col gap-2 mx-5 mb-5">
                <span className="text-[#667085] text-xs font-bold">RELEVANT EXCERPT (KUTIPAN BUKTI)</span>
                <div className="bg-[#F7F9FC] p-3 rounded-lg border border-[#E4E7EC]"><span className="text-[#172033] text-[13px]">{selectedChunk.excerpt}</span></div>
              </div>
            )}
            <div className="flex flex-col gap-3 mx-5 mb-5">
              <span className="text-[#667085] text-xs font-bold">METADATA SOURCE</span>
              <MetaRow label="Nama Dokumen" value={selectedChunk.source} bold />
              <MetaRow label="Halaman / Lokasi" value={selectedChunk.page} />
              <MetaRow label="Tipe Dokumen" value="Evidence pendukung" badge />
              <MetaRow label="Kriteria LAMEMBA" value={selectedChunk.criteria} />
              <div className="flex flex-col gap-1">
                <span className="text-[#667085] text-[11px]">Status Sinkronisasi Store</span>
                <div className="flex items-center gap-2">
                  <span className="bg-emerald-50 text-emerald-500 text-[11px] font-bold py-1 px-2 rounded-md">Semantic: OK</span>
                  <span className="bg-emerald-50 text-emerald-500 text-[11px] font-bold py-1 px-2 rounded-md">BM25: OK</span>
                </div>
              </div>
            </div>
            <div className="h-px bg-[#E4E7EC] mx-5 mb-5" />
            <div className="flex flex-col gap-2 mx-5 mb-5">
              <button className="bg-[#163A5F] text-white text-[13px] font-bold py-2.5 rounded-lg text-center hover:bg-blue-800">Lihat Dokumen Asli</button>
              <button className="bg-transparent text-[#163A5F] text-[13px] font-bold py-2.5 rounded-lg border border-[#163A5F] text-center hover:bg-gray-50">Inspect RRF Rank</button>
            </div>
            <div className="bg-amber-100 p-3 mx-5 rounded-lg border border-[#FFE0B2]">
              <span className="text-[#7A4F01] text-[11px]">* Kutipan membantu keterlacakan bukti fisik (Evidence) di lapangan, namun tidak otomatis membuktikan kebenaran absolut isi klaim akreditasi.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value, change, positive }: { label: string; value: string; change: string; positive: boolean }) {
  return (
    <div className="bg-white p-[18px] rounded-xl border border-[#E4E7EC] flex flex-col gap-3">
      <div className="flex justify-between items-center"><span className="text-[#667085] text-[11px] font-bold">{label}</span><FiDatabase className="text-gray-300 w-6 h-6" /></div>
      <div className="flex flex-col gap-1">
        <span className="text-[#172033] text-2xl font-bold">{value}</span>
        <div className="flex items-center gap-1.5">
          <span className={`text-[11px] font-bold ${positive ? 'text-emerald-500' : 'text-red-500'}`}>{change}</span>
          <span className="text-[#667085] text-[11px]">vs minggu lalu (DEMO)</span>
        </div>
      </div>
    </div>
  );
}

function FilterDD({ label, value, options }: { label: string; value: string; options: string[] }) {
  return (
    <div className="relative">
      <select className="appearance-none bg-white text-[#172033] text-[13px] py-2 pl-3 pr-8 rounded-md border border-[#E4E7EC] cursor-pointer" defaultValue={value}>
        {options.map(o => <option key={o}>{label}: {o}</option>)}
      </select>
      <FiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
    </div>
  );
}

function ScoreBar({ score }: { score: number }) {
  const pct = Math.round(score * 100);
  const color = pct >= 85 ? 'bg-emerald-400' : pct >= 70 ? 'bg-blue-400' : 'bg-amber-400';
  return (
    <div className="w-[70px] h-3.5 bg-gray-100 rounded-full overflow-hidden" title={`${pct}%`}>
      <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
    </div>
  );
}

function MetaRow({ label, value, bold, badge }: { label: string; value: string; bold?: boolean; badge?: boolean }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[#667085] text-[11px]">{label}</span>
      {badge ? <span className="bg-[#F2F4F7] text-[#344054] text-[11px] font-bold py-1 px-2 rounded-md w-fit">{value}</span>
             : <span className={`text-[#172033] text-[13px] ${bold ? 'font-bold' : ''}`}>{value}</span>}
    </div>
  );
}
