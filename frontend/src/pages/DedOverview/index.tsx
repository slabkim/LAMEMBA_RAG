import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiChevronDown, FiChevronRight, FiFileText, FiCheckCircle, FiClock, FiAlertCircle, FiActivity, FiEdit, FiCpu, FiBookOpen } from 'react-icons/fi';
import { fetchAPI } from '../../lib/api';

const DedOverview = () => {
  const { id: projectId } = useParams();
  const navigate = useNavigate();
  const [sections, setSections] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const loadSections = async () => {
      try {
        const res = await fetchAPI(`/ded/projects/${projectId}/ded`);
        // Pastikan API merespons dengan struktur array yang valid
        const loadedSections = res?.data?.sections || [];
        setSections(loadedSections);
        
        if (loadedSections.length > 0) {
          setExpandedId(loadedSections[0].id);
        }
      } catch (err) {
        console.error("Gagal memuat struktur DED:", err);
        setSections([]);
      } finally {
        setLoading(false);
      }
    };
    if (projectId) loadSections();
  }, [projectId]);

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

  if (loading) {
    return <div className="p-6 text-gray-500">Memuat Struktur DED...</div>;
  }

    const getFlatSections = (nodes: any[]): any[] => {
      if (!nodes || !Array.isArray(nodes)) return [];
      let flat: any[] = [];
      for (const node of nodes) {
        flat.push(node);
        if (node.children && Array.isArray(node.children)) {
          flat = flat.concat(getFlatSections(node.children));
        }
      }
      return flat;
    };
    
    const allFlatSections = getFlatSections(sections);

    return (
      <div className="flex flex-col gap-6 p-6">
        {/* Header */}
        <div className="mb-2 border-b border-[#E4E7EC] pb-4">
          <h1 className="text-2xl font-bold text-[#172033]">Kompilasi DED</h1>
          <p className="text-[#667085]">Kelola narasi Dokumen Evaluasi Diri per kriteria.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-4 mb-2">
          <div className="bg-white p-4 rounded-xl border border-[#E4E7EC] shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
              <FiBookOpen size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#172033]">{allFlatSections.filter(s => s.level === 2).length}</div>
              <div className="text-xs text-[#667085] uppercase font-bold">Total Indikator</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-[#E4E7EC] shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center">
              <FiEdit size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#172033]">{allFlatSections.filter(s => s.level === 2 && s.status === 'DRAFT').length}</div>
              <div className="text-xs text-[#667085] uppercase font-bold">Draft</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-[#E4E7EC] shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
              <FiCheckCircle size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#172033]">{allFlatSections.filter(s => s.level === 2 && s.status === 'APPROVED').length}</div>
              <div className="text-xs text-[#667085] uppercase font-bold">Disetujui</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-[#E4E7EC] shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center">
              <FiClock size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#172033]">{allFlatSections.filter(s => s.level === 2 && s.status === 'IN_REVIEW').length}</div>
              <div className="text-xs text-[#667085] uppercase font-bold">In Review</div>
            </div>
          </div>
        </div>

      {/* Main Content: Kriteria List */}
      <div className="flex flex-col gap-4">
        {sections.map((kriteria) => {
          const isExpanded = expandedId === kriteria.id;
          return (
            <div key={kriteria.id} className="bg-white rounded-xl border border-[#E4E7EC] shadow-sm overflow-hidden">
              <div 
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition"
                onClick={() => setExpandedId(isExpanded ? null : kriteria.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="text-gray-400">
                    {isExpanded ? <FiChevronDown size={20} /> : <FiChevronRight size={20} />}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold bg-[#163A5F] text-white px-2 py-0.5 rounded uppercase font-mono">
                        {kriteria.code}
                      </span>
                      <h3 className="text-[15px] font-bold text-[#172033]">{kriteria.title}</h3>
                    </div>
                  </div>
                </div>
              </div>

              {isExpanded && (
                <div className="p-0 border-t border-[#E4E7EC]">
                  {kriteria.children?.map((dimensi: any) => (
                    <div key={dimensi.id} className="border-b border-[#E4E7EC] last:border-b-0">
                      <div className="bg-[#F7F9FC] px-6 py-3 flex items-center gap-3">
                        <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded uppercase font-mono">{dimensi.code}</span>
                        <span className="text-sm font-bold text-[#172033]">{dimensi.title}</span>
                      </div>
                      <div className="bg-white divide-y divide-[#E4E7EC]">
                        {dimensi.children?.map((indikator: any) => (
                          <div key={indikator.id} className="px-8 py-4 flex justify-between items-center hover:bg-gray-50 transition">
                            <div className="flex flex-col gap-1 max-w-[60%]">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded uppercase font-mono">{indikator.code}</span>
                                <span className="text-sm font-bold text-[#172033]">{indikator.title}</span>
                              </div>
                              <p className="text-xs text-gray-500 line-clamp-2">{indikator.description}</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className={`px-3 py-1 rounded-full text-[11px] font-bold border ${getStatusStyle(indikator.status)}`}>
                                {indikator.status}
                              </div>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  navigate(`/projects/${projectId}/ded/${indikator.id}/edit`);
                                }}
                                className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E4E7EC] text-[#172033] rounded-md text-xs font-bold hover:bg-gray-50 transition shadow-sm"
                              >
                                <FiEdit /> Buka Editor
                              </button>
                            </div>
                          </div>
                        ))}
                        {(!dimensi.children || dimensi.children.length === 0) && (
                          <div className="px-8 py-4 text-sm text-gray-400 italic">Belum ada indikator.</div>
                        )}
                      </div>
                    </div>
                  ))}
                  {(!kriteria.children || kriteria.children.length === 0) && (
                    <div className="p-6 text-center text-sm text-gray-400 italic">Belum ada dimensi di kriteria ini.</div>
                  )}
                </div>
              )}
            </div>
          );
        })}
        {sections.length === 0 && (
          <div className="bg-white p-10 rounded-xl border border-dashed border-[#E4E7EC] text-center text-gray-500">
            Proyek ini belum memiliki struktur DED.
          </div>
        )}
      </div>
    </div>
  );
};

export default DedOverview;
