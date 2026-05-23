import { Clock3, MoreVertical, User } from "lucide-react";
import { useState } from "react";
import { formatCount, formatLastActive, formatStatus, getInitials, getStatusStyles, USER_STATUS_OPTIONS } from "../utils";

const UserTable = ({ users = [], statusChangeUser, isStatusChanging }) => {
    const [openUserId, setOpenUserId] = useState(null);

    const getStatusDotClass = (status) => {
        switch (status) {
            case "ACTIVE":
                return "bg-[#10B77F]";
            case "BLOCKED":
                return "bg-[#FF777A]";
            case "PENDING":
                return "bg-[#FFCC00]";
            default:
                return "bg-slate-500";
        }
    };

    const handleStatusSelect = async (userId, nextStatus) => {
        setOpenUserId(null);
        await statusChangeUser(userId, nextStatus);
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-2">
                <thead>
                    <tr className="text-slate-400 text-sm uppercase tracking-wider">
                        <th className="px-6 py-4 font-medium">User</th>
                        <th className="px-6 py-4 font-medium">Status</th>
                        <th className="px-6 py-4 font-medium">Last Active</th>
                        <th className="px-6 py-4 font-medium text-center">Projects</th>
                        <th className="px-6 py-4 font-medium text-center">Reports</th>
                        <th className="px-6 py-4 font-medium text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="bg-[#1e293b]/50 hover:bg-[#1e293b] transition-colors">
                            <td className="px-6 py-4 rounded-l-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 overflow-hidden rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 text-[#90B5EE]">
                                        {user.profileImage ? (
                                            <img src={user.profileImage} alt={user.name} className="h-full w-full object-cover" />
                                        ) : user.name ? (
                                            <span className="text-sm font-bold">{getInitials(user.name)}</span>
                                        ) : (
                                            <User size={22} />
                                        )}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-[#E9F6FF]">{user.name}</div>
                                        <div className="text-sm text-slate-500">{user.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusStyles(user.status)}`}>
                                    {formatStatus(user.status)}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <span className="flex items-center gap-2">
                                    <Clock3 size={16} className="text-[#90B5EE]" />
                                    {formatLastActive(user.lastActiveAt)}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-center font-medium">{formatCount(user.projects)}</td>
                            <td className="px-6 py-4 text-center font-medium">{formatCount(user.reports)}</td>
                            <td className="px-6 py-4 text-right rounded-r-lg relative">
                                <div className="flex justify-end gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setOpenUserId((currentId) => currentId === user.id ? null : user.id)}
                                        className="rounded-md p-2 text-slate-500 hover:bg-[#162238] hover:text-white"
                                        disabled={isStatusChanging}
                                    >
                                        <MoreVertical size={20} />
                                    </button>
                                </div>

                                {openUserId === user.id && (
                                    <div className="absolute right-6 top-14 z-30 w-40 overflow-hidden rounded-lg border border-[#4473BA]/60 bg-[#162238] py-1 text-left shadow-2xl">
                                        {USER_STATUS_OPTIONS.map((option) => {
                                            const isActive = option.value === user.status;

                                            return (
                                                <button
                                                    key={option.value}
                                                    type="button"
                                                    onClick={() => handleStatusSelect(user.id, option.value)}
                                                    disabled={isActive || isStatusChanging}
                                                    className={`flex w-full items-center justify-between px-4 py-2.5 text-sm font-semibold transition-colors ${
                                                        isActive
                                                            ? "bg-[#1C4480]/50 text-white"
                                                            : "text-[#CBD5E1] hover:bg-[#1e293b]"
                                                    } disabled:cursor-not-allowed disabled:opacity-70`}
                                                >
                                                    <span>{option.label}</span>
                                                    <span className={`h-2 w-2 rounded-full ${getStatusDotClass(option.value)}`}></span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
