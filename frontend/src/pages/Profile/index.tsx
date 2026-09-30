import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { FiUser, FiMail, FiLock, FiSave } from 'react-icons/fi';

export default function Profile() {
  const { user } = useAuth();
  
  return (
    <div className="p-8 max-w-3xl mx-auto w-full">
      <h1 className="text-2xl font-bold text-[#163A5F] mb-6">Profil Pengguna</h1>
      <div className="bg-white border border-[#E4E7EC] rounded-xl shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl font-bold">
              {user?.full_name?.charAt(0) || 'U'}
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">{user?.full_name}</h2>
              <p className="text-gray-500">{user?.roles.join(', ')}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
                <FiMail className="text-gray-400 mr-2" />
                <input type="email" disabled value={user?.email || ''} className="bg-transparent w-full outline-none text-gray-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                <FiUser className="text-gray-400 mr-2" />
                <input type="text" defaultValue={user?.full_name || ''} className="bg-transparent w-full outline-none text-gray-900" />
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <FiLock /> Ganti Password
            </h3>
            <div className="space-y-4">
              <div>
                <input type="password" placeholder="Password Lama" className="border border-gray-300 rounded-lg px-3 py-2 w-full outline-none focus:border-blue-500" />
              </div>
              <div>
                <input type="password" placeholder="Password Baru" className="border border-gray-300 rounded-lg px-3 py-2 w-full outline-none focus:border-blue-500" />
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2">
              <FiSave /> Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
