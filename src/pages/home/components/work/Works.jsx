import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeadingTitle from "../../../../components/shared/HeadingTitle";
import { steps } from "../../../lib/data";
import StepCard from "./StepCard";

const Works = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-out-cubic",
            once: true,
            offset: 120,
        });

        AOS.refresh();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 -mt-50 sm:-mt-12">
            <div data-aos="fade-up">
                <HeadingTitle
                    title="How it works"
                    description="Understand the process behind automated movement monitoring stage comparisons, and report generation"
                    maxWidth="max-w-173.75"
                    position="mx-auto"
                    text="text-center"
                />
            </div>
            <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                    <div
                        key={step.number}
                        data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                        data-aos-delay={index * 120}
                    >
                        <StepCard step={step} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Works;
