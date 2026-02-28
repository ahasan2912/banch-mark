import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, User } from 'lucide-react';

const Dashboard = () => {
  const chartData = [
    { name: 'Jan', value: 100 },
    { name: 'Feb', value: 80 },
    { name: 'Mar', value: 15 },
    { name: 'Apr', value: 25 },
    { name: 'May', value: 78 },
    { name: 'Jun', value: 50 },
  ];

  const transactions = Array(8).fill({
    id: "ID 12345",
    user: "David Miller",
    email: "example123@gmail.com",
    date: "Feb 2, 2026",
    amount: "$1200"
  });
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white p-8 font-sans">

      {/* --- Stat Cards --- */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Revenue", value: "$144,454", trend: "+12%", up: true },
          { label: "Monthly Recurring", value: "$144,454", trend: "+12%", up: true },
          { label: "Average Per User", value: "$144,454", trend: "+12%", up: true },
          { label: "Total Revenue", value: "$144,454", trend: "+12%", up: false },
        ].map((card, i) => (
          <div key={i} className="bg-[#111827] p-6 rounded-xl border border-gray-800">
            <p className="text-gray-400 text-sm mb-2">{card.label}</p>
            <h2 className="text-2xl font-bold mb-2">{card.value}</h2>
            <div className={`flex items-center text-xs ${card.up ? 'text-emerald-400' : 'text-rose-400'}`}>
              {card.up ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
              {card.trend} from last month
            </div>
          </div>
        ))}
      </div>

      {/* --- Chart Section --- */}
      <div className="bg-[#111827] p-6 rounded-xl border border-gray-800 mb-8">
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} tickFormatter={(value) => `$${value}k`} />
              <Bar dataKey="value" fill="#10b981" radius={[10, 10, 10, 10]} barSize={60} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center mt-4 text-sm text-gray-400 italic">
          <span className="flex items-center"><div className="w-3 h-3 bg-[#10b981] rounded-sm mr-2"></div> 2020</span>
        </div>
      </div>

      {/* --- Recent Activity Table --- */}
      <div className="bg-[#111827] rounded-xl border border-gray-800 overflow-hidden">
        <div className="p-6 flex justify-between items-center border-b border-gray-800">
          <h3 className="font-semibold">Recent Activity</h3>
          <button className="text-blue-400 text-sm hover:underline">View all →</button>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="text-blue-400 text-xs border-b border-gray-800">
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
    </div>
  );
};

export default Dashboard;