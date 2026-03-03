import { Search, X } from "lucide-react";
import TitleSection from "../components/TitleSection";
import { useState } from "react";
import Stats from "./components/Stats";
import UserTable from "./components/UserTable";
import Pagination from "./components/Pagination";

const Users = () => {
    const [search, setSearch] = useState('');
    console.log(search);
    // 1. Sample Data
    const totalUsers = 52;
    const usersData = Array.from({ length: 52 }, (_, i) => ({
        id: i + 1,
        name: 'David Miller',
        email: 'example123@gmail.com',
        status: i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'Pending' : 'Blocked',
        lastActive: '2 hours ago',
        projects: 12,
        reports: 24,
    }));

    // 2. Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(usersData.length / itemsPerPage);

    // Logic to get current users
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = usersData.slice(indexOfFirstItem, indexOfLastItem);

    // 3. Status Badge Helper
    const getStatusStyles = (status) => {
        switch (status) {
            case 'Active': return 'bg-[#10B77F33]/20 text-[#10B77F]';
            case 'Pending': return 'bg-[#FFCC0033]/20 text-[#FFCC00]';
            case 'Blocked': return 'bg-[#FF777A33]/20 text-[#FF777A]';
            default: return 'bg-gray-800 text-gray-400';
        }
    };
    return (
        <div className="">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <TitleSection
                    title='User Management'
                    description='Manage company users and permissions.'
                />
                <div className="max-w-100 w-full relative">
                    <Search
                        size={20}
                        className="text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2"
                    />

                    <input
                        type="text"
                        placeholder="Search user"
                        className="w-full py-2.5 pl-10 pr-4 border border-[#4473BA] outline-none rounded-md text-[#90B5EE] bg-transparent"
                        onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
            <div className="text-slate-300 pb-10">
                <Stats />
                <UserTable
                    currentUsers={currentUsers}
                    getStatusStyles={getStatusStyles}
                />
                <Pagination
                    totalUsers={totalUsers}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                    currentUsers={currentUsers}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
};

export default Users;