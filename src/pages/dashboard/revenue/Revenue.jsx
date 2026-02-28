import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import TitleSection from "../components/TitleSection";
import Stats from "./components/Stats";
import ActivityTable from "./components/ActivityTable";

const Revenue = () => {
    const chartData = [
        { name: 'Jan', value: 100 },
        { name: 'Feb', value: 80 },
        { name: 'Mar', value: 65 },
        { name: 'Apr', value: 85 },
        { name: 'May', value: 78 },
        { name: 'Jun', value: 95 },
    ];

    const transactions = Array(8).fill({
        id: "ID 12345",
        user: "David Miller",
        email: "example123@gmail.com",
        date: "Feb 2, 2026",
        amount: "$1200"
    });
    return (
        <div>
            <div className="">
                <TitleSection
                    title='Revenue'
                    description='Track earnings and financial performance'
                />
            </div>
            <div>
                <Stats />
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
                        <span className="flex items-center"><div className="w-3 h-3 bg-[#10b981] rounded-sm mr-2"></div>  {new Date().getFullYear()}</span>
                    </div>
                </div>
                <ActivityTable transactions={transactions} />
            </div>
        </div>
    );
};

export default Revenue;