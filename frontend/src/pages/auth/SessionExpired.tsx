import React from 'react';
import { Link } from 'react-router-dom';

export default function SessionExpired() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-sm w-full p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-[#163A5F] mb-2">Sesi Berakhir</h2>
        <p className="text-gray-600 mb-6">Sesi login Anda telah berakhir. Silakan login kembali untuk melanjutkan.</p>
        <Link to="/login" className="block w-full bg-[#163A5F] text-white text-center px-4 py-2 rounded-md hover:bg-blue-800 transition">
          Login Kembali
        </Link>
      </div>
    </div>
  );
}
