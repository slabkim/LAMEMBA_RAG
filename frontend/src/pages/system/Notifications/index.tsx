import React, { useState } from 'react';
import { FiBell, FiFileText, FiBookOpen, FiEdit3, FiSettings, FiCheck, FiCheckCircle } from 'react-icons/fi';

type NotifType = 'Document' | 'DED' | 'Review' | 'System';

interface Notification {
  id: string;
  type: NotifType;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const DUMMY_NOTIFS: Notification[] = [
  { id: '1', type: 'DED', title: 'DED Generation Complete', message: 'DED for Project Kriteria 1 is ready for review.', time: '10 mins ago', read: false },
  { id: '2', type: 'Review', title: 'New Feedback Added', message: 'Reviewer Budi submitted feedback on DED Kriteria 2.', time: '1 hour ago', read: false },
  { id: '3', type: 'Document', title: 'Document Uploaded', message: 'Pedoman_Akademik.pdf was successfully processed.', time: '3 hours ago', read: true },
  { id: '4', type: 'System', title: 'System Maintenance', message: 'Scheduled maintenance will occur on Saturday at 2 AM.', time: '1 day ago', read: true },
];

export default function Notifications() {
  const [filter, setFilter] = useState<'All' | 'Unread'>('All');
  const [notifs, setNotifs] = useState<Notification[]>(DUMMY_NOTIFS);

  const getIcon = (type: NotifType) => {
    switch(type) {
      case 'Document': return <FiFileText className="text-blue-500" />;
      case 'DED': return <FiBookOpen className="text-purple-500" />;
      case 'Review': return <FiEdit3 className="text-green-500" />;
      case 'System': return <FiSettings className="text-gray-500" />;
      default: return <FiBell className="text-[#163A5F]" />;
    }
  };

  const markAsRead = (id: string) => {
    setNotifs(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllAsRead = () => {
    setNotifs(prev => prev.map(n => ({ ...n, read: true })));
  };

  const filteredNotifs = filter === 'All' ? notifs : notifs.filter(n => !n.read);

  return (
    <div className="p-6 text-[#172033] min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FiBell className="text-[#163A5F]" /> Pusat Notifikasi
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
              <button 
                onClick={() => setFilter('All')} 
                className={`px-4 py-2 text-sm font-medium ${filter === 'All' ? 'bg-[#163A5F] text-white' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                All
              </button>
              <button 
                onClick={() => setFilter('Unread')} 
                className={`px-4 py-2 text-sm font-medium border-l border-gray-200 ${filter === 'Unread' ? 'bg-[#163A5F] text-white' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                Unread
              </button>
            </div>
            <button 
              onClick={markAllAsRead}
              className="flex items-center gap-2 text-sm font-medium text-[#163A5F] hover:bg-[#163A5F] hover:bg-opacity-10 px-3 py-2 rounded transition-colors border border-[#163A5F]"
            >
              <FiCheckCircle /> Tandai semua dibaca
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          {filteredNotifs.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <FiCheckCircle className="mx-auto text-4xl mb-3 text-gray-300" />
              <p>No notifications found.</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {filteredNotifs.map(notif => (
                <li key={notif.id} className={`p-4 flex gap-4 transition-colors ${notif.read ? 'bg-white opacity-70' : 'bg-blue-50/30'}`}>
                  <div className="mt-1 p-2 bg-gray-100 rounded-full h-fit">
                    {getIcon(notif.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className={`font-semibold text-sm ${!notif.read ? 'text-[#163A5F]' : ''}`}>{notif.title}</h3>
                      <span className="text-xs text-gray-400 whitespace-nowrap ml-2">{notif.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{notif.message}</p>
                  </div>
                  {!notif.read && (
                    <button 
                      onClick={() => markAsRead(notif.id)}
                      title="Mark as read"
                      className="text-gray-400 hover:text-[#163A5F] p-2 h-fit rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <FiCheck />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
