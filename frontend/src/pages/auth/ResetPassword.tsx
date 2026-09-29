import React, { useState } from 'react';
import { FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-[#163A5F]">Reset Password</h1>
          <p className="text-sm text-gray-500 mt-2">
            Silakan masukkan password baru Anda di bawah ini.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#172033] mb-1">Password Baru</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="text-gray-400" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                required
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#163A5F] focus:border-[#163A5F]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#172033] mb-1">Konfirmasi Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="text-gray-400" />
              </div>
              <input
                type={showConfirm ? 'text' : 'password'}
                placeholder="••••••••"
                required
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#163A5F] focus:border-[#163A5F]"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showConfirm ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#163A5F] text-white font-medium py-2 px-4 rounded hover:bg-blue-800 transition duration-200 mt-2"
          >
            Simpan Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
