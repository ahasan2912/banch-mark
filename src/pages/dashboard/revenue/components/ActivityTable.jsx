import { ChevronRight, User } from "lucide-react";
import { formatCurrency, formatDate, getInitials } from "../utils";

const ActivityTable = ({ transactions = [], meta = {}, currentPage, setCurrentPage }) => {
    const totalPages = Math.max(meta.totalPage || 1, 1);

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
                            <th className="px-6 py-4 font-bold text-center">Status</th>
                            <th className="px-6 py-4 font-bold text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/50">
                        {transactions.map((row) => (
                            <tr key={row.id} className="hover:bg-slate-800/30 transition-all duration-200 group">
                                <td className="px-6 py-4 text-sm font-medium text-[#E9F6FF] group-hover:text-slate-200">
                                    {row.orderId}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 overflow-hidden rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[#90B5EE] group-hover:border-blue-500/50 transition-colors">
                                            {row.user?.profileImage ? (
                                                <img src={row.user.profileImage} alt={row.user?.name || "User"} className="h-full w-full object-cover" />
                                            ) : row.user?.name ? (
                                                <span className="text-sm font-bold">{getInitials(row.user.name)}</span>
                                            ) : (
                                                <User size={18} />
                                            )}
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-[#E9F6FF] leading-none mb-1">{row.user?.name || "Unknown user"}</div>
                                            <div className="text-sm text-slate-500">{row.user?.company?.name || row.user?.email || "No company"}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-center text-slate-400">
                                    {formatDate(row.date)}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-400">
                                        {row.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm font-bold text-right text-emerald-400 tabular-nums">
                                    {formatCurrency(row.amountDisplay, row.currency)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="px-6 py-5 flex justify-end border-t border-slate-800">
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
                                    onClick={() => setCurrentPage(pageNum)}
                                    className={`w-9 h-9 rounded-md flex items-center justify-center text-sm font-bold transition-all ${
                                        currentPage === pageNum
                                            ? "bg-[#1C4480] text-white shadow-lg shadow-blue-900/20"
                                            : "text-slate-500 hover:bg-slate-800 hover:text-slate-300"
                                    }`}
                                >
                                    {pageNum}
                                </button>
                            );
                        })}
                    </div>

                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-lg border border-slate-700 text-sm font-medium text-slate-400 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ActivityTable;
