import { Navigation, Search } from "lucide-react";
import { useState } from "react";

const GuidanceHeader = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        console.log("Searching for:", value);
    };
    return (
        <div className="sticky top-8 max-w-7xl mx-auto mt-14">
            <div className="flex w-full bg-[#1a2c4d] min-h-40 p-6">
                <div className="flex flex-col w-64 gap-4">
                    <div className="flex items-center gap-3 bg-[#89b4f7] text-[#1a2c4d] px-4 py-3 rounded-lg cursor-pointer">
                        <Navigation size={20} className="rotate-45" />
                        <span className="font-semibold text-sm">Guidance</span>
                    </div>
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
                <div className="flex flex-col ml-12 justify-center">
                    <h1 className="text-5xl font-medium text-[#89b4f7] mb-2">
                        Guidance
                    </h1>
                    <p className="text-gray-300 text-lg">
                        Choose a topic to view step-by-step instructions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GuidanceHeader;