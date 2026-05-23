import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { useState } from "react";
import { useGetRevenueDataQuery } from "../../../features/dashborad/dashboardApi";
import TitleSection from "../components/TitleSection";
import ActivityTable from "./components/ActivityTable";
import Stats from "./components/Stats";
import { buildChartData, buildStatsCards } from "./utils";

const Revenue = () => {
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 8;

    const { data: revenueData, isLoading, isFetching, isError } = useGetRevenueDataQuery({
        year: selectedYear,
        page: currentPage,
        limit,
    });

    const { stats, recentActivity, chart } = revenueData?.data || {};
    const meta = revenueData?.meta || {};
    const chartData = buildChartData(chart);
    const statCards = buildStatsCards(stats);
    const yearOptions = Array.from({ length: 3 }, (_, index) => currentYear - index);

    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <TitleSection
                    title="Revenue"
                    description="Track earnings and financial performance"
                />
            </div>

            <Stats cards={statCards} />

            <div className={`transition-opacity ${isFetching && !isLoading ? "opacity-60" : "opacity-100"}`}>
                {isLoading ? (
                    <RevenueSkeleton />
                ) : isError ? (
                    <EmptyState message="Revenue data could not be loaded. Please refresh the page or try again later." tone="error" />
                ) : (
                    <>
                        <div className="bg-[#111827] p-6 rounded-xl border border-gray-800 mb-8">
                            <div className="flex items-center justify-between gap-4 mb-6">
                                <div>
                                    <h2 className="text-xl font-semibold text-[#E9F6FF]">Revenue Chart</h2>
                                    <p className="text-sm text-slate-500">{chart?.year || selectedYear} monthly revenue overview</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    {/* <label htmlFor="revenue-year" className="text-sm font-semibold text-[#90B5EE]">
                                        Year
                                    </label> */}
                                    <select
                                        id="revenue-year"
                                        value={selectedYear}
                                        onChange={(event) => {
                                            setSelectedYear(Number(event.target.value));
                                            setCurrentPage(1);
                                        }}
                                        className="rounded-md border border-[#4473BA] bg-[#162238] px-4 py-2.5 text-[#E9F6FF] outline-none focus:ring-2 focus:ring-blue-500/50"
                                    >
                                        {yearOptions.map((year) => (
                                            <option key={year} value={year} className="bg-[#162238]">
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="h-64 w-full">
                                {chartData.length > 0 ? (
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={chartData}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#9ca3af", fontSize: 12 }} dy={10} />
                                            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#9ca3af", fontSize: 12 }} tickFormatter={(value) => `$${value}`} />
                                            <Bar dataKey="value" fill="#10b981" radius={[10, 10, 10, 10]} barSize={44} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                ) : (
                                    <div className="flex h-full items-center justify-center text-slate-500">
                                        No chart data found.
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-center mt-4 text-sm text-gray-400 italic">
                                <span className="flex items-center"><span className="w-3 h-3 bg-[#10b981] rounded-sm mr-2"></span>{chart?.year || selectedYear}</span>
                            </div>
                        </div>

                        {recentActivity?.length > 0 ? (
                            <ActivityTable
                                transactions={recentActivity}
                                meta={meta}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        ) : (
                            <EmptyState message="No recent revenue activity found." />
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

const RevenueSkeleton = () => (
    <div className="space-y-8 animate-pulse">
        <div className="h-80 rounded-xl border border-gray-800 bg-[#111827]" />
        <div className="h-96 rounded-xl border border-slate-800 bg-[#111827]" />
    </div>
);

const EmptyState = ({ message, tone = "default" }) => (
    <div className={`rounded-xl border p-8 text-center ${tone === "error"
            ? "border-rose-400/30 bg-rose-500/10 text-rose-100"
            : "border-slate-800 bg-[#1e293b]/40 text-slate-400"
        }`}>
        {message}
    </div>
);

export default Revenue;
