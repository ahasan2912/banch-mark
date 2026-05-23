import { Search, X } from "lucide-react";
import { useState } from "react";
import { useGetRepoertDataQuery } from "../../../features/dashborad/dashboardApi";
import TitleSection from "../components/TitleSection";
import ReportCard from "./components/ReportCard";
import Stats from "./components/Stats";
import { buildReportStats } from "./utils";

const Reports = () => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 12;
    const { data: reportsList, isLoading, isFetching, isError } = useGetRepoertDataQuery({
        page: currentPage,
        limit,
        search,
    });

    const { stats, reports } = reportsList?.data || {};
    const meta = reportsList?.meta || {};
    const reportStats = buildReportStats(stats);
    const reportItems = reports || [];
    const totalPages = Math.max(meta.totalPage || 1, 1);

    return (
        <div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <TitleSection
                    title="Reports"
                    description="View and download generated reports"
                />
                <div className="max-w-100 w-full relative">
                    <Search
                        size={20}
                        className="text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2"
                    />

                    <input
                        type="text"
                        value={search}
                        placeholder="Search report"
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

            <Stats stats={reportStats} />

            <div className={`mt-12.5 pb-10 transition-opacity ${isFetching && !isLoading ? "opacity-60" : "opacity-100"}`}>
                {isLoading ? (
                    <ReportsSkeleton />
                ) : isError ? (
                    <EmptyState message="Reports could not be loaded. Please refresh the page or try again later." tone="error" />
                ) : reportItems.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {reportItems.map((report) => (
                                <ReportCard key={report.id} report={report} />
                            ))}
                        </div>

                        <div className="mt-8 flex justify-end">
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    className="px-4 py-2 rounded bg-[#1e293b] text-sm hover:bg-slate-700 disabled:opacity-50 transition-colors text-slate-300"
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </button>
                                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-10 py-2 rounded text-sm transition-colors ${
                                            currentPage === page
                                                ? "bg-[#1C4480] text-white"
                                                : "bg-[#1e293b] hover:bg-slate-700 text-slate-300"
                                        }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <button
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                    className="px-4 py-2 rounded bg-[#1e293b] text-sm hover:bg-slate-700 disabled:opacity-50 transition-colors text-slate-300"
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <EmptyState message="No reports found." />
                )}
            </div>
        </div>
    );
};

const ReportsSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
        {[...Array(8)].map((_, index) => (
            <div key={index} className="h-64 rounded-xl border border-gray-800 bg-[#111827]" />
        ))}
    </div>
);

const EmptyState = ({ message, tone = "default" }) => (
    <div className={`rounded-xl border p-8 text-center ${
        tone === "error"
            ? "border-rose-400/30 bg-rose-500/10 text-rose-100"
            : "border-slate-800 bg-[#1e293b]/40 text-slate-400"
    }`}>
        {message}
    </div>
);

export default Reports;
