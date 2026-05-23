const Stats = ({ stats = [] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {stats.map((stat) => (
                <div key={stat.label} className="bg-[#1e293b] rounded-full py-4 px-8 flex justify-center items-center gap-3 border border-slate-800 shadow-xl">
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                    <span className={`${stat.color} text-base font-medium`}>{stat.label}</span>
                </div>
            ))}
        </div>
    );
};

export default Stats;
