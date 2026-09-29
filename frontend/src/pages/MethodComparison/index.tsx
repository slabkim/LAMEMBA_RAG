import React, { useState } from 'react';
import { FiLayers, FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const MethodComparison: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const comparisonData = [
    { metric: 'Faithfulness', llm: 0.75, semantic: 0.85, hybrid: 0.92 },
    { metric: 'Answer Relevancy', llm: 0.70, semantic: 0.82, hybrid: 0.88 },
    { metric: 'Context Precision', llm: 0.60, semantic: 0.80, hybrid: 0.85 },
    { metric: 'Context Recall', llm: 0.65, semantic: 0.88, hybrid: 0.90 },
  ];

  const questions = [
    {
      question: 'Apa indikator kinerja utama untuk penelitian?',
      llm: 'Indikator penelitian mencakup jumlah publikasi dan sitasi.',
      semantic: 'Menurut standar LAMEMBA, indikator kinerja utama penelitian adalah publikasi jurnal nasional dan internasional.',
      hybrid: 'Indikator kinerja utama (IKU) penelitian menurut LAMEMBA meliputi: 1. Publikasi jurnal terakreditasi, 2. Sitasi, 3. HAKI.',
    },
    {
      question: 'Berapa persen dana penelitian yang harus dialokasikan?',
      llm: 'Biasanya sekitar 5-10% dari anggaran.',
      semantic: 'Standar mewajibkan alokasi dana penelitian yang memadai dari total anggaran perguruan tinggi.',
      hybrid: 'Perguruan tinggi harus mengalokasikan minimal 5% dari total anggaran operasional untuk kegiatan penelitian.',
    }
  ];

  const nextQuestion = () => setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
  const prevQuestion = () => setCurrentQuestionIndex((prev) => (prev - 1 + questions.length) % questions.length);
  const currentQ = questions[currentQuestionIndex];

  return (
    <div className="p-6 bg-white min-h-screen text-[#172033]">
      <h1 className="text-3xl font-bold text-[#163A5F] mb-6 flex items-center">
        <FiLayers className="mr-3" /> Perbandingan Metode (LLM vs Semantic vs Hybrid)
      </h1>

      <div className="mb-10 bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 bg-[#163A5F] text-white">
          <h2 className="text-lg font-semibold">Metric Comparison</h2>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Metric</th>
              <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">LLM Only</th>
              <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Semantic RAG</th>
              <th className="px-6 py-3 text-center text-xs font-bold text-[#163A5F] uppercase tracking-wider bg-blue-50">Hybrid RAG</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {comparisonData.map((row, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.metric}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{row.llm.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">{row.semantic.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-bold text-[#163A5F] bg-blue-50">{row.hybrid.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-[#163A5F]">Per-question Comparison</h2>
          <div className="flex space-x-2">
            <button onClick={prevQuestion} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
              <FiChevronLeft size={20} />
            </button>
            <button onClick={nextQuestion} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-sm text-gray-500 mb-1">Question {currentQuestionIndex + 1} of {questions.length}</p>
          <p className="text-lg font-medium text-gray-900">{currentQ.question}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <h3 className="text-sm font-bold text-gray-500 uppercase mb-3 border-b pb-2">LLM Only</h3>
            <p className="text-gray-700 text-sm">{currentQ.llm}</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <h3 className="text-sm font-bold text-gray-500 uppercase mb-3 border-b pb-2">Semantic RAG</h3>
            <p className="text-gray-700 text-sm">{currentQ.semantic}</p>
          </div>
          <div className="border-2 border-[#163A5F] rounded-lg p-4 bg-blue-50">
            <h3 className="text-sm font-bold text-[#163A5F] uppercase mb-3 border-b border-[#163A5F] pb-2">Hybrid RAG</h3>
            <p className="text-gray-900 text-sm">{currentQ.hybrid}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodComparison;