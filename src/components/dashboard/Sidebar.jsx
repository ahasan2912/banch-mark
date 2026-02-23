import { LogOut, X } from 'lucide-react';
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
            <aside className={`fixed inset-y-0 left-0 z-50 w-66.5 bg-[#2F1E54] transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} border-r border-gray-300`}>
                <div className="flex flex-col h-full py-3 pl-2">
                    <div className="flex items-center justify-between pl-3">
                        <div className='max-w-35 mb-2'>
                            <Link to="/">
                                <img src={images?.logo} alt="L" />
                            </Link>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="lg:hidden p-2 text-slate-400 hover:text-white">
                            <X size={24} />
                        </button>
                    </div>
                    <div>
                        <h1 className='text-2xl text-[#FFFFFF] font-semibold pl-5'>Hi Juan,</h1>
                    </div>
                    <nav className="flex-1">
                        <ul className='space-y-2 pr-5 mt-4 pl-2'>
                            <NavLink to='registration' className={({ isActive }) => `flex items-center gap-1 w-full py-3 transition-all duration-200 text-base text-white ${isActive ? 'bg-[#3D286D] py-2 pl-5 rounded-md' : 'pl-5'}`}>

                                <span>Schedule a Pickup</span>
                            </NavLink>
                            <NavLink to='addproduct' className={({ isActive }) => `flex items-center gap-1 w-full py-3 transition-all duration-200 text-base text-white ${isActive ? 'bg-[#3D286D] py-2 pl-5 rounded-md' : 'pl-5'}`}>

                                <span>Add Product</span>
                            </NavLink>
                        </ul>
                    </nav>

                    {/* Profile Card */}
                    <button onClick={logOut} className=" mt-auto py-4 pl-5 flex items-center gap-1 cursor-pointer">
                        <LogOut size={18} className="text-white hover:text-red-400 cursor-pointer transition-colors" />
                        <span className='text-white hover:text-red-400 cursor-pointer transition-colors'>LogOut</span>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;