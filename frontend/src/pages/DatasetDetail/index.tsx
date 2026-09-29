import React, { useState } from 'react';
import { FiArrowLeft, FiDatabase, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const DatasetDetail: React.FC = () => {
  const [dataset] = useState({
    id: 'DS-001',
    name: 'LAMEMBA Standar 1 Dataset',
    totalTestCases: 50,
    coverage: '85%',
  });

  const testCases = [
    { id: 'TC-1', question: 'Apa saja kriteria tata pamong?', expected: 'Kriteria tata pamong mencakup...', criteria: 'Standar 1', status: 'Active' },
    { id: 'TC-2', question: 'Bagaimana sistem penjaminan mutu?', expected: 'Sistem penjaminan mutu internal...', criteria: 'Standar 2', status: 'Draft' },
  ];

  return (
    <div className="p-6 bg-white min-h-screen text-[#172033]">
      <div className="flex items-center mb-6">
        <Link to="/datasets" className="mr-4 text-[#163A5F] hover:text-blue-800">
          <FiArrowLeft size={24} />
        </Link>
        <h1 className="text-3xl font-bold text-[#163A5F]">Detail Dataset: {dataset.name}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg shadow border border-gray-200 flex items-center">
          <FiDatabase className="text-[#163A5F] mr-3" size={32} />
          <div>
            <p className="text-sm text-gray-500">Total Test Cases</p>
            <p className="text-xl font-bold">{dataset.totalTestCases}</p>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg shadow border border-gray-200 flex items-center">
          <FiCheckCircle className="text-green-600 mr-3" size={32} />
          <div>
            <p className="text-sm text-gray-500">Coverage Kriteria</p>
            <p className="text-xl font-bold">{dataset.coverage}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#163A5F] text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Question</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Expected Answer</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Criteria</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {testCases.map((tc) => (
              <tr key={tc.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tc.id}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{tc.question}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{tc.expected}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tc.criteria}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${tc.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {tc.status}
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

export default DatasetDetail;