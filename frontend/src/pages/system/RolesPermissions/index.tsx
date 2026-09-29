import React, { useState } from 'react';
import { FiSave, FiCheckSquare, FiSquare, FiShield } from 'react-icons/fi';

const ROLES = ['Admin', 'Penyusun', 'Reviewer', 'Researcher'];

const MODULES = [
  { id: 'projects', name: 'Projects', permissions: ['Create Project', 'Edit Project', 'Delete Project', 'View Projects'] },
  { id: 'documents', name: 'Documents', permissions: ['Upload Document', 'Edit Document', 'Delete Document', 'View Documents'] },
  { id: 'ded', name: 'DED', permissions: ['Generate DED', 'Edit DED', 'Export DED', 'View DED'] },
  { id: 'review', name: 'Review', permissions: ['Submit Review', 'Edit Review', 'Approve Review', 'View Reviews'] },
  { id: 'research', name: 'Research', permissions: ['Access AI Chat', 'Save Research', 'View Research History'] },
  { id: 'system', name: 'System', permissions: ['Manage Users', 'Manage Roles', 'View Audit Logs', 'System Settings'] }
];

export default function RolesPermissions() {
  const [selectedRole, setSelectedRole] = useState(ROLES[0]);
  const [permissions, setPermissions] = useState<Record<string, Record<string, boolean>>>({
    Admin: {
      'Create Project': true, 'Edit Project': true, 'Delete Project': true, 'View Projects': true,
      'Upload Document': true, 'Edit Document': true, 'Delete Document': true, 'View Documents': true,
      'Generate DED': true, 'Edit DED': true, 'Export DED': true, 'View DED': true,
      'Submit Review': true, 'Edit Review': true, 'Approve Review': true, 'View Reviews': true,
      'Access AI Chat': true, 'Save Research': true, 'View Research History': true,
      'Manage Users': true, 'Manage Roles': true, 'View Audit Logs': true, 'System Settings': true
    }
  });

  const togglePermission = (role: string, permission: string) => {
    setPermissions(prev => ({
      ...prev,
      [role]: {
        ...prev[role],
        [permission]: !prev[role]?.[permission]
      }
    }));
  };

  const handleSave = () => {
    alert('Permissions saved for ' + selectedRole);
  };

  return (
    <div className="p-6 text-[#172033] min-h-screen bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <FiShield className="text-[#163A5F]" /> Roles & Permissions
        </h1>
        <button onClick={handleSave} className="flex items-center gap-2 bg-[#163A5F] text-white px-4 py-2 rounded-md hover:bg-opacity-90">
          <FiSave /> Save Changes
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Panel - 30% */}
        <div className="w-full md:w-[30%] bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h2 className="font-semibold text-lg">Roles</h2>
          </div>
          <ul className="divide-y divide-gray-100">
            {ROLES.map(role => (
              <li key={role}>
                <button
                  onClick={() => setSelectedRole(role)}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${selectedRole === role ? 'bg-blue-50 border-l-4 border-[#163A5F] font-medium text-[#163A5F]' : 'text-gray-600'}`}
                >
                  {role}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Panel - 70% */}
        <div className="w-full md:w-[70%] bg-white rounded-lg shadow border border-gray-200 p-6">
          <h2 className="font-semibold text-lg mb-6 border-b pb-2">Permissions for <span className="text-[#163A5F]">{selectedRole}</span></h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {MODULES.map(module => (
              <div key={module.id} className="space-y-3">
                <h3 className="font-medium text-gray-800 bg-gray-100 px-3 py-1 rounded">{module.name}</h3>
                <div className="space-y-2 px-2">
                  {module.permissions.map(perm => {
                    const isChecked = permissions[selectedRole]?.[perm] || false;
                    return (
                      <label key={perm} className="flex items-center gap-3 cursor-pointer group">
                        <button 
                          onClick={() => togglePermission(selectedRole, perm)}
                          className="text-xl text-[#163A5F]"
                        >
                          {isChecked ? <FiCheckSquare /> : <FiSquare className="text-gray-400 group-hover:text-gray-600" />}
                        </button>
                        <span className="text-sm text-gray-700 select-none group-hover:text-black">{perm}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
