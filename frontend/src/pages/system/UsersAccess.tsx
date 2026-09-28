import React from 'react';
import { FiPlus, FiSearch, FiEdit2, FiLock, FiUserX } from 'react-icons/fi';

export default function UsersAccess() {
  const users = [
    { id: '1', name: 'Admin Utama', email: 'admin@lamemba.dev', role: 'ADMIN', status: 'ACTIVE', lastLogin: '2 menit lalu' },
    { id: '2', name: 'Penyusun DED', email: 'penyusun@lamemba.dev', role: 'DED_AUTHOR', status: 'ACTIVE', lastLogin: '1 jam lalu' },
    { id: '3', name: 'Reviewer Asesor', email: 'reviewer@lamemba.dev', role: 'REVIEWER', status: 'ACTIVE', lastLogin: '1 hari lalu' },
    { id: '4', name: 'Dr. Researcher', email: 'researcher@lamemba.dev', role: 'RESEARCHER', status: 'DISABLED', lastLogin: '1 bulan lalu' },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1.5">
          <span className="text-[#172033] text-[28px] font-bold">Users & Access</span>
          <span className="text-[#667085] text-sm">Kelola pengguna sistem, role, dan hak akses.</span>
        </div>
        <button className="flex items-center bg-[#163A5F] text-white py-2.5 px-4 gap-2 rounded-lg font-bold text-sm hover:bg-blue-800 transition">
          <FiPlus /> Tambah User
        </button>
      </div>

      {/* Toolbar */}
      <div className="bg-white border border-[#E4E7EC] rounded-lg p-4 flex justify-between items-center">
        <div className="flex gap-3">
          <div className="relative w-72">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Cari nama, email, atau role..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-[#E4E7EC] rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm text-[#172033]">
          <thead className="bg-gray-50 border-b border-[#E4E7EC] text-xs uppercase text-[#667085]">
            <tr>
              <th className="px-6 py-4 font-bold">User</th>
              <th className="px-6 py-4 font-bold">Role</th>
              <th className="px-6 py-4 font-bold">Status</th>
              <th className="px-6 py-4 font-bold">Terakhir Login</th>
              <th className="px-6 py-4 font-bold text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50/50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs">
                      {user.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold">{user.name}</span>
                      <span className="text-gray-500 text-xs">{user.email}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded text-xs font-bold uppercase">
                    {user.role.replace('_', ' ')}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded text-xs font-bold uppercase ${user.status === 'ACTIVE' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-500 text-xs">
                  {user.lastLogin}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2 text-gray-400">
                    <button className="p-1.5 hover:text-blue-600 hover:bg-blue-50 rounded transition"><FiEdit2 /></button>
                    <button className="p-1.5 hover:text-amber-600 hover:bg-amber-50 rounded transition"><FiLock /></button>
                    <button className="p-1.5 hover:text-red-600 hover:bg-red-50 rounded transition"><FiUserX /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
