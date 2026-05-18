import React, { useState } from 'react';
import { Plus, MoreVertical, Trash2, Copy, X } from 'lucide-react';

const EventTable = ({ events, onAddClick, onDelete }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="overflow-x-auto shadow-xl border-2 border-[#B7D8FF] rounded-md custom-scrollbar w-full">
      <table className="w-full text-left border-collapse">
        {/* Table Header */}
        <thead className="bg-[#1e293b] text-slate-200 font-semibold">
          <tr>
            <th className="p-4 font-semibold">Event Date</th>
            <th className="p-4 font-semibold col-span-2" colSpan="2">Event Description</th>
            <th className="p-4 font-semibold">Weather</th>
            <th className="p-4 font-semibold">Surveyor</th>
            <th className="p-4 text-right">
              <button onClick={onAddClick} className="hover:scale-110 transition-transform inline-block">
                <Plus size={24} />
              </button>
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-[#f0f9ff]">
          {events.map((event) => (
            <tr 
              key={event.id} 
              className="border-b border-blue-100 last:border-0 text-slate-700 align-top"
            >
              <td className="p-4 text-base whitespace-nowrap">{event.date}</td>
              <td className="p-4 text-base" colSpan="2">{event.description}</td>
              <td className="p-4 text-base">{event.weather}</td>
              <td className="p-4 text-base">{event.surveyor}</td>
              <td className="p-4 text-right relative">
                <button 
                  onClick={() => setActiveMenu(activeMenu === event.id ? null : event.id)}
                  className="inline-block"
                >
                  <MoreVertical size={18} className="text-gray-700 hover:text-slate-800" />
                </button>

                {/* Dropdown Menu */}
                {activeMenu === event.id && (
                  <div className="absolute right-4 -top-14 z-20 w-48 bg-[#f0f9ff] border border-blue-200 shadow-xl rounded-md text-left">
                    <div className="flex justify-between items-center px-3 py-1.5 border-b border-blue-50 bg-blue-50/50">
                      <span className="text-[10px] tracking-widest text-slate-400 uppercase font-bold">Options</span>
                      <X 
                        size={18} 
                        className="cursor-pointer text-black hover:opacity-70" 
                        onClick={() => setActiveMenu(null)} 
                      />
                    </div>
                    <button 
                      onClick={() => { onDelete(event.id); setActiveMenu(null); }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-black hover:bg-blue-100 transition-colors"
                    >
                      <Trash2 size={16} /> Delete Event
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-blue-100 border-t border-blue-50 transition-colors">
                      <Copy size={16} /> Copy Event
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventTable;