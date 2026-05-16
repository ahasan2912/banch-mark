import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div
            className="min-h-screen w-full text-white relative overflow-hidden">
            <div className="absolute -right-100 inset-0 opacity-10 bg-image z-50 -rotate-20 bg-center lg:bg-right bg-cover lg:bg-contain pointer-events-none"></div>

            <main className="relative z-10 max-w-7xl mx-auto px-4 pb-20 pt-28 sm:pt-32">
                <div className="max-w-185 flex flex-col justify-center sm:h-[70vh]">
                    <h1 className="text-[32px] sm:text-5xl md:text-[64px] font-bold leading-tight text-[#90B5EE]">
                        Movement Monitoring & Reporting Platform
                    </h1>
                    <p className="mt-5 text-[#CBD5E1] text-xl font-medium leading-relaxed max-w-170.5">
                        Automate your movement data analysis and generate detailed PDF reports with ease.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <Link to='/report-generation' className="bg-[#1A3155]/80 backdrop-blur-md 
                            px-6 py-3 rounded-lg font-semibold 
                            border border-white/20 
                            hover:scale-105 transition-all duration-300 cursor-pointer">
                            Request Demo
                        </Link>
                        <Link to='/' className="bg-[#B7D8FF]/90 text-[#1A3155] 
                            px-6 py-3 rounded-lg font-bold 
                            hover:scale-105 transition-all duration-300 cursor-pointer">
                            View Sample Reports
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Banner;