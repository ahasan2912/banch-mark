import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { tools } from "../../lib/data";

const Card = ({ image, title, description, index }) => (
    <div
        data-aos="fade-up"
        data-aos-delay={index * 150}
        data-aos-duration="800"
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
        className="group relative rounded-lg bg-[#1A2C4D] p-6 hover:border-blue-400/50 transition-all duration-300 cursor-pointer overflow-hidden shadow-xl flex justify-center items-center"
    >
        <div className="flex gap-6 relative z-10">
            <div className="shrink-0 w-32 h-20 rounded-lg border border-blue-400/30 flex items-center justify-center relative shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all">
                <img src={image} alt={`${image}`} />
            </div>

            <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#6994D4] mb-2 group-hover:text-white transition-colors">
                    {title}
                </h3>

                <p className="text-base font-medium text-[#CBD5E1] leading-relaxed max-w-60">
                    {description}
                </p>
            </div>
        </div>
    </div>
);

const GuidanceHome = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 800,
            offset: 80,
        });

        AOS.refresh();
    }, []);

    return (
        <div className="selection:bg-blue-500/15 flex justify-center mt-2 min-h-[74vh] rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-7xl w-full">
                {tools.map((tool, index) => (
                    <Card key={index} index={index} {...tool} />
                ))}
            </div>
        </div>
    );
};

export default GuidanceHome;