import { steps } from "../../lib/data";
import StepCard from "./StepCard";

const Works = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 -mt-72 md:-mt-12">
            <div className="max-w-173.75 mx-auto text-center">
                <h1 className="text-[#90B5EE] text-2xl sm:text-[40px] font-bold">How it works</h1>
                <p className="text-[#CBD5E1] text-base sm:text-xl font-medium">Understand the process behind automated movement monitoring stage comparisons, and report generation</p>
            </div>
            <div className="mt-16 md:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step) => (
                    <StepCard key={step.number} step={step} />
                ))}
            </div>
        </div>
    );
};

export default Works;