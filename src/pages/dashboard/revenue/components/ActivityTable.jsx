import { ChevronRight, User } from "lucide-react";
import { useState } from "react";

const ActivityTable = () => {
    const allData = Array.from({ length: 23 }, (_, i) => ({
        id: `ID ${12345 + i}`,
        name: "David Miller",
        email: "example123@gmail.com",
        date: "Feb 2, 2026",
        amount: "$1200",
    }));

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const totalPages = Math.ceil(allData.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allData.slice(indexOfFirstItem, indexOfLastItem);

    const goToPage = (pageNumber) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
    return (
        <div className="bg-[rgb(17,24,39)] rounded-xl border border-slate-800 shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center px-6 py-5 border-b border-slate-800/50">
                <h2 className="text-xl font-semibold text-[#E9F6FF] tracking-tight">Recent Activity</h2>
                <button className="text-base font-medium text-[#90B5EE] hover:text-blue-300 flex items-center gap-1 transition-colors cursor-pointer">
                    View all <ChevronRight size={16} />
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-sm font-bold text-[#4473BA] uppercase tracking-widest bg-slate-900/20 border-b border-slate-800/50">
                            <th className="px-6 py-4 font-bold">Order ID</th>
                            <th className="px-6 py-4 font-bold">User/Company</th>
                            <th className="px-6 py-4 font-bold text-center">Date</th>
                            <th className="px-6 py-4 font-bold text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/50">
                        {currentItems.map((row, index) => (
                            <tr key={index} className="hover:bg-slate-800/30 transition-all duration-200 group cursor-pointer">
                                <td className="px-6 py-4 text-sm font-medium text-[#E9F6FF] group-hover:text-slate-200">
                                    {row.id}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[#90B5EE] group-hover:border-blue-500/50 transition-colors">
                                            <User size={18} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-[#E9F6FF] leading-none mb-1">{row.name}</div>
                                            <div className="text-sm text-slate-500">{row.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-center text-slate-400">
                                    {row.date}
                                </td>
                                <td className="px-6 py-4 text-sm font-bold text-right text-emerald-400 tabular-nums">
                                    {row.amount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="px-6 py-5 flex flex-col sm:flex-row justify-between items-center border-t border-slate-800 gap-4">
                <p className="text-base text-slate-500">
                    Showing <span className="text-white font-medium">{currentItems.length}</span> of <span className="text-white font-medium">{allData.length}</span>
                </p>
                <div className="flex items-center gap-3">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-lg border border-slate-700 text-sm font-medium text-slate-400 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                        Previous
                    </button>

                    <div className="flex gap-1.5 items-center">
                        {[...Array(totalPages)].map((_, i) => {
                            const pageNum = i + 1;

                            return (
                                <button
                                    key={pageNum}
                                    onClick={() => goToPage(pageNum)}
                                    className={`w-9 h-9 rounded-md flex items-center justify-center text-sm font-bold transition-all ${currentPage === pageNum
                                        ? 'bg-[#1C4480] text-white shadow-lg shadow-blue-900/20'
                                        : 'text-slate-500 hover:bg-slate-800 hover:text-slate-300'
                                        }`}>
                                    {pageNum}
                                </button>
                            );
                        })}
                    </div>

                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-lg border border-slate-700 text-sm font-medium text-slate-400 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ActivityTable;