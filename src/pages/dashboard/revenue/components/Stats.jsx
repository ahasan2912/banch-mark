import { TrendingDown, TrendingUp } from "lucide-react";

const Stats = ({ cards = [] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            {cards.map((card) => {
                const isDown = card.trend?.direction === "down";

                return (
                    <div key={card.label} className="bg-[#111827] p-6 rounded-xl border border-gray-800">
                        <p className="text-[#94A3B8] text-lg mb-2">{card.label}</p>
                        <h2 className="text-3xl text-[#E9F6FF] font-bold mb-2">{card.value}</h2>
                        {card.trend ? (
                            <div className={`flex items-center text-base ${isDown ? "text-rose-400" : "text-[#10B77F]"}`}>
                                {isDown ? <TrendingDown size={20} className="mr-1" /> : <TrendingUp size={20} className="mr-1" />}
                                {card.trend.value} {card.suffix}
                            </div>
                        ) : (
                            <div className="text-base text-slate-500">Current period</div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Stats;
