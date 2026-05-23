const Stats = ({ stat, index }) => {
    const changeClass = stat.trendDirection === "down" ? "text-rose-400" : "text-emerald-400";

    return (
        <div key={index} className="bg-[#162238] p-6 rounded-lg border border-[#90B5EE]">
            <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-2.5 bg-[#1e2d4a] rounded-md text-blue-400">{stat.icon}</div>
                <h3 className="text-lg text-[#90B5EE] font-medium">{stat.title}</h3>
            </div>
            <div className="text-3xl font-bold mb-2 text-white">{stat.value}</div>
            <div className="text-base">
                {stat.change && <span className={`${changeClass} mr-1`}>{stat.change}</span>}
                <span className="text-gray-500">{stat.subtext}</span>
            </div>
        </div>
    );
};

export default Stats;
