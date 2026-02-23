
const FeaturesContent = ({ title, descriptionOne, descriptionTwo, descriptionThree }) => {
    return (
        <div className="w-full lg:w-1/2">
            <h1 className="text-[#90B5EE] text-2xl sm:text-[32px] font-bold mb-2.5">{title}</h1>
            <p className="text-[#CBD5E1] text-sm sm:text-base">{descriptionOne}</p>
            <p className="text-[#CBD5E1] text-sm sm:text-base">{descriptionTwo}</p>
            <p className="text-[#CBD5E1] text-sm sm:text-base">{descriptionThree}</p>
        </div>
    );
};

export default FeaturesContent;