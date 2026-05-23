import { Banknote, FolderOpen, PanelsTopLeft, TrendingDown, TrendingUp, User, Users } from "lucide-react";
import DashboardSkeleton from "../../../components/laoding-skeleton/DashboardSkeleton";
import { useGetHomePageDataQuery } from "../../../features/dashborad/dashboardApi";
import TitleSection from "../components/TitleSection";
import Stats from "./Stats";
import { buildRevenueData, buildStats, formatCurrency, formatRelativeTime, formatTrend, getInitials } from "./utils";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const { data: homePageData, isLoading, isError } = useGetHomePageDataQuery();

    if (isLoading) {
        return <DashboardSkeleton />;
    }

    const { cards = {}, recentActivity = [], revenueOverview = {} } = homePageData?.data || {};

    console.log(recentActivity);
    console.log(revenueOverview);

    const revenueTrend = formatTrend(revenueOverview.trend, "this year");
    const TrendIcon = revenueTrend?.direction === "down" ? TrendingDown : TrendingUp;
    const stats = buildStats(cards, {
        users: <Users size={28} />,
        projects: <PanelsTopLeft size={28} />,
        reports: <FolderOpen size={28} />,
        revenue: <Banknote size={28} />,
    });
    const revenueData = buildRevenueData(revenueOverview);

    if (isError) {
        return (
            <div>
                <TitleSection
                    title="Movement Monitoring & Reporting System"
                    description="Platform overview and project management"
                />
                <div className="mt-6 rounded-xl border border-rose-400/30 bg-rose-500/10 p-6 text-rose-100">
                    Dashboard overview could not be loaded. Please refresh the page or try again later.
                </div>
            </div>
        );
    }

    return (
        <div className="pb-5">
            <TitleSection
                title="Movement Monitoring & Reporting System"
                description="Platform overview and project management"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 mt-6">
                {stats.map((stat, index) => (
                    <Stats key={stat.title} stat={stat} index={index} />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[60vh]">
                <section className="bg-[#162238] rounded-xl border border-gray-800 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-[#E9F6FF]">Recent Activity</h2>
                        <button className="text-[#90B5EE] text-lg flex items-center gap-1 hover:underline cursor-pointer">
                            See all <span className="text-xl">→</span>
                        </button>
                    </div>

                    {recentActivity.length > 0 ? (
                        <div className="space-y-4">
                            {recentActivity.map((activity) => (
                                <div key={activity.id} className="flex items-start gap-4">
                                    <div className="w-10 h-10 shrink-0 overflow-hidden rounded-full bg-[#1e2d4a] border border-gray-700 flex items-center justify-center text-[#90B5EE]">
                                        {activity.user?.profileImage ? (
                                            <img
                                                src={activity.user.profileImage}
                                                alt={activity.user?.name || "User"}
                                                className="h-full w-full object-cover"
                                            />
                                        ) : activity.user?.name ? (
                                            <span className="text-sm font-bold">{getInitials(activity.user.name)}</span>
                                        ) : (
                                            <User size={22} />
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-lg leading-7">
                                            <span className="font-bold text-[#E9F6FF]">{activity.user?.name || "Benchmark"}</span>
                                            <span className="text-gray-400 ml-1 text-base">
                                                {activity.message?.replace(activity.user?.name || "", "").trim() || "requested a project report."}
                                            </span>
                                        </p>
                                        <p className="text-sm text-[#E9F6FF] mt-1">{formatRelativeTime(activity.createdAt)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="min-h-60 flex items-center justify-center rounded-lg border border-dashed border-gray-700 bg-[#1e2d4a]/40 p-6 text-center text-gray-400">
                            No recent activity found.
                        </div>
                    )}
                </section>

                <section className="bg-[#162238] rounded-xl border border-gray-800 p-6 min-h-[50vh]">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-xl font-semibold text-[#E9F6FF]">Revenue Overview</h2>
                        <Link to="/dashboard/revenue" className="text-[#90B5EE] text-lg flex items-center gap-1 hover:underline cursor-pointer">
                            See all <span>→</span>
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-baseline gap-4 mb-6">
                        <span className="text-3xl font-bold text-[#E9F6FF]">
                            {formatCurrency(revenueOverview.totalRevenue?.amountDisplay)}
                        </span>
                        <span className="text-[#94A3B8] text-lg font-semibold">Total revenue</span>
                        {revenueTrend && (
                            <span
                                className={`${revenueTrend.direction === "down" ? "text-rose-400" : "text-emerald-400"} text-base flex items-center gap-2 mt-2`}
                            >
                                <TrendIcon size={28} /> {revenueTrend.label} {revenueTrend.subtext}
                            </span>
                        )}
                    </div>

                    {revenueData.length > 0 ? (
                        <div className="space-y-3">
                            {revenueData.map((item) => (
                                <div key={item.month}>
                                    <div className="flex justify-between gap-4 text-sm mb-2">
                                        <span className="text-[#E9F6FF] text-base sm:text-lg font-semibold">{item.month}</span>
                                        <span className="text-[#E9F6FF] text-base sm:text-lg font-semibold">{item.amount}</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2">
                                        <div
                                            className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                                            style={{ width: item.width }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="min-h-60 flex items-center justify-center rounded-lg border border-dashed border-gray-700 bg-[#1e2d4a]/40 p-6 text-center text-gray-400">
                            No revenue data found.
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
