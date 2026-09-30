import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FiUpload, FiSearch, FiFileText, FiX,
  FiRefreshCw, FiTrash2, FiEye, FiChevronDown, FiCheckCircle,
  FiAlertCircle, FiClock, FiLoader, FiUploadCloud
} from "react-icons/fi";
import { fetchAPI } from "../../lib/api";

const STATUS_CFG: Record<string, { bg: string; text: string; icon: React.ReactNode; label: string }> = {
  UPLOADED:   { bg: 'bg-amber-50',   text: 'text-amber-600',   icon: <FiClock />,                            label: 'Uploaded' },
  PROCESSING: { bg: 'bg-blue-50',    text: 'text-blue-600',    icon: <FiLoader className="animate-spin" />,  label: 'Processing' },
  PROCESSED:  { bg: 'bg-emerald-50', text: 'text-emerald-600', icon: <FiCheckCircle />,                      label: 'Processed' },
  FAILED:     { bg: 'bg-red-50',     text: 'text-red-600',     icon: <FiAlertCircle />,                      label: 'Failed' },
};

const TYPE_CFG: Record<string, { bg: string; text: string }> = {
  DED:        { bg: 'bg-[#EEF4FF]', text: 'text-[#3538CD]' },
  DKPS:       { bg: 'bg-[#F9F5FF]', text: 'text-[#6941C6]' },
  EVIDENCE:   { bg: 'bg-[#F2F4F7]', text: 'text-[#344054]' },
  SUPPORTING: { bg: 'bg-[#FEF3F2]', text: 'text-[#B42318]' },
};

