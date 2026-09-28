import React, { useState } from 'react';
import { FiSearch, FiFilter, FiCheckCircle, FiClock, FiAlertCircle, FiSend, FiEye, FiEdit3, FiMessageSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const reviewData = [
  { id: 1, kriteria: 'K1', dimensi: '1.1', indikator: '1.1.a', submitted: '2023-10-25', reviewer: 'Dr. Ahmad Subagyo', status: 'APPROVED', comment: 'Draft sudah sangat baik dan sesuai dengan bukti pendukung.' },
  { id: 2, kriteria: 'K2', dimensi: '2.1', indikator: '2.1.b', submitted: '2023-10-26', reviewer: 'Prof. Budi Santoso', status: 'REVISION_REQUESTED', comment: 'Tolong tambahkan referensi pada paragraf kedua terkait rasio dosen.' },
  { id: 3, kriteria: 'K3', dimensi: '3.2', indikator: '3.2.a', submitted: '2023-10-27', reviewer: 'Dr. Citra Lestari', status: 'IN_REVIEW', comment: '' },
  { id: 4, kriteria: 'K4', dimensi: '4.1', indikator: '4.1.c', submitted: '2023-10-28', reviewer: '-', status: 'SUBMITTED', comment: '' },
  { id: 5, kriteria: 'K5', dimensi: '5.1', indikator: '5.1.a', submitted: '2023-10-20', reviewer: 'Dr. Ahmad Subagyo', status: 'APPROVED', comment: 'Sesuai.' },
  { id: 6, kriteria: 'K6', dimensi: '6.2', indikator: '6.2.b', submitted: '2023-10-21', reviewer: 'Prof. Budi Santoso', status: 'REVISION_REQUESTED', comment: 'Data pendanaan riset tidak sesuai dengan lampiran, mohon dicek.' },
  { id: 7, kriteria: 'K7', dimensi: '7.1', indikator: '7.1.a', submitted: '2023-10-29', reviewer: '-', status: 'SUBMITTED', comment: '' },
  { id: 8, kriteria: 'K8', dimensi: '8.1', indikator: '8.1.a', submitted: '2023-10-24', reviewer: 'Dr. Citra Lestari', status: 'IN_REVIEW', comment: '' }
];

const StatusBadge = ({ status }: { status: string }) => {
  switch (status) {
    case 'SUBMITTED':
      return <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200">SUBMITTED</span>;
    case 'IN_REVIEW':
      return <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full border border-purple-200">IN REVIEW</span>;
    case 'APPROVED':
      return <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200">APPROVED</span>;
    case 'REVISION_REQUESTED':
      return <span className="px-2 py-1 bg-red-50 text-red-700 text-xs font-medium rounded-full border border-red-200">REVISION REQUESTED</span>;
    default:
      return <span>{status}</span>;
  }
};

export default function ReviewStatus() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Semua');
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const filteredData = reviewData.filter(d => {
    const matchSearch = d.indikator.toLowerCase().includes(searchTerm.toLowerCase()) || d.reviewer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = statusFilter === 'Semua' || d.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const selectedData = reviewData.find(d => d.id === selectedRow);

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#172033] p-6 font-sans">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#163A5F]">Status Review</h1>
        <p className="text-[#667085] mt-1 text-sm">Akreditasi Manajemen S1 2024</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-[#E4E7EC] flex items-center justify-between">
          <div>
            <p className="text-xs text-[#667085] font-medium mb-1">Total Submitted</p>
            <p className="text-xl font-bold">8</p>
          </div>
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FiSend size={20} /></div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-[#E4E7EC] flex items-center justify-between">
          <div>
            <p className="text-xs text-[#667085] font-medium mb-1">Approved</p>
            <p className="text-xl font-bold text-emerald-600">2</p>
          </div>
          <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><FiCheckCircle size={20} /></div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-[#E4E7EC] flex items-center justify-between">
          <div>
            <p className="text-xs text-[#667085] font-medium mb-1">Revision Req.</p>
            <p className="text-xl font-bold text-red-600">2</p>
          </div>
          <div className="p-2 bg-red-50 text-red-600 rounded-lg"><FiAlertCircle size={20} /></div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-[#E4E7EC] flex items-center justify-between">
          <div>
            <p className="text-xs text-[#667085] font-medium mb-1">Pending Review</p>
            <p className="text-xl font-bold text-purple-600">4</p>
          </div>
          <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><FiClock size={20} /></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className={`${selectedRow ? 'lg:w-2/3' : 'w-full'}`}>
          {/* Table Container */}
          <div className="bg-white rounded-lg shadow-sm border border-[#E4E7EC] overflow-hidden">
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-b border-[#E4E7EC] gap-4 bg-gray-50">
              <div className="relative w-full sm:w-64">
                <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Cari indikator/reviewer..." 
                  className="w-full pl-9 pr-3 py-1.5 border border-[#E4E7EC] rounded text-sm focus:outline-none focus:border-[#163A5F]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex w-full sm:w-auto space-x-2">
                <select className="border border-[#E4E7EC] rounded px-3 py-1.5 text-sm focus:outline-none bg-white">
                  <option>Semua Kriteria</option>
                  <option>Kriteria 1</option>
                  <option>Kriteria 2</option>
                </select>
                <select 
                  className="border border-[#E4E7EC] rounded px-3 py-1.5 text-sm focus:outline-none bg-white"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option>Semua Status</option>
                  <option value="SUBMITTED">Submitted</option>
                  <option value="IN_REVIEW">In Review</option>
                  <option value="APPROVED">Approved</option>
                  <option value="REVISION_REQUESTED">Revision</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-[#667085] border-b border-[#E4E7EC]">
                  <tr>
                    <th className="px-4 py-3 font-medium">Indikator</th>
                    <th className="px-4 py-3 font-medium">Tgl Submit</th>
                    <th className="px-4 py-3 font-medium">Reviewer</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4E7EC]">
                  {filteredData.map(row => (
                    <tr 
                      key={row.id} 
                      className={`hover:bg-blue-50 cursor-pointer transition-colors ${selectedRow === row.id ? 'bg-blue-50' : 'bg-white'}`}
                      onClick={() => setSelectedRow(row.id)}
                    >
                      <td className="px-4 py-3 font-medium text-[#163A5F]">{row.indikator}</td>
                      <td className="px-4 py-3 text-[#667085]">{row.submitted}</td>
                      <td className="px-4 py-3 text-[#172033]">{row.reviewer}</td>
                      <td className="px-4 py-3"><StatusBadge status={row.status} /></td>
                      <td className="px-4 py-3 text-center flex justify-center space-x-2">
                        <button className="p-1 text-gray-500 hover:text-blue-600"><FiEye size={16}/></button>
                        {row.status === 'REVISION_REQUESTED' && (
                          <button className="p-1 text-gray-500 hover:text-amber-600"><FiEdit3 size={16}/></button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {filteredData.length === 0 && (
              <div className="p-8 text-center text-gray-500 text-sm">Tidak ada data ditemukan.</div>
            )}
          </div>
        </div>

        {/* Detail Panel */}
        {selectedRow && selectedData && (
          <div className="lg:w-1/3 bg-white rounded-lg shadow-sm border border-[#E4E7EC] flex flex-col h-fit">
            <div className="p-4 border-b border-[#E4E7EC] flex justify-between items-center bg-gray-50 rounded-t-lg">
              <h3 className="font-semibold text-[#163A5F]">Detail Indikator {selectedData.indikator}</h3>
              <button onClick={() => setSelectedRow(null)} className="text-gray-400 hover:text-gray-600">&times;</button>
            </div>
            
            <div className="p-5 flex-1">
              <div className="mb-4">
                <p className="text-xs text-[#667085] mb-1">Status Terkini</p>
                <StatusBadge status={selectedData.status} />
              </div>
              
              <div className="mb-4">
                <p className="text-xs text-[#667085] mb-1">Direview oleh</p>
                <p className="font-medium text-sm">{selectedData.reviewer}</p>
              </div>

              <div className="mb-6">
                <p className="text-xs text-[#667085] mb-1">Tanggal Submit (Versi 2.0)</p>
                <p className="text-sm">{selectedData.submitted}</p>
              </div>

              {(selectedData.status === 'REVISION_REQUESTED' || selectedData.status === 'APPROVED') && (
                <div className={`p-4 rounded-lg mb-6 text-sm ${selectedData.status === 'APPROVED' ? 'bg-emerald-50 border border-emerald-100' : 'bg-red-50 border border-red-100'}`}>
                  <div className="flex items-center mb-2 font-semibold">
                    <FiMessageSquare className="mr-2" />
                    Catatan Reviewer:
                  </div>
                  <p className="text-[#172033] leading-relaxed">{selectedData.comment}</p>
                  
                  {selectedData.status === 'REVISION_REQUESTED' && (
                    <div className="mt-3">
                      <p className="font-semibold text-xs mb-1 text-red-800">Isu utama:</p>
                      <ul className="list-disc pl-4 text-xs text-red-700 space-y-1">
                        <li>Kurang kutipan referensi</li>
                        <li>Format tabel tidak sesuai</li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="p-4 border-t border-[#E4E7EC] bg-gray-50 rounded-b-lg flex flex-col space-y-2">
              <Link to={`/editor/${selectedData.indikator}`} className="w-full py-2 bg-white border border-[#E4E7EC] text-[#172033] text-sm font-medium rounded hover:bg-gray-100 flex items-center justify-center">
                <FiEye className="mr-2" /> Lihat di Editor
              </Link>
              {selectedData.status === 'REVISION_REQUESTED' && (
                <Link to={`/editor/${selectedData.indikator}?mode=edit`} className="w-full py-2 bg-[#163A5F] text-white text-sm font-medium rounded hover:bg-blue-800 flex items-center justify-center">
                  <FiEdit3 className="mr-2" /> Revisi & Kirim Ulang
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
