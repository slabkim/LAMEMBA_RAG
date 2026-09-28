import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FiUpload, FiSearch, FiFileText, FiX,
  FiRefreshCw, FiTrash2, FiEye, FiChevronDown, FiCheckCircle,
  FiAlertCircle, FiClock, FiLoader, FiUploadCloud
} from "react-icons/fi";

type DocType = 'DED' | 'DKPS' | 'EVIDENCE' | 'SUPPORTING';
type DocStatus = 'UPLOADED' | 'PROCESSING' | 'PROCESSED' | 'FAILED';

interface Document {
  id: string; name: string; type: DocType; size: string;
  date: string; status: DocStatus; chunks: number;
  criteria: string; project: string;
}

const STATUS_CFG: Record<DocStatus, { bg: string; text: string; icon: React.ReactNode; label: string }> = {
  UPLOADED:   { bg: 'bg-amber-50',   text: 'text-amber-600',   icon: <FiClock />,                            label: 'Uploaded' },
  PROCESSING: { bg: 'bg-blue-50',    text: 'text-blue-600',    icon: <FiLoader className="animate-spin" />,  label: 'Processing' },
  PROCESSED:  { bg: 'bg-emerald-50', text: 'text-emerald-600', icon: <FiCheckCircle />,                      label: 'Processed' },
  FAILED:     { bg: 'bg-red-50',     text: 'text-red-600',     icon: <FiAlertCircle />,                      label: 'Failed' },
};

const TYPE_CFG: Record<DocType, { bg: string; text: string }> = {
  DED:        { bg: 'bg-[#EEF4FF]', text: 'text-[#3538CD]' },
  DKPS:       { bg: 'bg-[#F9F5FF]', text: 'text-[#6941C6]' },
  EVIDENCE:   { bg: 'bg-[#F2F4F7]', text: 'text-[#344054]' },
  SUPPORTING: { bg: 'bg-[#FEF3F2]', text: 'text-[#B42318]' },
};

const DEMO_DOCS: Document[] = [
  { id:'1', name:'Renstra_UPPS_2025.pdf',          type:'EVIDENCE', size:'4.2 MB', date:'12 Feb 2026', status:'PROCESSING', chunks:142, criteria:'Kriteria 1 & 2', project:'S1 Manajemen 2026' },
  { id:'2', name:'DKPS_Akademik_V2.xlsx',           type:'DKPS',     size:'2.5 MB', date:'11 Feb 2026', status:'PROCESSED',  chunks:412, criteria:'Kriteria 4',     project:'S1 Manajemen 2026' },
  { id:'3', name:'DED_Kriteria_5_Keuangan.docx',    type:'DED',      size:'1.1 MB', date:'10 Feb 2026', status:'PROCESSED',  chunks:89,  criteria:'Kriteria 5',     project:'S1 Manajemen 2026' },
  { id:'4', name:'Sertifikat_Akreditasi_BANPT.pdf', type:'EVIDENCE', size:'1.8 MB', date:'10 Feb 2026', status:'UPLOADED',   chunks:0,   criteria:'Kriteria 3',     project:'S1 Manajemen 2026' },
  { id:'5', name:'DKPS_2025_Final.xlsx',             type:'DKPS',     size:'1.8 MB', date:'09 Feb 2026', status:'FAILED',     chunks:0,   criteria:'Kriteria 6',     project:'S1 Manajemen 2026' },
  { id:'6', name:'Laporan_Evaluasi_Diri_Draft.pdf',  type:'DED',      size:'8.4 MB', date:'08 Feb 2026', status:'PROCESSED',  chunks:712, criteria:'Semua Kriteria', project:'S1 Manajemen 2026' },
];

