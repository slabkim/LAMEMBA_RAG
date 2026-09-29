import React, { useState } from 'react';
import { FiPieChart, FiFilter } from 'react-icons/fi';

const RagasEvaluation: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState('exp-1');

  const metrics = {
    faithfulness: 0.91,
    answerRelevancy: 0.85,
    contextPrecision: 0.88,
    contextRecall: 0.89,
  };

  const breakdown = [
    { id: 'TC-1', question: 'Syarat dosen pembimbing?', expected: 'Minimal Lektor...', generated: 'Dosen dengan jabatan minimal Lektor...', f: 0.95, ar: 0.90, cp: 0.85, cr: 0.92 },
    { id: 'TC-2', question: 'Rasio dosen dan mahasiswa?', expected: '1:30 untuk prodi sosial', generated: 'Rasionya adalah 1 banding 30', f: 0.88, ar: 0.80, cp: 0.91, cr: 0.85 },
  ];

  return (
    <div className="p-6 bg-white min-h-screen text-[#172033]">
      <h1 className="text-3xl font-bold text-[#163A5F] mb-6 flex items-center">
        <FiPieChart className="mr-3" /> RAGAS Evaluation Metrics
      </h1>

      <div className="mb-8 flex items-center bg-gray-50 p-4 rounded-lg border border-gray-200">
        <FiFilter className="text-gray-500 mr-2" />
        <span className="mr-4 font-medium">Pilih Eksperimen:</span>
        <select 
          className="border border-gray-300 rounded p-2 focus:outline-none focus:border-[#163A5F]"
          value={selectedExp}
          onChange={(e) => setSelectedExp(e.target.value)}
        >
          <option value="exp-1">EXP-001: Hybrid RAG v1</option>
          <option value="exp-2">EXP-002: Semantic RAG v1</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Faithfulness', value: metrics.faithfulness, color: 'text-blue-600' },
          { title: 'Answer Relevancy', value: metrics.answerRelevancy, color: 'text-green-600' },
          { title: 'Context Precision', value: metrics.contextPrecision, color: 'text-purple-600' },
          { title: 'Context Recall', value: metrics.contextRecall, color: 'text-orange-600' },
        ].map((m, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#163A5F] flex flex-col items-center">
            <h3 className="text-gray-500 text-sm font-semibold uppercase mb-2">{m.title}</h3>
            <span className={`text-4xl font-bold ${m.color}`}>{m.value.toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#163A5F] text-white">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Question</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Expected</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Generated</th>
              <th className="px-2 py-3 text-center text-xs font-medium uppercase tracking-wider">F</th>
              <th className="px-2 py-3 text-center text-xs font-medium uppercase tracking-wider">AR</th>
              <th className="px-2 py-3 text-center text-xs font-medium uppercase tracking-wider">CP</th>
              <th className="px-2 py-3 text-center text-xs font-medium uppercase tracking-wider">CR</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {breakdown.map((row) => (
              <tr key={row.id}>
                <td className="px-4 py-4 text-sm text-gray-900">{row.question}</td>
                <td className="px-4 py-4 text-sm text-gray-500">{row.expected}</td>
                <td className="px-4 py-4 text-sm text-gray-500">{row.generated}</td>
                <td className="px-2 py-4 text-sm text-center font-semibold text-blue-600">{row.f.toFixed(2)}</td>
                <td className="px-2 py-4 text-sm text-center font-semibold text-green-600">{row.ar.toFixed(2)}</td>
                <td className="px-2 py-4 text-sm text-center font-semibold text-purple-600">{row.cp.toFixed(2)}</td>
                <td className="px-2 py-4 text-sm text-center font-semibold text-orange-600">{row.cr.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RagasEvaluation;