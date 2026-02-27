import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const ProjectDashboard = () => {
  // 1. Generate 50 rows of mock data
  const allData = Array.from({ length: 50 }, (_, i) => ({
    id: 1234 + i,
    projectName: "London Bridge London",
    lastSurveyed: "01/02/2026",
    surveyCount: 2,
  }));

  // 2. Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(allData.length / rowsPerPage);

  // 3. Logic to get current page data
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = allData.slice(indexOfFirstRow, indexOfLastRow);

  // 4. Page Change Handlers
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-slate-900 min-h-screen">
      <div className="overflow-hidden rounded-xl border border-blue-400/30 shadow-2xl">
        <table className="w-full text-left border-collapse bg-[#e0f2fe]">
          <thead>
            <tr className="bg-[#1e293b] text-blue-100 text-sm uppercase tracking-wider">
              <th className="px-6 py-5 border-b border-blue-400/20 font-semibold">ID</th>
              <th className="px-6 py-5 border-b border-blue-400/20 font-semibold">Project Name</th>
              <th className="px-6 py-5 border-b border-blue-400/20 font-semibold text-center">Last Surveyed</th>
              <th className="px-6 py-5 border-b border-blue-400/20 font-semibold text-right pr-16">Survey Count</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row) => (
              <tr 
                key={row.id} 
                className="hover:bg-blue-200/50 transition-colors border-b border-blue-200 last:border-b-0"
              >
                <td className="px-6 py-4 text-slate-700 font-medium">{row.id}</td>
                <td className="px-6 py-4 text-slate-600">{row.projectName}</td>
                <td className="px-6 py-4 text-slate-600 text-center">{row.lastSurveyed}</td>
                <td className="px-6 py-4 text-slate-600">
                  <div className="flex items-center justify-end gap-10">
                    <span className="font-medium">{row.surveyCount}</span>
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 rounded border-blue-300 text-blue-600 focus:ring-blue-500 cursor-pointer accent-blue-600"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Dynamic Pagination Bar */}
        <div className="bg-[#1e293b] px-6 py-4 flex items-center justify-between border-t border-blue-400/30">
          <div className="text-sm text-blue-300">
            Showing <span className="text-white font-bold">{indexOfFirstRow + 1}</span> to <span className="text-white font-bold">{Math.min(indexOfLastRow, allData.length)}</span> of <span className="text-white font-bold">{allData.length}</span> entries
          </div>
          
          <div className="flex items-center gap-2">
            {/* Previous Page */}
            <button 
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-slate-800 text-blue-400 hover:bg-slate-700 disabled:opacity-30 transition-all border border-slate-700"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Page Numbers */}
            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button 
                  key={page} 
                  onClick={() => paginate(page)}
                  className={`w-9 h-9 rounded-lg text-sm font-bold transition-all border ${
                    currentPage === page 
                      ? 'bg-[#4473BA] text-white border-blue-500 shadow-md shadow-blue-500/20' 
                      : 'text-blue-300 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Next Page */}
            <button 
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-slate-800 text-blue-400 hover:bg-slate-700 disabled:opacity-30 transition-all border border-slate-700"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;