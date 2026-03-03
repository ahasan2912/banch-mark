import { Banknote, FolderOpen, LayoutDashboard, LogOut, PanelsTopLeft, Settings, Users, X } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { images } from '../../assets/image';
import { useDispatch } from 'react-redux';
import { userLoggedOut } from '../../features/auth/authSlice';


const Sidebar = ({ isOpen, setIsOpen }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logOut = () => {
        dispatch(userLoggedOut());
        localStorage.clear();
        navigate("/");
    }
    return (
        <>
            <div
                className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            />
            <aside className={`fixed inset-y-0 left-0 z-50 w-66.5 bg-[#121620] transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col h-full py-3 pl-2">
                    <div className="flex items-center justify-between">
                        <div className='max-w-35 mb-2 pl-2'>
                            <Link to="/">
                                <img className='mt-4.5 w-full' src={images?.dashboardIcon2} alt="dashboard-image1" />
                            </Link>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="lg:hidden p-2 text-slate-400 hover:text-white">
                            <X size={24} />
                        </button>
                    </div>
                    <nav className="flex-1">
                        <ul className='space-y-2 pr-5 mt-4 pl-2'>
                            <NavLink to='admin-dashboard' className={({ isActive }) => `flex items-center gap-1 w-full py-3 transition-all duration-300 text-base ${isActive ? 'bg-[#4473BA]/20 text-[#90B5EE] border border-[#90B5EE] font-semibold py-2 pl-5 rounded-md' : 'text-white'}`}>
                                <LayoutDashboard size={18} />
                                <span>Dashboard</span>
                            </NavLink>
                            <NavLink to='users' className={({ isActive }) => `flex items-center gap-1 w-full py-3 transition-all duration-300 text-base ${isActive ? 'bg-[#4473BA]/20 text-[#90B5EE] border border-[#90B5EE] font-semibold py-2 pl-5 rounded-md' : 'text-white'}`}>
                                <Users size={18} />
                                <span>Users</span>
                            </NavLink>
                            <NavLink to='projects' className={({ isActive }) => `flex items-center gap-1 w-full py-3 transition-all duration-300 text-base ${isActive ? 'bg-[#4473BA]/20 text-[#90B5EE] border border-[#90B5EE] font-semibold py-2 pl-5 rounded-md' : 'text-white'}`}>
                                <PanelsTopLeft size={18} />
                                <span>Projects</span>
                            </NavLink>
                            <NavLink to='report' className={({ isActive }) => `flex items-center gap-1 w-full py-3 transition-all duration-300 text-base ${isActive ? 'bg-[#4473BA]/20 text-[#90B5EE] border border-[#90B5EE] font-semibold py-2 pl-5 rounded-md' : 'text-white'}`}>
                                <FolderOpen size={20} />
                                <span>Reports</span>
                            </NavLink>
                            <NavLink to='revenue' className={({ isActive }) => `flex items-center gap-1 w-full py-3 transition-all duration-300 text-base ${isActive ? 'bg-[#4473BA]/20 text-[#90B5EE] border border-[#90B5EE] font-semibold py-2 pl-5 rounded-md' : 'text-white'}`}>
                                <Banknote size={24} />
                                <span>Revenue</span>
                            </NavLink>
                            <NavLink to='setting' className={({ isActive }) => `flex items-center gap-1 w-full py-3 transition-all duration-300 text-base ${isActive ? 'bg-[#4473BA]/20 text-[#90B5EE] border border-[#90B5EE] font-semibold py-2 pl-5 rounded-md' : 'text-white'}`}>
                                <Settings size={20} />
                                <span>Settings</span>
                            </NavLink>
                        </ul>
                    </nav>

                    {/* Profile Card */}
                    <button onClick={logOut} className=" mt-auto py-4 pl-5 flex items-center gap-3 cursor-pointer">
                        <div>
                            <img className='w-12 h-12 rounded-full border border-slate-300 object-fill' src={images.profileImage} alt="admin-pic" />
                        </div>
                        <div className='flex items-center'>
                            <span className='text-white hover:text-gray-300 cursor-pointer transition-colors text-base'>Mr. Virus</span>
                        </div>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
