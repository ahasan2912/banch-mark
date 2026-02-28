import { User } from "lucide-react";

const ActivityTable = ({transactions}) => {
    return (
        <div className="bg-[#111827] rounded-xl border border-gray-800 overflow-x-auto pb-10">
            <div className="p-6 flex justify-between items-center border-b border-gray-800">
                <h3 className="font-semibold text-[#E9F6FF] text-xl">Recent Activity</h3>
                <button className="text-[#90B5EE] text-base hover:underline">View all →</button>
            </div>
            <table className="w-full text-left">
                <thead>
                    <tr className="text-[#4473BA] text-base border-b border-gray-800">
                        <th className="p-4 font-medium">Order ID</th>
                        <th className="p-4 font-medium">User/Company</th>
                        <th className="p-4 font-medium text-center">Date</th>
                        <th className="p-4 font-medium text-right">Amount</th>
                    </tr>
                </thead>
                <tbody className="text-sm text-gray-300">
                    {transactions.map((t, i) => (
                        <tr key={i} className="hover:bg-[#1f2937]/50 transition-colors">
                            <td className="p-4">{t.id}</td>
                            <td className="p-4 flex items-center gap-3">
                                <div className="bg-blue-900/30 p-2 rounded-full text-blue-400"><User size={16} /></div>
                                <div>
                                    <div className="font-medium text-white">{t.user}</div>
                                    <div className="text-xs text-gray-500">{t.email}</div>
                                </div>
                            </td>
                            <td className="p-4 text-center text-gray-400">{t.date}</td>
                            <td className="p-4 text-right text-emerald-400 font-semibold">{t.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Footer */}
            <div className="p-4 border-t border-gray-800 flex justify-between items-center text-xs text-gray-500">
                <span>Showing 8 of 1,254</span>
                <div className="flex gap-2">
                    <button className="px-3 py-1 bg-[#1f2937] rounded">Previous</button>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
                    <button className="px-3 py-1 bg-[#1f2937] rounded">2</button>
                    <button className="px-3 py-1 bg-[#1f2937] rounded">Next</button>
                </div>
            </div>
        </div>
    );
};

export default ActivityTable;