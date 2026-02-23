const HeadingBorder = ({ title }) => {
    return (
        <div className="flex items-center justify-center gap-5">
            <div className="border border-[#90B5EE] hidden sm:block sm:w-full"></div>
            <h1 className='text-[#90B5EE] text-2xl sm:text-[40px] font-bold text-wrap sm:text-nowrap text-center'>{title}</h1>
            <div className="border border-[#90B5EE] hidden sm:block sm:w-full"></div>
        </div>
    );
};

export default HeadingBorder;