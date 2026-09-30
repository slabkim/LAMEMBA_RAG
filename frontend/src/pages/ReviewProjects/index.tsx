import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiFolder, FiCheckCircle } from 'react-icons/fi';
import { fetchAPI } from '../../lib/api';

export default function ReviewProjects() {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    fetchAPI('/projects').then(res => setProjects(res.data)).catch(console.error);
  }, []);

  return (
    <div className="p-8 w-full max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-[#163A5F] mb-6">Proyek untuk Direview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p: any) => (
          <div key={p.id} className="bg-white p-5 border border-[#E4E7EC] rounded-xl shadow-sm hover:border-blue-300 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg"><FiFolder size={20} /></div>
              <h3 className="font-bold text-gray-900">{p.name}</h3>
            </div>
            <p className="text-sm text-gray-500 mb-5 line-clamp-2">{p.description || 'Tidak ada deskripsi'}</p>
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-700 rounded-full">IN REVIEW</span>
              <Link to={`/review/projects/${p.id}/approve`} className="text-sm font-semibold text-blue-600 hover:text-blue-800">Buka Penilaian &rarr;</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
