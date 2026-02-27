import React, { useState } from 'react';
import { Plus, MoreVertical, Trash2, Copy, X } from 'lucide-react';

const EventTable = ({ events, onAddClick, onDelete }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="max-w-6xl mx-auto overflow-hidden shadow-xl border-2 border-[#B7D8FF] rounded-md">
      <div className="grid grid-cols-6 bg-[#1e293b] p-4 text-slate-200 font-semibold items-center">
        <div>Event Date</div>
        <div className='col-span-2'>Event Description</div>
        <div>Weather</div>
        <div>Surveyor</div>
        <div className="flex justify-end">
          <button onClick={onAddClick} className="hover:scale-110 transition-transform">
            <Plus size={24} />
          </button>
        </div>
      </div>
      <div className="bg-[#f0f9ff]">
        {events.map((event) => (
          <div key={event.id} className="grid grid-cols-6 p-4 border-b border-blue-100 last:border-0 items-start text-slate-700 relative">
            <div className="text-base">{event.date}</div>
            <div className="text-base col-span-2">{event.description}</div>
            <div className="text-base">{event.weather}</div>
            <div className="text-base">{event.surveyor}</div>
            <div className="flex justify-end relative">
              <button onClick={() => setActiveMenu(activeMenu === event.id ? null : event.id)}>
                <MoreVertical size={18} className="text-gray-700 hover:text-slate-800" />
              </button>
              {activeMenu === event.id && (
                <div className="absolute right-0 -top-14 z-20 w-48 bg-[#f0f9ff] border border-blue-200 shadow-xl rounded-md">
                  <div className="flex justify-between items-center px-3 py-1.5 border-b border-blue-50 bg-blue-50/50">
                    <span className="text-[10px] tracking-widest text-slate-400"></span>
                    <X size={18} className="cursor-pointer text-black" onClick={() => setActiveMenu(null)} />
                  </div>
                  <button 
                    onClick={() => { onDelete(event.id); setActiveMenu(null); }}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-black hover:bg-blue-100 transition-colors -mt-2"
                  >
                    <Trash2 size={16} /> Delete Event
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-blue-100 border-t border-blue-50 transition-colors">
                    <Copy size={16} /> Copy Event
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventTable;