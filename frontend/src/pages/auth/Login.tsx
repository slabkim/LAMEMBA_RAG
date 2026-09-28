import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { FiMail, FiLock } from 'react-icons/fi';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = (location.state as any)?.from?.pathname || '/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        // credentials: 'omit' // use 'include' when cross-origin cookies are fully set up
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error?.message || 'Login gagal');
      }

      login(data.user);
      navigate(from, { replace: true });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Panel */}
      <div className="hidden lg:flex w-1/2 bg-[#163A5F] text-white p-12 flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-bold">D</div>
            <span className="font-semibold text-lg tracking-wide">DED LAMEMBA</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-4">AI-Assisted Document<br/>Evaluation Generator</h1>
          <p className="text-blue-200 text-lg max-w-md">
            Platform pintar berbasis Retrieval-Augmented Generation (RAG) untuk mempercepat penyusunan dan verifikasi Dokumen Evaluasi Diri akreditasi.
          </p>
        </div>
        <div className="text-sm text-blue-300">
          &copy; 2026 AI DED LAMEMBA Project.
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#172033] mb-2">Selamat Datang</h2>
            <p className="text-[#667085]">Masuk ke akun Anda untuk mengakses workspace.</p>
          </div>

          {error && (
            <div className="bg-amber-100 border border-amber-300 text-amber-800 p-3 rounded mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#172033] mb-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FiMail />
                </div>
                <input
                  type="email"
                  required
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="admin@lamemba.dev"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-[#172033]">Password</label>
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">Lupa password?</Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FiLock />
                </div>
                <input
                  type="password"
                  required
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#163A5F] text-white py-2.5 rounded-md hover:bg-blue-800 transition font-medium disabled:opacity-70"
            >
              {isLoading ? 'Sedang masuk...' : 'Masuk'}
            </button>
          </form>

          {/* Development Help */}
          <div className="mt-8 p-4 bg-gray-100 rounded text-xs text-gray-500">
            <strong>Dev Accounts:</strong><br/>
            Admin: admin@lamemba.dev<br/>
            Penyusun: penyusun@lamemba.dev<br/>
            Reviewer: reviewer@lamemba.dev<br/>
            Researcher: researcher@lamemba.dev<br/>
            PW: (role)123
          </div>
        </div>
      </div>
    </div>
  );
}
