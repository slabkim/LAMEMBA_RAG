import fs from 'fs';

const file = 'frontend/src/pages/ProjectsList/index.tsx';
let code = fs.readFileSync(file, 'utf-8');

// Add edit modal states
code = code.replace(
  /const \[name, setName\] = useState\(''\);/,
  `const [name, setName] = useState('');\n  const [editMode, setEditMode] = useState(false);\n  const [editingId, setEditingId] = useState<string | null>(null);`
);

// Add icons import
code = code.replace(
  /import { FiPlus, FiFilter, FiSearch, FiFolder } from "react-icons\/fi";/,
  `import { FiPlus, FiFilter, FiSearch, FiFolder, FiEdit2, FiTrash2 } from "react-icons/fi";`
);

// Modify handleCreate to handleEdit as well
code = code.replace(
  /const handleCreate = async \(\) => {[\s\S]*?};/,
  `const handleCreate = async () => {
    try {
      if (editMode && editingId) {
        await fetchAPI(\`/projects/\${editingId}\`, {
          method: 'PUT',
          body: JSON.stringify({ name, program_studi, jenjang })
        });
      } else {
        await fetchAPI('/projects', {
          method: 'POST',
          body: JSON.stringify({ name, program_studi, jenjang, instrument_version_id: selectedVersion })
        });
      }
      setShowModal(false);
      setEditMode(false);
      setEditingId(null);
      setName('');
      setProgramStudi('');
      setJenjang('S1');
      loadProjects();
    } catch (err: any) {
      alert(err.message);
    }
  };

  const openEdit = (e: any, project: any) => {
    e.preventDefault();
    e.stopPropagation();
    setEditMode(true);
    setEditingId(project.id);
    setName(project.name);
    setProgramStudi(project.program_studi);
    setJenjang(project.jenjang);
    setShowModal(true);
  };

  const handleDelete = async (e: any, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm('Yakin ingin menghapus proyek ini?')) {
      try {
        await fetchAPI(\`/projects/\${id}\`, { method: 'DELETE' });
        loadProjects();
      } catch (err: any) {
        alert(err.message);
      }
    }
  };`
);

// Add Edit and Delete buttons on the card
code = code.replace(
  /<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">/,
  `<div className="flex gap-2 items-center">
    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
      <FiFolder size={20} />
    </div>
    <button onClick={(e) => openEdit(e, project)} className="p-1.5 text-gray-400 hover:text-blue-600 transition"><FiEdit2 size={16}/></button>
    <button onClick={(e) => handleDelete(e, project.id)} className="p-1.5 text-gray-400 hover:text-red-600 transition"><FiTrash2 size={16}/></button>
  </div>`
);

// Reset modal on cancel and open new modal
code = code.replace(
  /onClick={\(\) => setShowModal\(true\)}/,
  `onClick={() => { setEditMode(false); setEditingId(null); setName(''); setProgramStudi(''); setJenjang('S1'); setShowModal(true); }}`
);

// Dynamic Modal Title
code = code.replace(
  /<h2 className="text-xl font-bold text-\[#172033\]">Buat Proyek Baru<\/h2>/,
  `<h2 className="text-xl font-bold text-[#172033]">{editMode ? 'Edit Proyek' : 'Buat Proyek Baru'}</h2>`
);

// Dynamic Button Text
code = code.replace(
  /<button[\s\S]*?Buat Proyek\n\s*<\/button>/,
  `<button onClick={handleCreate} disabled={!name || !program_studi} className="px-4 py-2 bg-[#163A5F] text-white rounded-md font-medium hover:bg-blue-800 transition disabled:opacity-50">
    {editMode ? 'Simpan Perubahan' : 'Buat Proyek'}
  </button>`
);

// Hide Template select on Edit
code = code.replace(
  /<label className="block text-sm font-medium text-gray-700 mb-1">Template Instrumen<\/label>/,
  `{!editMode && (<><label className="block text-sm font-medium text-gray-700 mb-1">Template Instrumen</label>`
);
code = code.replace(
  /<p className="text-xs text-gray-500 mt-1">Struktur instrumen ini akan disalin ke proyek Anda dan bisa disesuaikan nanti.<\/p>\n\s*<\/div>/,
  `<p className="text-xs text-gray-500 mt-1">Struktur instrumen ini akan disalin ke proyek Anda dan bisa disesuaikan nanti.</p></>)}\n              </div>`
);

fs.writeFileSync(file, code);
