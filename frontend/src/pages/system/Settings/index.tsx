import React, { useState } from 'react';
import { FiSave, FiEye, FiEyeOff } from 'react-icons/fi';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('AI & RAG');
  const [showKey, setShowKey] = useState(false);
  const tabs = ['Umum', 'AI & RAG', 'Email', 'Penyimpanan'];

  return (
    <div className="p-6 max-w-5xl mx-auto text-[#172033]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#163A5F]">Pengaturan Sistem</h1>
        <button className="flex items-center gap-2 bg-[#163A5F] text-white px-4 py-2 rounded shadow hover:bg-blue-800 transition">
          <FiSave /> Simpan Pengaturan
        </button>
      </div>

      <div className="bg-white rounded shadow flex overflow-hidden min-h-[500px]">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-50 border-r border-gray-200 p-4">
          <ul className="space-y-2">
            {tabs.map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-4 py-2 rounded transition font-medium ${
                    activeTab === tab
                      ? 'bg-[#163A5F] text-white'
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="w-3/4 p-8">
          {activeTab === 'AI & RAG' ? (
            <div>
              <h2 className="text-xl font-semibold border-b pb-2 mb-6">Konfigurasi AI & RAG</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gemini API Key</label>
                  <div className="relative">
                    <input
                      type={showKey ? 'text' : 'password'}
                      defaultValue="AIzaSyA_dummy_key_1234567890"
                      className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:border-[#163A5F]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowKey(!showKey)}
                      className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                    >
                      {showKey ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Kunci API untuk mengakses model bahasa Google Gemini.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Default Top-K (RAG Retrieval)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="1"
                      max="20"
                      defaultValue="5"
                      className="w-full"
                    />
                    <span className="font-medium text-gray-700">5</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Jumlah dokumen relevan yang diambil saat pencarian semantik.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    RRF Constant K (Reciprocal Rank Fusion)
                  </label>
                  <input
                    type="number"
                    defaultValue="60"
                    className="w-full sm:w-1/3 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#163A5F]"
                  />
                  <p className="text-xs text-gray-500 mt-1">Konstanta penyeimbang pada perhitungan skor RRF (Standar: 60).</p>
                </div>

                <div className="flex items-center justify-between bg-gray-50 p-4 rounded border border-gray-200">
                  <div>
                    <h3 className="text-sm font-medium text-gray-800">Evidence-first mode</h3>
                    <p className="text-xs text-gray-500">Memprioritaskan sitasi dokumen bukti sebelum generasi bebas oleh AI.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#163A5F]"></div>
                  </label>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              Pengaturan {activeTab} akan tersedia di sini.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
