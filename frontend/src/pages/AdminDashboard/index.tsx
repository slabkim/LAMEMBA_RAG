import React from "react";
import { FiDownload, FiPlus, FiAlertCircle, FiFileText } from "react-icons/fi";

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-6">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1.5">
          <span className="text-[#172033] text-[28px] font-bold">Admin Dashboard</span>
          <div className="flex items-center text-sm">
            <span className="text-[#163A5F] font-bold mr-2">Proyek Aktif:</span>
            <span className="text-[#172033] mr-2">Akreditasi S1 Manajemen 2026 · DEMO</span>
            <span className="text-[#667085] text-xs ml-2 border-l pl-2">Pembaruan terakhir: 2 menit yang lalu</span>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <button className="flex items-center bg-white text-[#172033] py-2 px-4 gap-2 rounded-lg border border-[#E4E7EC] font-bold text-[13px] hover:bg-gray-50 transition">
            <FiDownload /> Export LAP
          </button>
          <button className="flex items-center bg-[#163A5F] text-white py-2 px-4 gap-2 rounded-lg border-0 font-bold text-[13px] hover:bg-blue-800 transition">
            <FiPlus /> Generate Baru
          </button>
        </div>
      </div>

      {/* Stats Cards Row 1 */}
      <div className="grid grid-cols-3 gap-6">
        <StatCard title="Active Projects" value="3" subtitle="+1 dari bulan lalu" badge="bg-green-100 text-green-700" badgeText="+33%" />
        <StatCard title="Total Documents" value="48" subtitle="DED, DKPS, Evidence" />
        <StatCard title="Processed Docs" value="42" subtitle="87% siap RAG" />
      </div>

      {/* Stats Cards Row 2 */}
      <div className="grid grid-cols-3 gap-6">
        <StatCard title="DED Progress" value="67%" subtitle="Dari 7 kriteria" />
        <StatCard title="AI Drafts" value="15" subtitle="Menunggu review" badge="bg-blue-100 text-blue-700" badgeText="New" />
        <StatCard title="Pending Reviews" value="5" subtitle="Butuh verifikasi manusia" badge="bg-amber-100 text-amber-700" badgeText="Action" />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column: Criteria Status & Health */}
        <div className="col-span-2 flex flex-col gap-6">
          <div className="bg-white border border-[#E4E7EC] rounded-lg p-5">
            <h3 className="font-bold text-[#172033] mb-4">Status Kriteria DED</h3>
            <div className="space-y-3">
              <CriteriaRow name="Kriteria 1: Orientasi Strategis" status="Drafting AI" progress="45%" docs="12" />
              <CriteriaRow name="Kriteria 2: Tata Kelola" status="Pending Review" progress="100%" docs="8" />
              <CriteriaRow name="Kriteria 3: Mahasiswa" status="Approved" progress="100%" docs="15" />
            </div>
          </div>
        </div>

        {/* Right Column: Attention Required */}
        <div className="flex flex-col gap-6">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <h3 className="font-bold text-amber-900 mb-4 flex items-center gap-2">
              <FiAlertCircle /> Attention Required
            </h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border border-amber-100 shadow-sm text-sm">
                <span className="font-semibold block text-[#172033]">Parsing Gagal</span>
                <span className="text-gray-600 block mt-1">laporan-2025.pdf gagal diekstrak.</span>
                <button className="text-blue-600 font-medium mt-2">Retry Processing</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, subtitle, badge, badgeText }: any) {
  return (
    <div className="bg-white border border-[#E4E7EC] rounded-lg p-5 flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <span className="text-[#667085] text-sm font-medium">{title}</span>
        {badgeText && <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${badge}`}>{badgeText}</span>}
      </div>
      <span className="text-3xl font-bold text-[#172033]">{value}</span>
      <span className="text-[#667085] text-xs mt-2">{subtitle}</span>
    </div>
  );
}

function CriteriaRow({ name, status, progress, docs }: any) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-blue-600"><FiFileText /></div>
        <div className="flex flex-col">
          <span className="font-medium text-sm text-[#172033]">{name}</span>
          <span className="text-xs text-gray-500">{docs} dokumen referensi</span>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <span className="text-gray-600 w-12 text-right">{progress}</span>
        <span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700 w-24 text-center">{status}</span>
      </div>
    </div>
  );
}
