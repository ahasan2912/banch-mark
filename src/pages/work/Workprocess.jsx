import HeadingTitle from "../../components/shared/HeadingTitle";
import StepCard from "../home/components/work/StepCard";
import { steps } from "../lib/data";

const Workprocess = () => {
    return (
        <div className="selection:bg-blue-500/15" style={{
            background: 'radial-gradient(circle at 20% 30%, #1a2332 0%, #0a0c10 100%)'
        }}>
            <div
                className="min-h-screen w-full text-white relative overflow-hidden">
                <div className="absolute -right-100 inset-0 opacity-10 bg-image z-50 -rotate-20 bg-center lg:bg-right bg-cover lg:bg-contain pointer-events-none bg-fixed"></div>
                <div className="max-w-7xl mx-auto px-4 pb-20 pt-24 sm:pt-32">
                    <HeadingTitle
                        title='How it Works'
                        description='Understand the process behind automated movement monitoring stage comparisons, and report generation'
                        maxWidth='max-w-173.75'
                        position=''
                        text='text-left'
                    />
                    {/* 1st features */}
                    <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step) => (
                            <StepCard key={step.number} step={step} />
                        ))}
                    </div>
                </div>
                <div className="pt-10 lg:pt-16 flex flex-col sm:flex-row gap-4 sm:justify-center">
                    <button className="bg-[#1A3155]/80 text-white backdrop-blur-md 
                            px-6 py-3 rounded-md font-semibold 
                            border border-white/20 
                            hover:scale-105 transition-all duration-300 cursor-pointer">
                        Start Monitoring
                    </button>
                    <button className="bg-[#B7D8FF]/90 text-[#1A3155] 
                            px-6 py-3 rounded-md font-bold 
                            hover:scale-105 transition-all duration-300 cursor-pointer">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Workprocess;