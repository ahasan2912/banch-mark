const HeadingTitle = ({ title, description, maxWidth, position,subtitle, text }) => {
    return (
        <div className={`${maxWidth} ${position} ${text}`}>
            <h1 className="text-[#90B5EE] text-2xl sm:text-[40px] font-bold">{title} <span className="text-white">{subtitle}</span></h1>
            <p className="text-[#CBD5E1] text-base sm:text-xl font-medium mt-2">{description}</p>
        </div>
    );
};

export default HeadingTitle;