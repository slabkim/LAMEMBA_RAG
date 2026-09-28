import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiUser, FiRotateCcw, FiCheck, FiX, FiCpu } from 'react-icons/fi';

const VersionHistory = () => {
  const navigate = useNavigate();
  const [selectedV1, setSelectedV1] = useState(5);
  const [selectedV2, setSelectedV2] = useState(6);

  const versions = [
    { id: 6, v: 'v1.2', status: 'APPROVED', author: 'Dr. Budi (Reviewer)', time: '2 hari yang lalu', desc: 'Disetujui tanpa catatan.' },
    { id: 5, v: 'v1.1', status: 'SUBMITTED', author: 'Siti Aminah', time: '3 hari yang lalu', desc: 'Revisi berdasarkan catatan reviewer.' },
    { id: 4, v: 'v1.0', status: 'REVISION_REQUESTED', author: 'Dr. Budi (Reviewer)', time: '4 hari yang lalu', desc: 'Tambahkan bukti survei pemahaman.' },
    { id: 3, v: 'v1.0', status: 'SUBMITTED', author: 'Siti Aminah', time: '5 hari yang lalu', desc: 'Submit untuk review internal.' },
    { id: 2, v: 'Draft v2', status: 'DRAFT', author: 'Siti Aminah', time: '5 hari yang lalu', desc: 'Edit manual penyesuaian tata bahasa.' },
    { id: 1, v: 'Draft v1', status: 'AI_GENERATED', author: 'System (AI)', time: '6 hari yang lalu', desc: 'Generasi awal oleh AI Assistant.' }
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'AI_GENERATED': return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-100 text-indigo-700 border border-indigo-200">AI GENERATED</span>;
      case 'DRAFT': return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-600 border border-amber-200">DRAFT</span>;
      case 'SUBMITTED': return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-200">SUBMITTED</span>;
      case 'REVISION_REQUESTED': return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-50 text-red-600 border border-red-200">REVISION REQ</span>;
      case 'APPROVED': return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200">APPROVED</span>;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-[#E4E7EC] px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate('/editor')} className="p-2 text-[#667085] hover:bg-gray-100 rounded-full">
          <FiArrowLeft />
        </button>
        <div>
          <div className="text-sm text-[#667085] mb-1">Riwayat Versi • Indikator 1.1.1</div>
          <h1 className="text-xl font-bold text-[#172033]">Kejelasan Visi dan Realistik</h1>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel: Timeline */}
        <div className="w-[30%] bg-white border-r border-[#E4E7EC] overflow-y-auto">
          <div className="p-4 border-b border-[#E4E7EC] bg-[#F7F9FC]">
            <h2 className="font-semibold text-[#172033]">Version Timeline</h2>
            <p className="text-xs text-[#667085]">Pilih 2 versi untuk dibandingkan</p>
          </div>
          
          <div className="p-4 relative">
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-6">
              {versions.map((ver) => {
                const isSelected = selectedV1 === ver.id || selectedV2 === ver.id;
                return (
                  <div 
                    key={ver.id} 
                    className={`relative pl-8 cursor-pointer group`}
                    onClick={() => {
                      if (selectedV1 === ver.id || selectedV2 === ver.id) return; // Prevent unselecting for simple demo
                      setSelectedV1(selectedV2);
                      setSelectedV2(ver.id);
                    }}
                  >
                    <div className={`absolute left-[-2px] top-1 w-3.5 h-3.5 rounded-full border-2 bg-white z-10 ${isSelected ? 'border-[#163A5F]' : 'border-gray-300 group-hover:border-gray-400'}`}></div>
                    
                    <div className={`p-3 rounded-lg border ${isSelected ? 'border-[#163A5F] bg-blue-50/30' : 'border-[#E4E7EC] hover:border-gray-300 bg-white'} shadow-sm transition-colors`}>
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-[#172033] text-sm">{ver.v}</span>
                        {getStatusBadge(ver.status)}
                      </div>
                      <p className="text-xs text-[#172033] mb-3">{ver.desc}</p>
                      <div className="flex justify-between items-center text-[10px] text-[#667085]">
                        <span className="flex items-center gap-1"><FiUser /> {ver.author}</span>
                        <span className="flex items-center gap-1"><FiClock /> {ver.time}</span>
                      </div>
                      
                      <div className="mt-3 pt-2 border-t border-gray-100 flex justify-end">
                        <button className="text-[10px] font-medium flex items-center gap-1 text-gray-500 hover:text-[#163A5F]">
                          <FiRotateCcw /> Restore (Admin)
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Panel: Diff Compare */}
        <div className="w-[70%] bg-white flex flex-col">
          <div className="flex bg-[#F7F9FC] border-b border-[#E4E7EC]">
            <div className="flex-1 p-4 border-r border-[#E4E7EC]">
              <div className="text-xs text-[#667085] mb-1">Versi Terdahulu</div>
              <div className="font-bold text-[#172033] flex items-center gap-2">
                v1.1 <span className="font-normal text-sm text-[#667085]">— Siti Aminah</span>
              </div>
            </div>
            <div className="flex-1 p-4">
              <div className="text-xs text-[#667085] mb-1">Versi Terbaru</div>
              <div className="font-bold text-[#172033] flex items-center gap-2">
                v1.2 <span className="font-normal text-sm text-[#667085]">— Dr. Budi</span>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 font-mono text-sm leading-relaxed">
            <div className="mb-4">
              <span className="text-gray-500">Visi Program Studi Manajemen dirumuskan dengan sangat jelas dan sangat realistik. Visi ini telah mengantisipasi perubahan lingkungan eksternal dan internal yang tertuang dalam Renstra 2022-2026.</span>
            </div>
            
            <div className="mb-4">
              <span className="text-gray-500">Berdasarkan Surat Keputusan Rektor No. 123/2022, visi program studi sejalan dengan visi universitas dalam mengembangkan ilmu pengetahuan yang berbasis kewirausahaan dan teknologi digital. Pelibatan pemangku kepentingan dalam perumusan visi ini sangat nyata, dibuktikan dengan notulensi rapat kurikulum pada tanggal 14 Agustus 2022 yang dihadiri oleh alumni, industri, dan pakar pendidikan.</span>
            </div>

            <div className="mb-4">
              <span className="text-gray-500">Mekanisme sosialisasi visi juga telah dilakukan dengan baik dan terstruktur, menggunakan berbagai media seperti website, brosur, banner di area kampus, dan penyampaian langsung saat orientasi mahasiswa baru (PKKMB). </span>
              
              <span className="bg-red-100 text-red-800 line-through px-1 rounded mx-1">Tingkat pemahaman sivitas akademika dirasa sudah cukup baik berdasarkan laporan evaluasi akhir tahun.</span>
              
              <span className="bg-green-100 text-green-800 px-1 rounded mx-1 font-semibold">Tingkat pemahaman sivitas akademika terhadap visi sangat tinggi berdasarkan hasil survei internal tahun 2023 yang menunjukkan angka pemahaman mencapai 89% (Sangat Baik). Laporan hasil survei terlampir pada dokumen pendukung.</span>
            </div>
          </div>
          
          <div className="p-4 border-t border-[#E4E7EC] bg-[#F7F9FC] flex justify-between items-center text-xs text-[#667085]">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><div className="w-3 h-3 bg-red-100 rounded border border-red-200"></div> Dihapus</span>
              <span className="flex items-center gap-1"><div className="w-3 h-3 bg-green-100 rounded border border-green-200"></div> Ditambahkan</span>
            </div>
            <div>
              Menampilkan perbandingan versi 1.1 dan 1.2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VersionHistory;
