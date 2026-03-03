import { Check, MoreVertical, User, X } from "lucide-react";

const  UserTable = ({currentUsers, getStatusStyles}) => {
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
                    {currentUsers.map((user) => (
                        <tr key={user.id} className="bg-[#1e293b]/50 hover:bg-[#1e293b] transition-colors">
                            <td className="px-6 py-4 rounded-l-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                                        <User size={22} className="text-[#90B5EE]" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-[#E9F6FF]">{user.name}</div>
                                        <div className="text-sn text-slate-500">{user.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusStyles(user.status)}`}>
                                    {user.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <span className="flex items-center gap-2">🕒 {user.lastActive}</span>
                            </td>
                            <td className="px-6 py-4 text-center font-medium">{user.projects}</td>
                            <td className="px-6 py-4 text-center font-medium">{user.reports}</td>
                            <td className="px-6 py-4 text-right rounded-r-lg">
                                <div className="flex justify-end gap-2">
                                    {user.status === 'Pending' ? (
                                        <>
                                            <button className="p-1.5 bg-[#DF2A16] rounded text-white hover:bg-red-500"><X size={14} /></button>
                                            <button className="p-1.5 bg-[#128635] rounded text-white hover:bg-green-500"><Check size={14} /></button>
                                        </>
                                    ) : (
                                        <button className="text-slate-500 hover:text-white"><MoreVertical size={20} /></button>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;