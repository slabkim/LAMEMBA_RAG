import React, { useState } from 'react';
import { FiArrowLeft, FiBarChart2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ExperimentDetail: React.FC = () => {
  const [experiment] = useState({
    id: 'EXP-001',
    name: 'Uji Coba Hybrid RAG v1',
    faithfulness: 0.92,
    answerRelevancy: 0.88,
    contextPrecision: 0.85,
    contextRecall: 0.90,
  });

  const results = [
    { id: 'TC-1', question: 'Apa saja kriteria tata pamong?', generated: 'Kriteria tata pamong meliputi kepemimpinan, sistem manajemen...', faithfulness: 0.95 },
    { id: 'TC-2', question: 'Bagaimana sistem penjaminan mutu?', generated: 'Sistem penjaminan mutu dijalankan oleh LPM...', faithfulness: 0.89 },
  ];

  return (
    <div className="p-6 bg-white min-h-screen text-[#172033]">
      <div className="flex items-center mb-6">
        <Link to="/experiments" className="mr-4 text-[#163A5F] hover:text-blue-800">
          <FiArrowLeft size={24} />
        </Link>
        <h1 className="text-3xl font-bold text-[#163A5F]">Detail Eksperimen: {experiment.name}</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Faithfulness', value: experiment.faithfulness },
          { label: 'Answer Relevancy', value: experiment.answerRelevancy },
          { label: 'Context Precision', value: experiment.contextPrecision },
          { label: 'Context Recall', value: experiment.contextRecall },
        ].map((metric, idx) => (
          <div key={idx} className="bg-gray-50 p-4 rounded-lg shadow border border-gray-200 flex flex-col items-center justify-center">
            <p className="text-sm text-gray-500 mb-1">{metric.label}</p>
            <p className="text-2xl font-bold text-[#163A5F]">{metric.value.toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-lg font-bold text-[#172033] flex items-center">
            <FiBarChart2 className="mr-2" /> Hasil Per Test Case
          </h2>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#163A5F] text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Question</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Generated Answer</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Faithfulness</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {results.map((res) => (
              <tr key={res.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{res.id}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{res.question}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{res.generated}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${res.faithfulness >= 0.9 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {res.faithfulness.toFixed(2)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExperimentDetail;