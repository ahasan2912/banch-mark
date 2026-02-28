const Stats = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-4 mt-8">
            {[
                { label: 'Total Users', value: '1,454', color: 'text-[#90B5EE]', bg: 'bg-[#1e293b]' },
                { label: 'Active', value: '1,254', color: 'text-[#10B77F]', bg: 'bg-[#1e293b]' },
                { label: 'Blocked', value: '200', color: 'text-[#FF777A]', bg: 'bg-[#1e293b]' },
                { label: 'Pending', value: '754', color: 'text-[#FFCC00]', bg: 'bg-[#1e293b]' },
            ].map((stat, idx) => (
                <div key={idx} className={`${stat.bg} rounded-full py-4 px-8 flex justify-center items-center gap-3 border border-slate-800 shadow-xl`}>
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                    <span className={`${stat.color} text-[#90B5EE] text-base font-medium`}>{stat.label}</span>
                </div>
            ))}
        </div>
    );
};

export default Stats;