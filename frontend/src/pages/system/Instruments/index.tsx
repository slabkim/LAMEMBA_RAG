import React, { useState, useEffect } from 'react';
import { FiFolder, FiFileText, FiPlus, FiChevronRight, FiChevronDown, FiSettings, FiEdit2 } from 'react-icons/fi';
import { fetchAPI } from '../../../lib/api';

type Criterion = {
  id: string;
  code: string;
  name: string;
  type: string; // e.g. CRITERION, DIMENSION, INDICATOR
  children?: Criterion[];
};

const TreeNode = ({ node, level = 0 }: { node: Criterion; level?: number }) => {
  const [expanded, setExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col">
      <div 
        className={`flex items-center py-2 px-3 hover:bg-gray-50 border-b border-gray-100 group cursor-pointer ${level === 0 ? 'bg-gray-50/50 font-medium' : ''}`}
        style={{ paddingLeft: `${level * 24 + 12}px` }}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="w-5 flex-shrink-0 text-gray-400">
          {hasChildren ? (
            expanded ? <FiChevronDown /> : <FiChevronRight />
          ) : (
            <span className="w-4" />
          )}
        </div>
        <div className="flex-shrink-0 mr-3 text-blue-500">
          {level === 0 ? <FiFolder /> : <FiFileText className={level > 1 ? "text-gray-400" : ""} />}
        </div>
        <div className="flex-1 flex items-center gap-3">
          <span className="text-sm text-gray-900">
            <span className="font-semibold text-[#163A5F] mr-2">{node.code}</span>
            {node.name}
          </span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
            node.type === 'CRITERION' ? 'bg-blue-100 text-blue-700' : 
            node.type === 'DIMENSION' ? 'bg-indigo-100 text-indigo-700' : 
            'bg-gray-100 text-gray-600'
          }`}>
            {node.type}
          </span>
        </div>
        <div className="hidden group-hover:flex gap-2">
          <button className="p-1.5 text-gray-400 hover:text-blue-600 rounded"><FiEdit2 size={14} /></button>
          <button className="p-1.5 text-gray-400 hover:text-blue-600 rounded"><FiPlus size={14} /></button>
        </div>
      </div>
      
      {expanded && hasChildren && (
        <div className="flex flex-col">
          {node.children!.map(child => (
            <TreeNode key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function Instruments() {
  const [data, setData] = useState<Criterion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAPI('/instruments')
      .then(res => setData(res.data))
      .catch(err => console.error("Failed to fetch instruments:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-8 max-w-6xl mx-auto w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#163A5F] mb-1">Manajemen Instrumen DED</h1>
          <p className="text-sm text-gray-500">Kelola hierarki Kriteria, Dimensi, dan Indikator LAMEMBA.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
          <FiPlus /> Tambah Kriteria
        </button>
      </div>

      <div className="bg-white border border-[#E4E7EC] rounded-xl shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-[#E4E7EC] bg-gray-50/50 flex justify-between items-center">
          <h2 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <FiSettings /> Hierarki Instrumen Standar
          </h2>
        </div>
        <div className="flex flex-col">
          {loading ? (
            <div className="p-8 text-center text-gray-500 text-sm">Memuat instrumen...</div>
          ) : data.length === 0 ? (
            <div className="p-8 text-center text-gray-500 text-sm">Belum ada data instrumen. (Jalankan seeder)</div>
          ) : (
            data.map(criterion => (
              <TreeNode key={criterion.id} node={criterion} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
