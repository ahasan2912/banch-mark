
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FeaturesContent = ({ title, descriptionOne, descriptionTwo, descriptionThree }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic",
            once: true,
            offset: 120,
        });

        AOS.refresh();
    }, []);

    return (
        <div className="w-full lg:w-1/2" data-aos="fade-up">
            <h1 className="text-[#90B5EE] text-2xl sm:text-[32px] font-bold mb-2.5">{title}</h1>
            <p className="text-[#CBD5E1] text-sm sm:text-base">{descriptionOne}</p>
            <p className="text-[#CBD5E1] text-sm sm:text-base">{descriptionTwo}</p>
            <p className="text-[#CBD5E1] text-sm sm:text-base">{descriptionThree}</p>
        </div>
    );
};

export default FeaturesContent;
