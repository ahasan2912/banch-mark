import React from "react";
import TitleSection from "../../pages/dashboard/components/TitleSection";
import Stats from "../../pages/dashboard/projects/component/Stats";

const ProjectsSkeleton = () => {
    const stats = Array.from({ length: 4 });
    const cards = Array.from({ length: 6 });

    return (
        <div className="min-h-screen px-6 py-6 text-white">
            {/* Header */}
            <div className="flex items-start justify-between gap-6">
                <TitleSection
                    title="Projects"
                    description="View and manage your projects"
                />
                <div className="h-11 w-115 animate-pulse rounded-md border border-[#2e5b95] bg-[#14233b]" />
            </div>

            {/* Top Stats */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((_, index) => (
                     <Stats key={index} value={0} label="" />
                ))}
            </div>

            {/* Project Cards */}
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {cards.map((_, index) => (
                    <div
                        key={index}
                        className="bg-[#111827] border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors group"
                    >
                        {/* Profile */}
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 animate-pulse rounded-full border border-[#223a5f] bg-[#14233b]" />

                            <div>
                                <div className="h-3 w-24 animate-pulse rounded bg-[#1b3152]" />
                                <div className="mt-2 h-2.5 w-36 animate-pulse rounded bg-[#14233b]" />
                            </div>
                        </div>

                        {/* Live / Archive */}
                        <div className="mt-7 grid grid-cols-2 gap-4">
                            <div className="rounded-lg bg-[#0e1e35] px-4 py-3">
                                <div className="mx-auto h-2.5 w-12 animate-pulse rounded bg-[#1d3450]" />
                                <div className="mx-auto mt-2 h-4 w-6 animate-pulse rounded bg-[#142335]" />
                            </div>

                            <div className="rounded-lg bg-[#172333] px-4 py-3">
                                <div className="mx-auto h-2.5 w-14 animate-pulse rounded bg-[#112236]" />
                                <div className="mx-auto mt-2 h-4 w-6 animate-pulse rounded bg-[#12263f]" />
                            </div>
                        </div>

                        {/* Reports */}
                        <div className="mt-6 flex items-center justify-between rounded-lg bg-[#121b2b] px-4 py-4">
                            <div className="flex items-center gap-3">
                                <div className="h-6 w-6 animate-pulse rounded-md bg-[#173967]" />
                                <div className="h-3 w-24 animate-pulse rounded bg-[#1b3152]" />
                            </div>

                            <div className="h-3 w-8 animate-pulse rounded bg-[#162338]" />
                        </div>

                        {/* Button */}
                        <div className="mt-6 h-9 w-full animate-pulse rounded-md border border-[#2e4565] bg-[#1a2f4f]" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSkeleton;