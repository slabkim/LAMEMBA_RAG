import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#163A5F]">404</h1>
        <p className="text-xl mt-4 text-gray-600">Halaman tidak ditemukan</p>
        <p className="mt-2 mb-6 text-sm text-gray-500">Halaman yang Anda cari mungkin sudah dihapus atau URL salah.</p>
        <Link to="/dashboard" className="bg-[#163A5F] text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
          Kembali ke Dashboard
        </Link>
      </div>
    </div>
  );
}
