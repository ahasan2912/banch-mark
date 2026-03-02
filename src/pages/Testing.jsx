import React from 'react';
import { Folder, ArrowLeft } from 'lucide-react';

const Dashboard = () => {
  const projects = [
    { title: 'Smart City Infrastructure', client: 'Urban Dev Corp', time: '2 HOURS AGO' },
    { title: 'Coastal Erosion Monitor', client: 'Gov Environment', time: '1 DAY AGO' },
    { title: 'Bridge Stress Analysis', client: 'Transport Authority', time: '3 MONTHS AGO' },
    { title: 'Telecom Tower Survey', client: 'Nexus Connect', time: '5 HOURS AGO' },
  ];

  return (
    <div className="bg-[#0f172a] text-slate-300 p-4 sm:p-8">
      <div className='max-w-7xl mx-auto'>
        <button className="flex items-center text-sm text-slate-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Team Overview
        </button>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-80 bg-[#1e293b]/50 border border-slate-800 rounded-2xl p-8 flex flex-col items-center">
          <div className="w-32 h-32 rounded-full border-2 border-slate-700 bg-slate-800 mb-6 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-[#111827]"></div>
          </div>

          <h1 className="text-2xl font-semibold text-white mb-1">Sarah Chen</h1>
          <p className="text-blue-400 text-sm font-medium mb-4">Senior Designer</p>
          <p className="text-slate-500 text-xs mb-8">sarah.c@benchmark.com</p>

          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="bg-[#0f172a] p-4 rounded-xl border border-slate-800 text-center">
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Live</p>
              <p className="text-2xl font-bold text-white">5</p>
            </div>
            <div className="bg-[#0f172a] p-4 rounded-xl border border-slate-800 text-center">
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Archive</p>
              <p className="text-2xl font-bold text-white">12</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-white">Project List</h2>
            <span className="text-[10px] px-3 py-1 bg-[#1e293b] border border-slate-700 rounded-full text-slate-400 uppercase">
              4 Projects Total
            </span>
          </div>

          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group flex items-center bg-[#1e293b]/40 border border-slate-800 p-5 rounded-xl hover:bg-[#1e293b]/60 transition-all cursor-pointer"
              >
                <div className="bg-[#1e293b] p-3 rounded-xl border border-slate-700 mr-5 text-[#51A2FF]
                  group-hover:bg-[#2d3c55] group-hover:text-white transition-colors">
                  <Folder size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium mb-1">{project.title}</h3>
                  <div className="flex items-center text-xs text-slate-500">
                    <span>{project.client}</span>
                    <span className="mx-2 text-slate-700">•</span>
                    <span className="flex items-center">
                      <span className="mr-1">🕒</span> {project.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;