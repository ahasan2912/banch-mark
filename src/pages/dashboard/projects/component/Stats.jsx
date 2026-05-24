const Stats = ({ value, label }) => {
    return (
        <div className="bg-[#1e293b] rounded-full py-3.5 px-8 flex justify-center items-center gap-3 border border-slate-800 shadow-xl">
            <span className="text-2xl font-bold text-white">
                {String(value ?? 0).padStart(2, "0")}
            </span>
            <span className="text-base font-medium">{label}</span>
        </div>
    );
};

export default Stats;
