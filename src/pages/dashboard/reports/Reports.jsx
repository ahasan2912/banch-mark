import { useState } from "react";
import TitleSection from "../components/TitleSection";
import { Search } from "lucide-react";
import Stats from "./components/Stats";
import ReportCard from "./components/ReportCard";

const Reports = () => {
    const [search, setSearch] = useState('');
    console.log(search);
    const reports = Array(12).fill({
        title: "Q4 Movement Analysis",
        project: "Project Alpha",
        author: "Sarah Chen",
        date: "Feb 8, 2024",
        status: "COMPLETED",
        tag: "movement",
        tagColor: "text-emerald-500 bg-emerald-500/10",
    });
    return (
        <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <TitleSection
                    title='Reports'
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
            <div>
                <Stats />
                <div className="mt-12.5 pb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {reports.map((report, index) => (
                            <ReportCard key={index} report={report} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reports;