import { Banknote, FolderOpen, PanelsTopLeft, TrendingUp, User, Users } from "lucide-react";
import TitleSection from "../components/TitleSection";

const Dashboard = () => {
    const stats = [
        { title: 'Total Active Users', value: '1,454', change: '+12%', subtext: 'from last month', icon: <Users size={28} /> },
        { title: 'Total Projects', value: '546', change: null, subtext: '142 live • 14 archived', icon: <PanelsTopLeft size={28} /> },
        { title: 'Total Reports Generated', value: '1,245', change: '+12%', subtext: 'from last month', icon: <FolderOpen size={28} /> },
        { title: 'Total Revenue', value: '$123k', change: '+12%', subtext: 'from last month', icon: <Banknote size={28} /> },
    ];

    const revenueData = [
        { month: 'February', amount: '$48,454', width: '80%' },
        { month: 'December', amount: '$28,454', width: '45%' },
        { month: 'November', amount: '$28,454', width: '95%' },
        { month: 'October', amount: '$28,454', width: '30%' },
    ];
    return (
        <div className="">
            <TitleSection
                title='Movement Monitoring & Reporting System'
                description='Platform overview and project management'
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 mt-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-[#162238] p-6 rounded-lg border border-[#90B5EE]">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="px-3 py-2.5 bg-[#1e2d4a] rounded-md text-blue-400">{stat.icon}</div>
                            <h3 className="text-lg text-[#90B5EE] font-medium">{stat.title}</h3>
                        </div>
                        <div className="text-3xl font-bold mb-2 text-white">{stat.value}</div>
                        <div className="text-base">
                            {stat.change && <span className="text-emerald-400 mr-1">{stat.change}</span>}
                            <span className="text-gray-500">{stat.subtext}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <section className="bg-[#162238] rounded-xl border border-gray-800 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-[#E9F6FF]">Recent Activity</h2>
                        <button className="text-[#90B5EE] text-lg flex items-center gap-1 hover:underline cursor-pointer">
                            See all <span className="text-xl">→</span>
                        </button>
                    </div>
                    <div className="space-y-4">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#1e2d4a] border border-gray-700 flex items-center justify-center text-[#90B5EE]"><User size={22} /></div>
                                <div>
                                    <p className="text-lg">
                                        <span className="font-bold text-[#E9F6FF]">Benchmark</span>
                                        <span className="text-gray-400 ml-1 text-base">requested a project report.</span>
                                    </p>
                                    <p className="text-sm text-[#E9F6FF] mt-1">2 min ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="bg-[#162238] rounded-xl border border-gray-800 p-6">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-xl font-semibold text-[#E9F6FF]">Revenue Overview</h2>
                        <button className="text-[#90B5EE] text-lg flex items-center gap-1 hover:underline cursor-pointer">
                            See all <span>→</span>
                        </button>
                    </div>
                    <div className="flex items-baseline gap-4 mb-6">
                        <span className="text-3xl font-bold text-[#E9F6FF]">$123,000</span>
                        <span className="text-[#94A3B8] text-lg font-semibold">Total revenue</span>
                        <span className="text-emerald-400 text-base flex items-center gap-2 mt-2"><TrendingUp size={28} /> +12% this month</span>
                    </div>

                    <div className="space-y-6">
                        {revenueData.map((item, index) => (
                            <div key={index}>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-[#E9F6FF] text-lg font-semibold">{item.month}</span>
                                    <span className="text-[#E9F6FF] text-lg font-semibold">{item.amount}</span>
                                </div>
                                <div className="w-full bg-gray-800 rounded-full h-2">
                                    <div
                                        className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                                        style={{ width: item.width }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Dashboard;

