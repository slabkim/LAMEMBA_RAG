import React, { useState, useEffect } from 'react';
import { FiMenu, FiPlus, FiTrash2, FiSave, FiUploadCloud } from 'react-icons/fi';
import { fetchAPI } from '../../../lib/api';

const TreeNode = ({ node, level = 0 }: { node: any, level?: number }) => {
  const [req, setReq] = useState(node.is_required_unggul || false);

  const getBadgeColor = (level: number) => {
    switch(level) {
      case 0: return 'bg-[#163A5F] bg-opacity-10 text-[#163A5F]';
      case 1: return 'bg-blue-100 text-blue-800';
      case 2: return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getLabel = (level: number) => {
    switch(level) {
      case 0: return 'KRITERIA';
      case 1: return 'DIMENSI';
      case 2: return 'INDIKATOR';
      default: return 'NODE';
    }
  };

  return (
    <div className="mb-2">
      <div 
        className="flex items-center bg-white border border-gray-200 rounded p-3 hover:shadow-sm transition"
        style={{ marginLeft: `${level * 24}px` }}
      >
        <FiMenu className="text-gray-400 mr-3 cursor-grab" />
        <div className="flex-1 flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${getBadgeColor(node.level)}`}>
              {node.code}
            </span>
            <span className="font-bold text-[#172033] text-sm">{node.name}</span>
          </div>
          {node.description && <span className="text-xs text-gray-500 line-clamp-1">{node.description}</span>}
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-red-500 transition"><FiTrash2 /></button>
        </div>
      </div>
      {node.children && node.children.length > 0 && (
        <div className="mt-2">
          {node.children.map((child: any) => (
            <TreeNode key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const DedStructure = () => {
  const [versions, setVersions] = useState<any[]>([]);
  const [activeVersionId, setActiveVersionId] = useState<string | null>(null);
  const [treeData, setTreeData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [importing, setImporting] = useState(false);

  const loadInstruments = async () => {
    try {
      setLoading(true);
      const res = await fetchAPI('/instruments');
      if (res.data && res.data.length > 0) {
        // Flatten all versions from all standards for now
        const allVersions = res.data.flatMap((std: any) => std.versions);
        setVersions(allVersions);
        if (allVersions.length > 0 && !activeVersionId) {
          setActiveVersionId(allVersions[0].id);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loadTree = async (versionId: string) => {
    try {
      const res = await fetchAPI(`/instruments/${versionId}/tree`);
      setTreeData(res.data);
    } catch(err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadInstruments();
  }, []);

  useEffect(() => {
    if (activeVersionId) {
      loadTree(activeVersionId);
    }
  }, [activeVersionId]);

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setImporting(true);
      const text = await file.text();
      const payload = JSON.parse(text);
      
      await fetchAPI('/instruments/import', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      
      alert('Import berhasil!');
      loadInstruments(); // Reload to get the new version
    } catch (err: any) {
      alert(`Import gagal: ${err.message}`);
    } finally {
      setImporting(false);
      // Reset input
      e.target.value = '';
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#163A5F]">Manajemen Instrumen (SYS-06)</h1>
          <p className="text-sm text-gray-500 mt-1">Impor dan atur hierarki Kriteria LAMEMBA.</p>
        </div>
        <div className="flex gap-2">
          <label className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded shadow-sm hover:bg-gray-50 transition cursor-pointer">
            <FiUploadCloud /> {importing ? 'Mengimpor...' : 'Import JSON'}
            <input type="file" accept=".json" className="hidden" onChange={handleImport} disabled={importing} />
          </label>
        </div>
      </div>

      {versions.length > 0 ? (
        <div className="mb-4">
          <label className="text-sm font-bold mr-3">Pilih Versi Instrumen:</label>
          <select 
            className="border border-gray-300 rounded p-2 text-sm bg-white"
            value={activeVersionId || ''}
            onChange={(e) => setActiveVersionId(e.target.value)}
          >
            {versions.map(v => (
              <option key={v.id} value={v.id}>{v.version_label} ({v.status})</option>
            ))}
          </select>
        </div>
      ) : (
        <div className="p-4 bg-amber-50 text-amber-800 text-sm rounded mb-4">
          Belum ada instrumen yang terdaftar. Silakan gunakan tombol <strong>Import JSON</strong>.
        </div>
      )}

      <div className="bg-gray-50 rounded border border-gray-200 p-4 min-h-[400px]">
        {loading ? (
          <div className="text-center text-gray-500 mt-10">Memuat hierarki...</div>
        ) : treeData && treeData.criteria ? (
          treeData.criteria.map((node: any) => (
            <TreeNode key={node.id} node={node} />
          ))
        ) : (
          <div className="text-center text-gray-500 mt-10">Tidak ada data hierarki.</div>
        )}
      </div>
    </div>
  );
};

export default DedStructure;
