const Pagination = ({ setCurrentPage, currentPage, totalPages }) => {
    const safeTotalPages = Math.max(totalPages, 1);

    return (
        <div className="mt-8 flex justify-end">
            <div className="flex items-center gap-2">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    className="px-4 py-2 rounded bg-[#1e293b] text-sm hover:bg-slate-700 disabled:opacity-50 transition-colors cursor-pointer"
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {Array.from({ length: safeTotalPages }, (_, i) => i + 1).map((num) => (
                    <button
                        key={num}
                        onClick={() => setCurrentPage(num)}
                        className={`w-10 py-2 rounded text-sm transition-colors ${
                            currentPage === num
                                ? "bg-[#1C4480] text-white"
                                : "bg-[#1e293b] hover:bg-slate-700"
                        }`}
                    >
                        {num}
                    </button>
                ))}
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, safeTotalPages))}
                    className="px-4 py-2 rounded bg-[#1e293b] text-sm hover:bg-slate-700 disabled:opacity-50 transition-colors cursor-pointer"
                    disabled={currentPage === safeTotalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;
