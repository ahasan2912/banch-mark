import AOS from "aos";
import "aos/dist/aos.css";
import { Navigation, Search } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const GuidanceHeader = () => {
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: true,
            offset: 80,
        });

        AOS.refresh();
    }, []);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        console.log("Searching for:", value);
    };
    return (
        <div className="sticky top-8 max-w-7xl mx-auto mt-14" data-aos="fade-down">
            <div className="flex w-full bg-[#1a2c4d] min-h-40 p-6 rounded-lg">
                <div className="flex flex-col w-64 gap-4">
                    <Link to='/guidance' className="flex items-center gap-2 bg-[#89b4f7] text-[#1a2c4d] px-4 py-3 rounded-lg cursor-pointer">
                        <Navigation size={20} className="-rotate-45" />
                        <span className="font-semibold text-base text-[#183A71]">Guidance</span>
                    </Link>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Search size={18} className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search guides..."
                            className="w-full bg-[#2a3c5d] border border-gray-500 text-white placeholder-gray-400 text-sm rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                        />
                    </div>
                </div>
                <div className="flex flex-col ml-5 sm:ml-12 justify-center">
                    <h1 className="text-2xl sm:text-5xl font-medium text-[#89b4f7] mb-2">
                        Guidance
                    </h1>
                    <p className="text-gray-300 text-base sm:text-lg">
                        Choose a topic to view step-by-step instructions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GuidanceHeader;
