const TitleSection = ({ title, description }) => {
    
    return (
        <div>
            <h1 className="text-[#90B5EE] text-2xl sm:text-[32px] font-bold">{title}</h1>
            <p className="text-[#64748B] text-lg sm:text-xl font-medium">{description}</p>
        </div>
    );
};

export default TitleSection;