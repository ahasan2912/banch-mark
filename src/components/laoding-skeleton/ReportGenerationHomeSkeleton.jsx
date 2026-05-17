const ReportGenerationHomeSkeleton = () => {
    return (
        <div className="p-3 sm:p-6 flex flex-col items-start animate-pulse">
            <div className="w-full relative">
                {/* Header Skeleton */}
                <div className="bg-[#1a2332] rounded-t-xl px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-6">
                        {/* Live Projects Text */}
                        <div className="h-5 w-28 bg-slate-600 rounded"></div>

                        {/* Select Dropdown */}
                        <div className="h-10 w-44 bg-slate-200 rounded"></div>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <div className="h-6 w-6 bg-slate-500 rounded-full"></div>
                        <div className="h-6 w-6 bg-slate-500 rounded-full"></div>
                        <div className="h-6 w-6 bg-red-400 rounded-full"></div>
                    </div>
                </div>

                {/* Body Skeleton */}
                <div className="bg-[#f0f7ff] rounded-b-lg border-t border-slate-700 relative overflow-y-auto custom-scrollbar min-h-75">
                    <div className="flex min-h-full">
                        {/* Section Column */}
                        <div className="w-1/2 p-4 border-r border-[#d1e4ff]">
                            <div className="flex items-center gap-2 mb-5">
                                <div className="h-5 w-20 bg-slate-300 rounded"></div>
                                <div className="h-5 w-5 bg-slate-300 rounded-full"></div>
                            </div>

                            <div className="space-y-3">
                                <div className="h-4 w-3/4 bg-slate-300 rounded"></div>
                                <div className="h-4 w-2/3 bg-slate-300 rounded"></div>
                                <div className="h-4 w-5/6 bg-slate-300 rounded"></div>
                                <div className="h-4 w-1/2 bg-slate-300 rounded"></div>
                            </div>
                        </div>

                        {/* Target Column */}
                        <div className="w-1/2 p-4">
                            <div className="h-5 w-20 bg-slate-300 rounded mb-5"></div>

                            <div className="space-y-3">
                                <div className="h-4 w-4/5 bg-slate-300 rounded"></div>
                                <div className="h-4 w-2/3 bg-slate-300 rounded"></div>
                                <div className="h-4 w-3/4 bg-slate-300 rounded"></div>
                                <div className="h-4 w-1/2 bg-slate-300 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Upload Base Reading Skeleton */}
                <div className="mt-5 w-full bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                    <div className="h-5 w-40 bg-slate-300 rounded mb-4"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="h-12 bg-slate-200 rounded-lg"></div>
                        <div className="h-12 bg-slate-200 rounded-lg"></div>
                        <div className="h-12 bg-slate-200 rounded-lg"></div>
                    </div>

                    <div className="mt-4 h-10 w-36 bg-slate-300 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
};

export default ReportGenerationHomeSkeleton;