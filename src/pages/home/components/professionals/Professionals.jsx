import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { images } from "../../../../assets/image";
import HeadingBorder from "../../../../components/shared/HeadingBorder";

const Professionals = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-out-cubic",
            once: true,
            offset: 120,
        });

        AOS.refresh();
    }, []);

    const professionals = [
        {
            title: "Construction Sites",
            image: images.constractImage,
            alt: "construction sites",
        },
        {
            title: "Structural Monitoring",
            image: images.structuralImage,
            alt: "structural monitoring",
        },
        {
            title: "Infrastructure Projects",
            image: images.infructuralImage,
            alt: "infrastructure projects",
        },
        {
            title: "Geotechnical Surveys",
            image: images.geotechnical,
            alt: "geotechnical surveys",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 mt-10 sm:mt-32 pb-10">
            <div data-aos="fade-up">
                <HeadingBorder title="Trusted by Professionals" />
            </div>
            <div className="mt-5 sm:mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {professionals.map((item, index) => (
                    <div
                        key={item.title}
                        data-aos="zoom-in-up"
                        data-aos-delay={index * 120}
                        className="flex flex-col items-center"
                    >
                        <img className="object-fill w-75.5" src={item.image} alt={item.alt} />
                        <div className="flex items-center gap-2 mt-3">
                            <p className="text-[#CBD5E1] text-xl font-bold">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Professionals;
