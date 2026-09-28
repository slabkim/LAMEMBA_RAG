import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiClipboard, 
  FiClock, 
  FiCheckCircle, 
  FiAlertCircle, 
  FiChevronRight, 
  FiActivity,
  FiFileText
} from 'react-icons/fi';

const ReviewDashboard = () => {
  const stats = { assigned: 15, pending: 4, approved: 9, revisionRequested: 2 };
  
  const pendingReviews = [
    { id: 1, project: 'DED 2024 Univ Teknologi', criterion: '1.1 Visi Misi', status: 'PENDING', date: '2026-09-28' },
    { id: 2, project: 'DED 2024 Univ Teknologi', criterion: '1.2 Tata Pamong', status: 'REVISION_REQUESTED', date: '2026-09-27' },
    { id: 3, project: 'DED 2024 Institut Sains', criterion: '2.1 Mahasiswa', status: 'PENDING', date: '2026-09-29' }
  ];
  
  const activities = [
    { id: 1, action: 'Approved criterion 1.3 (Kerjasama)', project: 'DED 2024 Univ Teknologi', time: '2 hours ago', icon: <FiCheckCircle className="text-emerald-500" /> },
    { id: 2, action: 'Requested revision on 3.1 (SDM)', project: 'DED 2024 Institut Sains', time: '5 hours ago', icon: <FiAlertCircle className="text-red-500" /> },
    { id: 3, action: 'Started reviewing 2.1 (Mahasiswa)', project: 'DED 2024 Institut Sains', time: '1 day ago', icon: <FiClock className="text-amber-500" /> }
  ];

  const getStatusBadge = (status) => {
    if (status === 'APPROVED') return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">Approved</span>;
    if (status === 'REVISION_REQUESTED') return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-700 border border-red-200">Revision Requested</span>;
    return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700 border border-amber-200">Pending</span>;
  };

  return (
    <div className="p-6 text-[#172033] min-h-screen bg-gray-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#163A5F]">Review Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Manage and track your assigned DED criteria reviews.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Assigned Projects', value: stats.assigned, icon: <FiClipboard size={24} className="text-[#163A5F]" />, bg: 'bg-blue-50' },
          { label: 'Pending Reviews', value: stats.pending, icon: <FiClock size={24} className="text-amber-600" />, bg: 'bg-amber-50' },
          { label: 'Approved', value: stats.approved, icon: <FiCheckCircle size={24} className="text-emerald-600" />, bg: 'bg-emerald-50' },
          { label: 'Revision Requested', value: stats.revisionRequested, icon: <FiAlertCircle size={24} className="text-red-600" />, bg: 'bg-red-50' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center">
            <div className={`p-3 rounded-lg ${stat.bg} mr-4`}>{stat.icon}</div>
            <div>
              <div className="text-3xl font-bold text-[#172033]">{stat.value}</div>
              <div className="text-sm font-medium text-gray-500">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pending Reviews */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-lg font-bold text-[#163A5F] flex items-center">
                <FiFileText className="mr-2" /> Pending Reviews
              </h2>
            </div>
            <div className="divide-y divide-gray-100">
              {pendingReviews.map((review) => (
                <div key={review.id} className="p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-gray-50 transition-colors">
                  <div className="mb-3 sm:mb-0">
                    <div className="font-semibold text-[#172033] text-lg">{review.criterion}</div>
                    <div className="text-sm text-gray-500 mt-1">{review.project} • Added {review.date}</div>
                    <div className="mt-2">{getStatusBadge(review.status)}</div>
                  </div>
                  <Link 
                    to={`/review-workspace/${review.id}`}
                    className="inline-flex items-center px-4 py-2 bg-[#163A5F] text-white text-sm font-medium rounded-lg hover:bg-blue-900 transition-colors"
                  >
                    Review <FiChevronRight className="ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity Timeline */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-lg font-bold text-[#163A5F] mb-6 flex items-center">
              <FiActivity className="mr-2" /> Recent Activity
            </h2>
            <div className="relative border-l-2 border-gray-100 ml-3 space-y-6">
              {activities.map((activity) => (
                <div key={activity.id} className="relative pl-6">
                  <span className="absolute -left-[13px] top-1 bg-white rounded-full p-0.5">
                    {activity.icon}
                  </span>
                  <div>
                    <div className="font-medium text-[#172033] text-sm">{activity.action}</div>
                    <div className="text-xs text-gray-500 mt-1">{activity.project}</div>
                    <div className="text-xs text-gray-400 mt-1">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDashboard;
