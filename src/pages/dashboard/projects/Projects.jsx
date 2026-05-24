import React, { useState } from "react";
import { Search, BarChart3, Archive, Globe2 } from "lucide-react";
import ProjectCard from "./component/ProjectCard";
import TitleSection from "../components/TitleSection";
import Stats from "./component/Stats";
import { useGetProjectDataQuery } from "../../../features/dashborad/dashboardApi";
import ProjectsSkeleton from "../../../components/laoding-skeleton/ProjectsSkeleton";

const Projects = () => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const { data: projectData, isLoading } = useGetProjectDataQuery();

    if (isLoading) {
        return <ProjectsSkeleton />
    }

    const { stats, users } = projectData?.data || {};
    const {
        totalProjects,
        activeProjects,
        runningProjects,
        liveProjects,
    } = stats;

    console.log(currentPage);

    return (
        <div className="min-h-screen px-6 py-6 text-white">
            <div className="flex items-start justify-between gap-6">
                <TitleSection
                    title="Projects"
                    description="View and manage your projects"
                />
                <div className="max-w-100 w-full relative">
                    <Search
                        size={20}
                        className="text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2"
                    />

                    <input
                        type="text"
                        value={search}
                        placeholder="Search project"
                        className="w-full py-2.5 pl-10 pr-10 border border-[#4473BA] outline-none rounded-md text-[#90B5EE] bg-transparent"
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setCurrentPage(1);
                        }}
                    />

                    {search && (
                        <button
                            type="button"
                            onClick={() => {
                                setSearch("");
                                setCurrentPage(1);
                            }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-white"
                        >
                            <X size={18} />
                        </button>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <Stats value={totalProjects} label="Total Projects" />
                <Stats value={liveProjects} label="Live Projects" />
                <Stats value={activeProjects} label="Active Projects" />
                <Stats value={runningProjects} label="Running Projects" />
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
                {users.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;