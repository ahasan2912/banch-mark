import { useState } from "react";
import TitleSection from "../components/TitleSection";
import { Search } from "lucide-react";

const Projects = () => {
    const [search, setSearch] = useState('');
    console.log(search);
    return (
        <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <TitleSection
                    title='Projects'
                    description='View and download generated reports'
                />
                <div className="max-w-100 w-full relative">
                    <Search
                        size={20}
                        className="text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2"
                    />

                    <input
                        type="text"
                        placeholder="Search user"
                        className="w-full py-2.5 pl-10 pr-4 border border-[#4473BA] outline-none rounded-md text-[#90B5EE] bg-transparent"
                        onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
        </div>
    );
};

export default Projects;