export default function DocumentsProcessing() {
  const { id: projectId } = useParams();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [filterType, setFilterType] = useState('Semua');
  const [filterStatus, setFilterStatus] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDocs = DEMO_DOCS.filter(doc => {
    if (filterType !== 'Semua' && doc.type !== filterType) return false;
    if (filterStatus !== 'Semua' && doc.status !== filterStatus) return false;
    if (searchTerm && !doc.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-[#172033] text-[28px] font-bold">Documents</h1>
          <p className="text-[#667085] text-sm max-w-[550px]">Kelola file DED, DKPS, dan bukti pendukung (Evidence) akreditasi LAMEMBA secara komprehensif.</p>
        </div>
        <button onClick={() => setShowUploadModal(true)} className="flex items-center bg-[#163A5F] text-white py-2.5 px-4 gap-2 rounded-lg font-bold text-[13px] hover:bg-blue-800 transition">
          <FiUpload /> Upload Dokumen
        </button>
      </div>

      {/* Drop Zone */}
      <div className="flex flex-col items-center bg-white py-8 gap-3 rounded-xl border-2 border-dashed border-[#E4E7EC] hover:border-blue-400 transition cursor-pointer">
        <FiUploadCloud className="w-8 h-8 text-[#667085]" />
        <div className="flex flex-col items-center gap-1">
          <span className="text-[#172033] text-sm font-bold">Tarik dan lepas file di sini untuk upload</span>
          <span className="text-[#667085] text-xs">Mendukung format PDF, DOCX, atau XLSX (Maks. 50 MB)</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center bg-white py-4 px-4 rounded-lg border border-[#E4E7EC] gap-3 flex-wrap">
        <div className="flex items-center bg-[#F7F9FC] py-2 px-3 gap-2 rounded-md border border-[#E4E7EC]">
          <FiSearch className="w-4 h-4 text-[#667085]" />
          <input type="text" placeholder="Cari berdasarkan nama..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
            className="bg-transparent border-none outline-none text-[13px] text-[#172033] w-40" />
        </div>
        <FilterDD label="Tipe" value={filterType} onChange={setFilterType} options={['Semua','DED','DKPS','EVIDENCE','SUPPORTING']} />
        <FilterDD label="Status" value={filterStatus} onChange={setFilterStatus} options={['Semua','UPLOADED','PROCESSING','PROCESSED','FAILED']} />
        <FilterDD label="Kriteria" value="Semua" onChange={() => {}} options={['Semua','Kriteria 1','Kriteria 2','Kriteria 3','Kriteria 4','Kriteria 5','Kriteria 6','Kriteria 7']} />
      </div>

      {/* Table + Detail */}
      <div className="flex gap-6">
        <div className={`bg-white rounded-xl border border-[#E4E7EC] overflow-hidden ${selectedDoc ? 'flex-1' : 'w-full'}`}>
          <div className="flex items-center bg-[#F7F9FC] py-2.5 px-4 text-[#667085] text-[11px] font-bold uppercase">
            <span className="w-8 mr-3">[ ]</span><span className="flex-1">Nama Dokumen</span>
            <span className="w-20 text-center">Tipe</span><span className="w-16 text-center">Ukuran</span>
            <span className="w-24 text-center">Tanggal</span><span className="w-24 text-center">Status RAG</span>
            <span className="w-16 text-center">Chunks</span><span className="w-20 text-center">Actions</span>
          </div>
          {filteredDocs.map((doc) => {
            const st = STATUS_CFG[doc.status]; const tp = TYPE_CFG[doc.type]; const sel = selectedDoc?.id === doc.id;
            return (
              <div key={doc.id} onClick={() => setSelectedDoc(doc)}
                className={`flex items-center py-3.5 px-4 border-t border-gray-100 cursor-pointer transition ${sel ? 'bg-[#E8EEF5]' : 'bg-white hover:bg-gray-50'}`}>
                <span className="w-8 mr-3 text-[#667085] text-[13px]">[ ]</span>
                <div className="flex-1 flex flex-col gap-0.5 min-w-0">
                  <span className="text-[#172033] text-[13px] font-bold truncate">{doc.name}</span>
                  <span className="text-[#667085] text-[11px]">{doc.project} &middot; {doc.criteria}</span>
                </div>
                <div className="w-20 flex justify-center"><span className={`${tp.bg} ${tp.text} text-xs font-bold py-0.5 px-2 rounded-md`}>{doc.type}</span></div>
                <span className="w-16 text-center text-[#667085] text-[13px]">{doc.size}</span>
                <span className="w-24 text-center text-[#667085] text-[13px]">{doc.date}</span>
                <div className="w-24 flex justify-center"><span className={`flex items-center gap-1.5 ${st.bg} ${st.text} py-1 px-2 rounded-md text-[11px] font-bold`}>{st.icon} {st.label}</span></div>
                <span className="w-16 text-center text-[#172033] text-[13px]">{doc.chunks || '-'}</span>
                <div className="w-20 flex justify-center gap-1">
                  <button className="p-1 text-gray-400 hover:text-blue-600 rounded transition"><FiEye size={14} /></button>
                  <button className="p-1 text-gray-400 hover:text-amber-600 rounded transition"><FiRefreshCw size={14} /></button>
                  <button className="p-1 text-gray-400 hover:text-red-600 rounded transition"><FiTrash2 size={14} /></button>
                </div>
              </div>
            );
          })}
          <div className="flex justify-between items-center p-4 border-t border-gray-100">
            <span className="text-[#667085] text-[13px]">Menampilkan 1-{filteredDocs.length} dari 48 dokumen</span>
            <div className="flex items-center gap-2">
              <button className="bg-white text-[#172033] text-xs py-1.5 px-3 rounded-md border border-[#E4E7EC]">Sebelumnya</button>
              <button className="bg-white text-[#172033] text-xs py-1.5 px-3 rounded-md border border-[#E4E7EC]">Berikutnya</button>
            </div>
          </div>
        </div>

        {selectedDoc && (
          <div className="bg-white w-[380px] shrink-0 rounded-xl border border-[#E4E7EC] p-6 flex flex-col gap-5 self-start">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1"><span className="text-blue-500 text-[11px] font-bold">Processing Detail</span><span className="text-[#172033] text-base font-bold">{selectedDoc.name}</span></div>
              <button onClick={() => setSelectedDoc(null)} className="text-gray-400 hover:text-gray-600"><FiX size={18} /></button>
            </div>
            <div className="h-px bg-[#E4E7EC]" />
            <div className="flex flex-col gap-4">
              <PStep label="Extract text" time="15:02:11" done />
              <PStep label="Clean & Normalization" time="15:02:24" done />
              <PStep label="Chunking & Tokenization" time="15:02:40" done />
              <PStep label="Generating Vector Embeddings" time="15:02:45" done={selectedDoc.status === 'PROCESSED'} active={selectedDoc.status === 'PROCESSING'} sub={selectedDoc.status === 'PROCESSING' ? 'Sedang menghitung vector embedding...' : undefined} />
              <PStep label="BM25 index generation" done={selectedDoc.status === 'PROCESSED'} />
              <PStep label="Ready for Hybrid RAG" done={selectedDoc.status === 'PROCESSED'} />
            </div>
            <div className="bg-[#F5F8FF] p-3 gap-2 rounded-lg border border-[#D0E0FF] flex flex-col">
              <div className="flex items-center gap-2"><FiFileText className="text-blue-500 w-3.5 h-3.5" /><span className="text-blue-500 text-xs font-bold">Hybrid RAG Integration</span></div>
              <span className="text-[#3B5280] text-[11px]">Setelah indexing selesai, Semantic Retrieval dan BM25 digabung melalui algoritma RRF untuk mengoptimalkan keakuratan pencarian bukti LAMEMBA.</span>
            </div>
            {selectedDoc.status === 'PROCESSING' && <button className="flex justify-center bg-transparent text-red-500 py-2.5 rounded-lg border border-red-500 text-[13px] font-bold hover:bg-red-50 transition">Batalkan Proses</button>}
            {selectedDoc.status === 'FAILED' && (
              <div className="bg-red-50 p-3 rounded-lg border border-[#FECDCA] flex flex-col gap-2">
                <span className="text-[#172033] text-[13px] font-bold">{selectedDoc.name}</span>
                <span className="text-red-500 text-[11px]">Parser gagal membaca format file. Mohon sesuaikan format dengan template resmi.</span>
                <button className="flex items-center bg-white text-[#163A5F] text-xs font-bold py-1.5 px-3 gap-1.5 rounded-md border border-[#FDA29B] w-fit hover:bg-gray-50"><FiRefreshCw size={12} /> Retry Processing</button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-[520px] shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-gray-100"><h2 className="text-xl font-bold text-[#172033]">Upload Dokumen</h2><p className="text-sm text-gray-500 mt-1">Upload file DED, DKPS, atau Evidence pendukung akreditasi.</p></div>
            <div className="p-6 space-y-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Nama Dokumen</label><input type="text" className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-blue-500" placeholder="Contoh: Renstra UPPS 2025" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Tipe Dokumen</label><select className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm bg-white"><option>Evidence</option><option>DED</option><option>DKPS</option><option>Supporting</option></select></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Kriteria Terkait</label><select className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm bg-white"><option>Semua Kriteria</option><option>Kriteria 1</option><option>Kriteria 2</option><option>Kriteria 3</option><option>Kriteria 4</option><option>Kriteria 5</option><option>Kriteria 6</option><option>Kriteria 7</option></select></div>
              </div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">File</label><div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 cursor-pointer"><FiUploadCloud className="mx-auto w-8 h-8 text-gray-400 mb-2" /><p className="text-sm text-gray-600">Klik atau seret file ke sini</p><p className="text-xs text-gray-400 mt-1">PDF, DOCX, XLSX - Maks 50 MB</p></div></div>
            </div>
            <div className="p-6 bg-gray-50 flex justify-end gap-3 border-t border-gray-100">
              <button onClick={() => setShowUploadModal(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md font-medium">Batal</button>
              <button onClick={() => setShowUploadModal(false)} className="px-4 py-2 bg-[#163A5F] text-white rounded-md font-medium hover:bg-blue-800">Upload & Proses</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterDD({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div className="relative">
      <select value={value} onChange={e => onChange(e.target.value)} className="appearance-none bg-white text-[#172033] text-[13px] py-2 pl-3 pr-8 rounded-md border border-[#E4E7EC] cursor-pointer">
        {options.map(o => <option key={o} value={o}>{label}: {o}</option>)}
      </select>
      <FiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
    </div>
  );
}

function PStep({ label, time, done, active, sub }: { label: string; time?: string; done: boolean; active?: boolean; sub?: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`w-4 h-4 mt-0.5 flex items-center justify-center ${done ? 'text-emerald-500' : active ? 'text-blue-500' : 'text-gray-300'}`}>
        {done ? <FiCheckCircle size={16} /> : active ? <FiLoader size={16} className="animate-spin" /> : <div className="w-3 h-3 rounded-full border-2 border-gray-300" />}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <span className={`text-[13px] ${active ? 'font-bold text-[#172033]' : done ? 'text-[#172033]' : 'text-gray-400'}`}>{label}</span>
          {time && <span className="text-[#667085] text-[11px]">{time}</span>}
        </div>
        {sub && <span className="text-blue-500 text-[11px]">{sub}</span>}
      </div>
    </div>
  );
}