export default function DocumentsProcessing() {
  const { id: projectId } = useParams();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<any | null>(null);
  
  const [documents, setDocuments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [filterType, setFilterType] = useState('Semua');
  const [filterStatus, setFilterStatus] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');

  
  const handleView = (e: React.MouseEvent, doc: any) => {
    e.stopPropagation();
    try {
      const idx = doc.file_path.indexOf('uploads');
      if (idx !== -1) {
        const relPath = doc.file_path.substring(idx).replace(/\\/g, '/');
        window.open(`http://localhost:3000/${relPath}`, '_blank');
      } else {
        alert("Path file tidak valid.");
      }
    } catch(err) {
      alert("Tidak dapat membuka file.");
    }
  };

  const handleProcess = async (e: React.MouseEvent, doc: any) => {
    e.stopPropagation();
    try {
      await fetchAPI(`/documents/${doc.id}/process`, { method: 'POST' });
      alert("Dokumen ditambahkan ke antrean pemrosesan AI (Processing).");
      loadDocuments();
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleDelete = async (e: React.MouseEvent, doc: any) => {
    e.stopPropagation();
    if (!window.confirm(`Apakah Anda yakin ingin menghapus ${doc.name}?`)) return;
    try {
      await fetchAPI(`/documents/${doc.id}`, { method: 'DELETE' });
      loadDocuments();
      if (selectedDoc?.id === doc.id) setSelectedDoc(null);
    } catch (err: any) {
      alert(err.message);
    }
  };

  const loadDocuments = async () => {
    try {
      setLoading(true);
      const res = await fetchAPI(`/documents?project_id=${projectId}`);
      setDocuments(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (projectId) loadDocuments();
  }, [projectId]);

  const filteredDocs = documents.filter(doc => {
    if (filterType !== 'Semua' && doc.document_type !== filterType) return false;
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
      <div 
        onClick={() => setShowUploadModal(true)}
        className="flex flex-col items-center bg-white py-8 gap-3 rounded-xl border-2 border-dashed border-[#E4E7EC] hover:border-blue-400 transition cursor-pointer"
      >
        <FiUploadCloud className="w-8 h-8 text-[#667085]" />
        <div className="flex flex-col items-center gap-1">
          <span className="text-[#172033] text-sm font-bold">Tarik dan lepas file di sini untuk upload</span>
          <span className="text-[#667085] text-xs">Mendukung format PDF, DOCX, atau XLSX (Maks. 50 MB)</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center bg-white py-4 px-4 rounded-lg border border-[#E4E7EC] gap-3 flex-wrap shadow-sm">
        <div className="flex items-center bg-[#F7F9FC] py-2 px-3 gap-2 rounded-md border border-[#E4E7EC]">
          <FiSearch className="w-4 h-4 text-[#667085]" />
          <input type="text" placeholder="Cari berdasarkan nama..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
            className="bg-transparent border-none outline-none text-[13px] text-[#172033] w-40" />
        </div>
        <FilterDD label="Tipe" value={filterType} onChange={setFilterType} options={['Semua','DED','DKPS','EVIDENCE','SUPPORTING']} />
        <FilterDD label="Status" value={filterStatus} onChange={setFilterStatus} options={['Semua','UPLOADED','PROCESSING','PROCESSED','FAILED']} />
      </div>

      {/* Table + Detail */}
      <div className="flex gap-6">
        <div className={`bg-white rounded-xl border border-[#E4E7EC] overflow-hidden shadow-sm ${selectedDoc ? 'flex-1' : 'w-full'}`}>
          <div className="flex items-center bg-[#F7F9FC] py-2.5 px-4 text-[#667085] text-[11px] font-bold uppercase">
            <span className="w-8 mr-3">[ ]</span><span className="flex-1">Nama Dokumen</span>
            <span className="w-20 text-center">Tipe</span><span className="w-20 text-center">Ukuran</span>
            <span className="w-24 text-center">Tanggal</span>
            <span className="w-24 text-center">Status RAG</span><span className="w-16 text-center">Chunks</span>
            <span className="w-20 text-center">Actions</span>
          </div>
          
          {loading ? (
             <div className="p-8 text-center text-gray-500 flex flex-col items-center">
                <FiLoader className="animate-spin text-2xl mb-2 text-blue-500" />
                Memuat dokumen...
             </div>
          ) : filteredDocs.length === 0 ? (
             <div className="p-8 text-center text-gray-500">
                Belum ada dokumen yang di-upload.
             </div>
          ) : filteredDocs.map((doc) => {
            const st = STATUS_CFG[doc.status] || STATUS_CFG.UPLOADED; 
            const tp = TYPE_CFG[doc.document_type] || TYPE_CFG.SUPPORTING; 
            const sel = selectedDoc?.id === doc.id;
            
            // Format size
            const sizeInMB = (Number(doc.file_size || 0) / (1024 * 1024)).toFixed(2);
            
            return (
              <div key={doc.id} onClick={() => setSelectedDoc(doc)}
                className={`flex items-center py-3.5 px-4 border-t border-gray-100 cursor-pointer transition ${sel ? 'bg-[#E8EEF5]' : 'bg-white hover:bg-gray-50'}`}>
                <span className="w-8 mr-3 text-[#667085] text-[13px]">[ ]</span>
                <div className="flex-1 flex flex-col gap-0.5 min-w-0 pr-4">
                  <span className="text-[#172033] text-[13px] font-bold truncate">{doc.name}</span>
                  <span className="text-[#667085] text-[11px] truncate">{doc.file_path}</span>
                </div>
                <div className="w-20 flex justify-center"><span className={`${tp.bg} ${tp.text} text-xs font-bold py-0.5 px-2 rounded-md`}>{doc.document_type}</span></div>
                <span className="w-20 text-center text-[#667085] text-[13px]">{sizeInMB} MB</span>
                <span className="w-24 text-center text-[#667085] text-[13px]">{new Date(doc.created_at).toLocaleDateString('id-ID')}</span>
                <div className="w-24 flex justify-center"><span className={`flex items-center gap-1.5 ${st.bg} ${st.text} py-1 px-2 rounded-md text-[11px] font-bold`}>{st.icon} {st.label}</span></div>
                <span className="w-16 text-center text-[#172033] text-[13px]">{doc.chunk_count || '-'}</span>
<div className="w-20 flex justify-center gap-1">
                  <button onClick={(e) => handleView(e, doc)} className="p-1 text-gray-400 hover:text-blue-600 rounded transition" title="Lihat Dokumen"><FiEye size={14} /></button>
                  <button onClick={(e) => handleProcess(e, doc)} className="p-1 text-gray-400 hover:text-amber-600 rounded transition" title="Jalankan Proses RAG"><FiRefreshCw size={14} /></button>
                  <button onClick={(e) => handleDelete(e, doc)} className="p-1 text-gray-400 hover:text-red-600 rounded transition" title="Hapus Dokumen"><FiTrash2 size={14} /></button>
                </div>
              </div>
            );
          })}
        </div>

        {selectedDoc && (
          <div className="bg-white w-[380px] shrink-0 rounded-xl border border-[#E4E7EC] p-6 flex flex-col gap-5 self-start shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <span className="text-blue-500 text-[11px] font-bold">Processing Detail</span>
                <span className="text-[#172033] text-base font-bold break-all">{selectedDoc.name}</span>
              </div>
              <button onClick={() => setSelectedDoc(null)} className="text-gray-400 hover:text-gray-600"><FiX size={18} /></button>
            </div>
            <div className="h-px bg-[#E4E7EC]" />
            <div className="flex flex-col gap-4">
              <PStep label="Upload selesai" done />
              <PStep label="Extract text" done={selectedDoc.status === 'PROCESSED'} active={selectedDoc.status === 'PROCESSING'} />
              <PStep label="Chunking & Tokenization" done={selectedDoc.status === 'PROCESSED'} />
              <PStep label="Generating Vector Embeddings" done={selectedDoc.status === 'PROCESSED'} />
              <PStep label="Ready for Hybrid RAG" done={selectedDoc.status === 'PROCESSED'} />
            </div>
            
            {selectedDoc.status === 'FAILED' && (
              <div className="bg-red-50 p-3 rounded-lg border border-[#FECDCA] flex flex-col gap-2">
                <span className="text-red-500 text-[11px]">{selectedDoc.error_message || 'Parser gagal membaca format file.'}</span>
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
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-[#172033]">Upload Dokumen</h2>
              <p className="text-sm text-gray-500 mt-1">Upload file DED, DKPS, atau Evidence pendukung akreditasi.</p>
            </div>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              formData.append('project_id', projectId || '');
              
              const file = formData.get('file') as File;
              if (!file || file.size === 0) {
                alert('Pilih file terlebih dahulu');
                return;
              }

              try {
                await fetchAPI('/documents/upload', {
                  method: 'POST',
                  body: formData
                });
                setShowUploadModal(false);
                loadDocuments();
                alert('Dokumen berhasil diunggah!');
              } catch (err: any) {
                alert(err.message);
              }
            }}>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tipe Dokumen</label>
                  <select name="document_type" className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm bg-white" required>
                    <option value="EVIDENCE">Evidence</option>
                    <option value="DED">DED (Panduan/Format)</option>
                    <option value="DKPS">DKPS (Data Kuantitatif)</option>
                    <option value="SUPPORTING">Supporting</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">File Upload</label>
                  <input type="file" name="file" accept=".pdf,.doc,.docx,.xls,.xlsx" required className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 border border-gray-300 rounded-md p-2" />
                  <p className="text-xs text-gray-400 mt-2">Mendukung PDF, DOCX, XLSX (Maksimal 50 MB)</p>
                </div>
              </div>
              <div className="p-6 bg-gray-50 flex justify-end gap-3 border-t border-gray-100">
                <button type="button" onClick={() => setShowUploadModal(false)} className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50">Batal</button>
                <button type="submit" className="px-4 py-2 bg-[#163A5F] text-white rounded-md font-medium hover:bg-blue-800">Upload File</button>
              </div>
            </form>
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

function PStep({ label, done, active, sub }: { label: string; done: boolean; active?: boolean; sub?: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`w-4 h-4 mt-0.5 flex items-center justify-center ${done ? 'text-emerald-500' : active ? 'text-blue-500' : 'text-gray-300'}`}>
        {done ? <FiCheckCircle size={16} /> : active ? <FiLoader size={16} className="animate-spin" /> : <div className="w-3 h-3 rounded-full border-2 border-gray-300" />}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <span className={`text-[13px] ${active ? 'font-bold text-[#172033]' : done ? 'text-[#172033]' : 'text-gray-400'}`}>{label}</span>
        </div>
        {sub && <span className="text-blue-500 text-[11px]">{sub}</span>}
      </div>
    </div>
  );
}
