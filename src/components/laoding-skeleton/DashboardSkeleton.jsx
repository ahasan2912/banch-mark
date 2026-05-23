import React from "react";
import TitleSection from "../../pages/dashboard/components/TitleSection";

const DashboardSkeleton = () => {
    return (
        <div className="animate-pulse">
            {/* Title */}
             <TitleSection
                title='Movement Monitoring & Reporting System'
                description='Platform overview and project management'
            />

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 mt-6">
                {[...Array(4)].map((_, index) => (
                    <div
                        key={index}
                        className="bg-[#162238] p-6 rounded-lg border border-[#90B5EE]"
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-12 h-12 bg-[#1e2d4a] rounded-md"></div>
                            <div className="h-5 w-36 bg-[#1e2d4a] rounded-md"></div>
                        </div>

                        <div className="h-8 w-24 bg-[#1e2d4a] rounded-md mb-4"></div>

                        <div className="flex gap-2">
                            <div className="h-4 w-12 bg-[#1e2d4a] rounded-md"></div>
                            <div className="h-4 w-28 bg-[#1e2d4a] rounded-md"></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[60vh]">
                {/* Recent Activity Skeleton */}
                <section className="bg-[#162238] rounded-xl border border-gray-800 p-6">
                    <div className="flex justify-between items-center mb-7">
                        <div className="h-6 w-40 bg-[#1e2d4a] rounded-md"></div>
                        <div className="h-5 w-20 bg-[#1e2d4a] rounded-md"></div>
                    </div>

                    <div className="space-y-7">
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#1e2d4a] border border-gray-700"></div>

                                <div className="flex-1">
                                    <div className="h-5 w-72 bg-[#1e2d4a] rounded-md mb-2"></div>
                                    <div className="h-4 w-20 bg-[#1e2d4a] rounded-md"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Revenue Overview Skeleton */}
                <section className="bg-[#162238] rounded-xl border border-gray-800 p-6 min-h-[60vh]">
                    <div className="flex justify-between items-center mb-7">
                        <div className="h-6 w-44 bg-[#1e2d4a] rounded-md"></div>
                        <div className="h-5 w-20 bg-[#1e2d4a] rounded-md"></div>
                    </div>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-9 w-36 bg-[#1e2d4a] rounded-md"></div>
                        <div className="h-5 w-28 bg-[#1e2d4a] rounded-md"></div>
                        <div className="h-5 w-36 bg-[#1e2d4a] rounded-md"></div>
                    </div>

                    <div className="space-y-8">
                        {[...Array(4)].map((_, index) => (
                            <div key={index}>
                                <div className="flex justify-between mb-3">
                                    <div className="h-5 w-28 bg-[#1e2d4a] rounded-md"></div>
                                    <div className="h-5 w-20 bg-[#1e2d4a] rounded-md"></div>
                                </div>

                                <div className="w-full h-2 bg-gray-800 rounded-full">
                                    <div
                                        className="h-2 bg-[#1e2d4a] rounded-full"
                                        style={{
                                            width:
                                                index === 0
                                                    ? "80%"
                                                    : index === 1
                                                    ? "45%"
                                                    : index === 2
                                                    ? "95%"
                                                    : "30%",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DashboardSkeleton;