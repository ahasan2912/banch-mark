import { Search, X } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useGetAllUserDataQuery, useStatusChangeUserMutation } from "../../../features/dashborad/dashboardApi";
import TitleSection from "../components/TitleSection";
import Pagination from "./components/Pagination";
import Stats from "./components/Stats";
import UserTable from "./components/UserTable";
import { buildUserStats, STATUS_FILTERS } from "./utils";

const Users = () => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("ALL");
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 10;
    const [statusChangeUserMutation, { isLoading: isStatusChanging }] = useStatusChangeUserMutation();
    const { data: allUsers, isLoading, isFetching, isError } = useGetAllUserDataQuery({
        page: currentPage,
        limit,
        status,
        search,
    });

    const meta = allUsers?.meta || {};
    const stats = buildUserStats(allUsers?.data?.stats);
    const users = allUsers?.data?.users || [];
    const totalUsers = meta.total || 0;
    const totalPages = meta.totalPage || 1;

    const statusChangeUser = async (userId, nextStatus) => {
        try {
            await statusChangeUserMutation({
                userId,
                data: { status: nextStatus },
            }).unwrap();
            toast.success("User status updated successfully");
        } catch {
            toast.error("Failed to update user status");
        }
    };

    return (
        <div>
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-4">
                <TitleSection
                    title="User Management"
                    description="Manage company users and permissions."
                />

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                    <div className="flex rounded-md border border-[#4473BA] bg-[#162238] p-1">
                        {STATUS_FILTERS.map((filter) => (
                            <button
                                key={filter.value}
                                type="button"
                                onClick={() => {
                                    setStatus(filter.value);
                                    setCurrentPage(1);
                                }}
                                className={`rounded px-3 py-2 text-sm font-semibold transition-colors ${
                                    status === filter.value
                                        ? "bg-[#1C4480] text-white"
                                        : "text-[#90B5EE] hover:bg-[#1e293b]"
                                }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-100 w-full sm:w-80 relative">
                        <Search
                            size={20}
                            className="text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2"
                        />

                        <input
                            type="text"
                            value={search}
                            placeholder="Search user"
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
            </div>

            <div className="text-slate-300 pb-10">
                <Stats stats={stats} />

                <div className={`mt-6 transition-opacity ${isFetching && !isLoading ? "opacity-60" : "opacity-100"}`}>
                    {isLoading ? (
                        <UsersTableSkeleton />
                    ) : isError ? (
                        <EmptyState message="Users could not be loaded. Please refresh the page or try again later." tone="error" />
                    ) : users.length > 0 ? (
                        <>
                            <UserTable
                                users={users}
                                statusChangeUser={statusChangeUser}
                                isStatusChanging={isStatusChanging}
                            />
                            <Pagination
                                totalUsers={totalUsers}
                                setCurrentPage={setCurrentPage}
                                totalPages={totalPages}
                                currentCount={users.length}
                                currentPage={currentPage}
                            />
                        </>
                    ) : (
                        <EmptyState message="No users found for the selected filter." />
                    )}
                </div>
            </div>
        </div>
    );
};

const UsersTableSkeleton = () => (
    <div className="space-y-2 animate-pulse">
        {[...Array(8)].map((_, index) => (
            <div key={index} className="h-20 rounded-lg bg-[#1e293b]/60 border border-slate-800" />
        ))}
    </div>
);

const EmptyState = ({ message, tone = "default" }) => (
    <div className={`mt-6 rounded-xl border p-8 text-center ${
        tone === "error"
            ? "border-rose-400/30 bg-rose-500/10 text-rose-100"
            : "border-slate-800 bg-[#1e293b]/40 text-slate-400"
    }`}>
        {message}
    </div>
);

export default Users;
