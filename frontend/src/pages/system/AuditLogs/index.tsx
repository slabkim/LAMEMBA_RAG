import React, { useState } from 'react';
import { FiList, FiSearch, FiFilter, FiCalendar, FiUser, FiActivity } from 'react-icons/fi';

interface AuditLog {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  resourceType: string;
  resourceId: string;
  ipAddress: string;
}

const DUMMY_LOGS: AuditLog[] = [
  { id: '1', timestamp: '2023-10-25 14:32:01', user: 'Admin System', action: 'CREATE', resourceType: 'Project', resourceId: 'PRJ-101', ipAddress: '192.168.1.10' },
  { id: '2', timestamp: '2023-10-25 15:10:45', user: 'Budi Penyusun', action: 'UPLOAD', resourceType: 'Document', resourceId: 'DOC-552', ipAddress: '192.168.1.25' },
  { id: '3', timestamp: '2023-10-25 16:05:12', user: 'Siti Reviewer', action: 'APPROVE', resourceType: 'DED', resourceId: 'DED-88', ipAddress: '192.168.1.42' },
  { id: '4', timestamp: '2023-10-26 09:15:00', user: 'Admin System', action: 'UPDATE', resourceType: 'Role', resourceId: 'ROLE-REV', ipAddress: '192.168.1.10' },
  { id: '5', timestamp: '2023-10-26 10:22:33', user: 'Andi Researcher', action: 'QUERY', resourceType: 'AI_Chat', resourceId: 'CHAT-901', ipAddress: '192.168.1.18' },
  { id: '6', timestamp: '2023-10-26 11:00:05', user: 'Admin System', action: 'DELETE', resourceType: 'Document', resourceId: 'DOC-550', ipAddress: '192.168.1.10' },
];

export default function AuditLogs() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLogs = DUMMY_LOGS.filter(log => 
    log.user.toLowerCase().includes(searchTerm.toLowerCase()) || 
    log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.resourceType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 text-[#172033] min-h-screen bg-gray-50">
      <div className="mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2 mb-4">
          <FiList className="text-[#163A5F]" /> Audit Logs
        </h1>
        
        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-wrap gap-4 items-center">
          <div className="flex items-center text-sm font-medium text-gray-700 mr-2">
            <FiFilter className="mr-2" /> Filters:
          </div>
          
          <div className="relative flex-1 min-w-[200px]">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search user, action, resource..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#163A5F] focus:border-[#163A5F]"
            />
          </div>

          <div className="relative">
            <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="date" 
              className="pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#163A5F] focus:border-[#163A5F]"
            />
          </div>

          <div className="relative">
            <FiActivity className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <select className="pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#163A5F] focus:border-[#163A5F] appearance-none bg-white">
              <option value="">All Actions</option>
              <option value="CREATE">CREATE</option>
              <option value="UPDATE">UPDATE</option>
              <option value="DELETE">DELETE</option>
              <option value="APPROVE">APPROVE</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-600">
              <tr>
                <th className="px-6 py-4 font-semibold">Timestamp</th>
                <th className="px-6 py-4 font-semibold">User</th>
                <th className="px-6 py-4 font-semibold">Action</th>
                <th className="px-6 py-4 font-semibold">Resource Type</th>
                <th className="px-6 py-4 font-semibold">Resource ID</th>
                <th className="px-6 py-4 font-semibold">IP Address</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredLogs.map(log => (
                <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-500">{log.timestamp}</td>
                  <td className="px-6 py-4 font-medium flex items-center gap-2">
                    <div className="bg-blue-100 text-[#163A5F] p-1.5 rounded-full"><FiUser size={12} /></div>
                    {log.user}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium tracking-wide
                      ${log.action === 'CREATE' ? 'bg-green-100 text-green-700' : 
                        log.action === 'DELETE' ? 'bg-red-100 text-red-700' : 
                        log.action === 'UPDATE' ? 'bg-blue-100 text-blue-700' : 
                        log.action === 'APPROVE' ? 'bg-purple-100 text-purple-700' : 
                        'bg-gray-100 text-gray-700'}`}>
                      {log.action}
                    </span>
                  </td>
                  <td className="px-6 py-4">{log.resourceType}</td>
                  <td className="px-6 py-4 font-mono text-xs text-gray-600 bg-gray-50 rounded px-2 my-2 inline-block border border-gray-200">{log.resourceId}</td>
                  <td className="px-6 py-4 text-gray-500 font-mono text-xs">{log.ipAddress}</td>
                </tr>
              ))}
              {filteredLogs.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                    No audit logs found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
