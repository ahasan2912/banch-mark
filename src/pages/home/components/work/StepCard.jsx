
const StepCard = ({ step }) => {
    const { number, title, description, image, isOffset } = step || {};
    return (
        <div className={`relative flex flex-col p-4 rounded-lg bg-[#0a0f1e] border border-slate-800 shadow-xl transition-transform hover:scale-105 h-fit ${isOffset ? 'mt-40' : ''}`}>
            <div className="mb-7">
                <img className="w-40 h-25" src={image} alt={`work-${image}`} />
            </div>
            <div className="flex items-start gap-4">
                <div className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full border border-slate-600 text-sm font-semibold text-white">
                    {number}
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#6994D4] tracking-tight">{title}</h3>
                    <p className="text-[#CBD5E1] text-[15px] font-medium leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StepCard;