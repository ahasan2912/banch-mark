import AOS from "aos";
import "aos/dist/aos.css";
import { Check } from "lucide-react";
import { useEffect } from "react";
import { images } from "../../../../assets/image";
import HeadingBorder from "../../../../components/shared/HeadingBorder";

const Reports = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-out-cubic",
            once: true,
            offset: 120,
        });

        AOS.refresh();
    }, []);

    const reportItems = [
        {
            title: "Automated Comparisons",
            image: images.deviationImage,
            alt: "deviation report",
            animation: "fade-right",
        },
        {
            title: "Graphical Analysis",
            image: images.analysisImage,
            alt: "graphical analysis",
            animation: "fade-up",
        },
        {
            title: "Custom Alerts",
            image: images.alartImage,
            alt: "custom alerts",
            animation: "fade-left",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 mt-5 sm:mt-32 pb-10">
            <div data-aos="fade-up">
                <HeadingBorder title="Detailed Reports & Alerts" />
            </div>
            <div className="mt-5 sm:mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {reportItems.map((item, index) => (
                    <div
                        key={item.title}
                        data-aos={item.animation}
                        data-aos-delay={index * 140}
                        className="flex flex-col items-center"
                    >
                        <img className="object-fill" src={item.image} alt={item.alt} />
                        <div className="flex items-center gap-2 mt-3">
                            <Check className="text-[#CBD5E1] text-xl font-bold" />
                            <p className="text-[#CBD5E1] text-xl font-bold">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reports;
