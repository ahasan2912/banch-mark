import { TrendingDown, TrendingUp } from "lucide-react";

const Stats = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            {[
                { label: "Total Revenue", value: "$144,454", trend: "+12%", up: true },
                { label: "Monthly Recurring", value: "$144,454", trend: "+12%", up: true },
                { label: "Average Per User", value: "$144,454", trend: "+12%", up: true },
                { label: "Total Revenue", value: "$144,454", trend: "+12%", up: false },
            ].map((card, i) => (
                <div key={i} className="bg-[#111827] p-6 rounded-xl border border-gray-800">
                    <p className="text-[#94A3B8] text-lg mb-2">{card.label}</p>
                    <h2 className="text-3xl text-[#E9F6FF] font-bold mb-2">{card.value}</h2>
                    <div className={`flex items-center text-base ${card.up ? 'text-[#10B77F]' : 'text-rose-400'}`}>
                        {card.up ? <TrendingUp size={20} className="mr-1" /> : <TrendingDown size={20} className="mr-1" />}
                        {card.trend} from last month
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Stats;