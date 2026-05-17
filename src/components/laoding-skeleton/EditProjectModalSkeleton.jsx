const EditProjectModalSkeleton = () => {
    const inputSkeleton =
        "w-full h-12 bg-[#2a3b5a] border border-blue-400/20 rounded-md animate-pulse";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#1e2d4a] border border-slate-700 rounded-lg shadow-2xl animate-fadeIn">
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-slate-700">
                    <div className="h-6 w-32 bg-slate-600 rounded animate-pulse"></div>
                    <div className="h-6 w-6 bg-slate-600 rounded-full animate-pulse"></div>
                </div>

                {/* Form Body */}
                <div className="px-4 py-3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {/* Left Side */}
                    <div className="space-y-4">
                        <div className="h-6 w-40 bg-slate-600 rounded animate-pulse mb-2"></div>

                        <div className={inputSkeleton}></div>
                        <div className={inputSkeleton}></div>
                        <div className={inputSkeleton}></div>

                        <div className="w-full h-32 bg-[#2a3b5a] border border-blue-400/20 rounded-md animate-pulse"></div>
                    </div>

                    {/* Right Side */}
                    <div className="space-y-4">
                        {/* Warning Section */}
                        <div className="space-y-3">
                            <div className="h-6 w-24 bg-yellow-500/50 rounded animate-pulse"></div>

                            <div className={inputSkeleton}></div>
                            <div className={inputSkeleton}></div>
                            <div className={inputSkeleton}></div>
                        </div>

                        {/* Alert Section */}
                        <div className="space-y-3">
                            <div className="h-6 w-20 bg-red-500/50 rounded animate-pulse"></div>

                            <div className={inputSkeleton}></div>
                            <div className={inputSkeleton}></div>
                            <div className={inputSkeleton}></div>
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex justify-end gap-4 px-8 pb-8">
                    <div className="h-10 w-28 bg-gray-600 rounded-md animate-pulse"></div>
                    <div className="h-11 w-32 bg-blue-200 rounded-lg animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default EditProjectModalSkeleton;