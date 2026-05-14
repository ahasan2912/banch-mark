import React from 'react';

const AddCompanySekeleton = () => {
    return (
        <div
            className="animate-pulse selection:bg-blue-500/15"
            style={{
                background:
                    "radial-gradient(circle at 20% 30%, #1a2332 0%, #0a0c10 100%)",
            }}
        >
            <div className="min-h-screen w-full text-[#CBD5E1] relative overflow-hidden">
                {/* Background Image Placeholder */}
                <div className="absolute -right-100 inset-0 opacity-10 bg-image z-50 -rotate-20 bg-center lg:bg-right bg-cover lg:bg-contain pointer-events-none bg-fixed"></div>

                <div className="max-w-7xl mx-auto px-4 pb-20 pt-24 sm:pt-32">
                    <div className="flex items-center justify-center h-full pt-28">
                        <div className="w-full max-w-160 mx-auto bg-[#1A315580] rounded-xl p-4 sm:p-8 md:p-12 shadow-2xl border border-white/5 relative z-10">
                            <div className="w-full max-w-md space-y-8">
                                {/* Title Skeleton */}
                                <div className="text-center mb-10 space-y-3">
                                    <div className="h-10 w-3/4 mx-auto bg-slate-700 rounded"></div>
                                    <div className="h-5 w-full mx-auto bg-slate-700 rounded"></div>
                                </div>

                                {/* Form Skeleton */}
                                <div className="space-y-6">
                                    {/* Select Skeleton */}
                                    <div className="space-y-4">
                                        <div className="h-12 w-full bg-slate-700 rounded-lg"></div>

                                        <div className="flex items-center justify-between">
                                            <div className="h-4 w-40 bg-slate-700 rounded"></div>
                                            <div className="h-10 w-32 bg-slate-700 rounded-md"></div>
                                        </div>
                                    </div>

                                    {/* Checkbox Skeleton */}
                                    <div className="flex items-center space-x-3">
                                        <div className="w-4 h-4 bg-slate-700 rounded"></div>
                                        <div className="h-4 w-64 bg-slate-700 rounded"></div>
                                    </div>

                                    {/* Buttons Skeleton */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-12 w-full bg-slate-700 rounded-lg"></div>
                                        <div className="h-12 w-full bg-slate-700 rounded-lg"></div>
                                    </div>
                                </div>

                                {/* Footer Skeleton */}
                                <div className="flex justify-center gap-2">
                                    <div className="h-4 w-40 bg-slate-700 rounded"></div>
                                    <div className="h-4 w-16 bg-slate-700 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCompanySekeleton;