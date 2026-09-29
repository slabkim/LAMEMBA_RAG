import React, { useState } from 'react';
import { FiMenu, FiPlus, FiTrash2, FiSave } from 'react-icons/fi';

const structureData = [
  { id: '1', title: 'Halaman Sampul', type: 'COVER', isRequired: true, children: [] },
  { id: '2', title: 'Kata Pengantar', type: 'INTRO', isRequired: false, children: [] },
  { id: '3', title: 'Kriteria 1: Visi, Misi, Tujuan, dan Strategi', type: 'CRITERION', isRequired: true, children: [
      { id: '3-1', title: 'Latar Belakang', type: 'CRITERION', isRequired: true, children: [] },
      { id: '3-2', title: 'Kebijakan', type: 'CRITERION', isRequired: true, children: [] }
    ]
  },
  { id: '4', title: 'Kriteria 2: Tata Pamong', type: 'CRITERION', isRequired: true, children: [] },
  { id: '5', title: 'Lampiran', type: 'APPENDIX', isRequired: false, children: [] }
];

const TreeNode = ({ node, level = 0 }: { node: any, level?: number }) => {
  const [req, setReq] = useState(node.isRequired);

  const getBadgeColor = (type: string) => {
    switch(type) {
      case 'COVER': return 'bg-gray-100 text-gray-800';
      case 'INTRO': return 'bg-blue-100 text-blue-800';
      case 'CRITERION': return 'bg-[#163A5F] bg-opacity-10 text-[#163A5F]';
      case 'APPENDIX': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="mb-2">
      <div 
        className="flex items-center bg-white border border-gray-200 rounded p-3 hover:shadow-sm transition"
        style={{ marginLeft: `${level * 24}px` }}
      >
        <FiMenu className="text-gray-400 mr-3 cursor-grab" />
        <div className="flex-1 flex items-center gap-3">
          <span className="font-medium text-[#172033]">{node.title}</span>
          <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${getBadgeColor(node.type)}`}>
            {node.type}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <label className="flex items-center cursor-pointer gap-2">
            <span className="text-xs text-gray-500">Wajib</span>
            <div className="relative">
              <input type="checkbox" checked={req} onChange={() => setReq(!req)} className="sr-only peer" />
              <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500"></div>
            </div>
          </label>
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
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#163A5F]">Struktur Template DED</h1>
          <p className="text-sm text-gray-500 mt-1">Atur hierarki dan komponen dokumen DED LAMEMBA.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded shadow-sm hover:bg-gray-50 transition">
            <FiPlus /> Tambah Bagian
          </button>
          <button className="flex items-center gap-2 bg-[#163A5F] text-white px-4 py-2 rounded shadow hover:bg-blue-800 transition">
            <FiSave /> Simpan
          </button>
        </div>
      </div>

      <div className="bg-gray-50 rounded border border-gray-200 p-4">
        {structureData.map(node => (
          <TreeNode key={node.id} node={node} />
        ))}
      </div>
    </div>
  );
};

export default DedStructure;
