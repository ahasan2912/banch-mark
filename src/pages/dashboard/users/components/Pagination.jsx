const Pagination = ({ currentUsers, setCurrentPage, currentPage, totalPages, totalUsers }) => {
    return (
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
                Showing <span className="text-white">{currentUsers.length}</span> of <span className="text-white">{totalUsers}</span>
            </p>

            <div className="flex items-center gap-2">
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    className="px-4 py-2 rounded bg-[#1e293b] text-sm hover:bg-slate-700 disabled:opacity-50 transition-colors"
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {[1, 2, 3].map(num => (
                    <button
                        key={num}
                        onClick={() => setCurrentPage(num)}
                        className={`w-10 py-2 rounded text-sm transition-colors ${currentPage === num ? 'bg-[#1C4480] text-white' : 'bg-[#1e293b] hover:bg-slate-700'}`}
                    >
                        {num}
                    </button>
                ))}

                <span className="px-2 text-slate-600">....</span>
                <button className="w-10 py-2 rounded bg-[#1e293b] text-sm">134</button>

                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    className="px-4 py-2 rounded bg-[#1e293b] text-sm hover:bg-slate-700 disabled:opacity-50 transition-colors"
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;