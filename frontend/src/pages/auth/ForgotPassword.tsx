import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiArrowLeft } from 'react-icons/fi';

const ForgotPassword = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-[#163A5F]">Lupa Password</h1>
          <p className="text-sm text-gray-500 mt-2">
            Masukkan alamat email Anda yang terdaftar, kami akan mengirimkan link untuk mereset password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#172033] mb-1">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="email@institusi.ac.id"
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#163A5F] focus:border-[#163A5F]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#163A5F] text-white font-medium py-2 px-4 rounded hover:bg-blue-800 transition duration-200"
          >
            Kirim Link Reset
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/login" className="inline-flex items-center text-sm text-[#163A5F] hover:underline">
            <FiArrowLeft className="mr-2" /> Kembali ke Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
