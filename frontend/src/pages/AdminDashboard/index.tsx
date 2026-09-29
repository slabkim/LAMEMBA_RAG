import React, { useEffect, useState } from "react";
import { FiUsers, FiFolder, FiFileText, FiCheckCircle, FiActivity } from "react-icons/fi";
import { Link } from "react-router-dom";
import { fetchAPI } from "../../lib/api";

export default function AdminDashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const result = await fetchAPI('/dashboard');
        setData(result.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadDashboard();
  }, []);

  if (loading) {
    return <div className="p-6 text-gray-500">Memuat dashboard...</div>;
  }

  const stats = [
    { label: "Total Proyek", value: data?.stats?.total_projects || 0, icon: <FiFolder />, color: "bg-blue-50 text-blue-600" },
    { label: "Pengguna Aktif", value: data?.stats?.active_users || 0, icon: <FiUsers />, color: "bg-emerald-50 text-emerald-600" },
    { label: "Total Dokumen", value: data?.stats?.total_documents || 0, icon: <FiFileText />, color: "bg-amber-50 text-amber-600" },
    { label: "DED Disetujui", value: data?.stats?.approved_ded || 0, icon: <FiCheckCircle />, color: "bg-purple-50 text-purple-600" },
  ];

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-1.5">
        <span className="text-[#172033] text-[28px] font-bold">Admin Dashboard</span>
        <span className="text-[#667085] text-sm">Ringkasan aktivitas platform dan status proyek.</span>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white rounded-xl border border-[#E4E7EC] p-5 flex items-center gap-4 shadow-sm">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl ${s.color}`}>
              {s.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-[#667085] text-sm font-medium">{s.label}</span>
              <span className="text-[#172033] text-2xl font-bold">{s.value}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Proyek Aktif */}
        <div className="bg-white rounded-xl border border-[#E4E7EC] p-6 shadow-sm flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-[#172033] text-lg">Proyek Terakhir</h3>
            <Link to="/projects" className="text-sm font-bold text-[#163A5F] hover:underline">Lihat Semua</Link>
          </div>
          <div className="flex flex-col gap-3">
            {(data?.recent_projects || []).map((project: any) => (
              <div key={project.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <FiFolder />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[#172033] text-sm">{project.name}</span>
                    <span className="text-xs text-gray-500">{project.program_studi} · {project.jenjang}</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                  {project.status}
                </span>
              </div>
            ))}
            {!data?.recent_projects?.length && (
              <span className="text-sm text-gray-500 italic">Belum ada proyek.</span>
            )}
          </div>
        </div>

        {/* Aktivitas Sistem */}
        <div className="bg-white rounded-xl border border-[#E4E7EC] p-6 shadow-sm flex flex-col gap-4">
          <h3 className="font-bold text-[#172033] text-lg">Aktivitas Terbaru</h3>
          <div className="flex flex-col gap-4">
            {(data?.recent_activities || []).map((act: any, i: number) => (
              <div key={i} className="flex gap-3">
                <div className="mt-1 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                  <FiActivity size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-[#172033]">
                    <span className="font-bold">{act.user?.full_name || 'Sistem'}</span> {act.action}
                  </span>
                  <span className="text-xs text-gray-500">{new Date(act.created_at).toLocaleString()}</span>
                </div>
              </div>
            ))}
            {!data?.recent_activities?.length && (
              <span className="text-sm text-gray-500 italic">Belum ada aktivitas tercatat.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
