import HeadingTitle from "../../../../components/shared/HeadingTitle";
import { steps } from "../../../lib/data";
import StepCard from "./StepCard";

const Works = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 -mt-50 sm:-mt-12">
            <HeadingTitle
                title='How it works'
                description='Understand the process behind automated movement monitoring stage comparisons, and report generation'
                maxWidth='max-w-173.75'
                position='mx-auto'
                text='text-center'
            />
            <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step) => (
                    <StepCard key={step.number} step={step} />
                ))}
            </div>
        </div>
    );
};

export default Works;