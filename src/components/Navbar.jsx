import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { images } from '../assets/image';
import { useDispatch } from 'react-redux';
import { userLoggedOut } from '../features/auth/authSlice';
import Cookies from "js-cookie";
import { toast } from 'react-toastify';
import useAuth from '../hooks/useAuth';
const Navbar = () => {

    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const isAuthenticate = useAuth();
    const navigate = useNavigate();

    const hanldeLogOut = async () => {
        dispatch(userLoggedOut());

        Cookies.remove("accessToken", {
            secure: false,
            sameSite: "Strict",
            path: "/",
        });

        toast.success("Logout successfully");
        navigate('/');
    }

    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/20 bg-[#1A315533] backdrop-blur-xs shadow-lg ">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-4">
                <Link to="/" className="flex items-center gap-2 max-w-37.5">
                    <img src={images.navbarLogo} alt="logo" />
                </Link>
                <div className="hidden lg:flex items-center space-x-10">
                    <NavLink to='/features' className={({ isActive }) => `font-semibold hover:text-[#90B5EE] transition ${isActive ? 'text-[#90B5EE]' : 'text-white'}`}>
                        Features
                    </NavLink>
                    <NavLink to='/how-it-work' className={({ isActive }) => `font-semibold hover:text-[#90B5EE] transition ${isActive ? 'text-[#90B5EE]' : 'text-white'}`}>
                        How it works
                    </NavLink>
                    <NavLink to='/guidance' className={({ isActive }) => `font-semibold hover:text-[#90B5EE] transition ${isActive ? 'text-[#90B5EE]' : 'text-white'}`}>
                        Guidance
                    </NavLink>
                    <NavLink to='/contact-us' className={({ isActive }) => `font-semibold hover:text-[#90B5EE] transition ${isActive ? 'text-[#90B5EE]' : 'text-white'}`}>
                        Contact
                    </NavLink>

                    <div className='flex gap-4'>
                        <Link to='/report-generation' className='bg-[#1A3155]/80 hover:bg-[#1A3155]/50 backdrop-blur-md text-white py-2 px-4 rounded-md border border-white/20 cursor-pointer'>
                            Request Demo
                        </Link>
                        {
                            isAuthenticate ? <button onClick={hanldeLogOut} className='bg-[#B7D8FF]/90 hover:bg-[#B7D8FF]/70 text-[#1A3155] py-2 px-4 rounded-md font-semibold cursor-pointer'>
                                Sign Out
                            </button> : <Link to='/login' className='bg-[#B7D8FF]/90 hover:bg-[#B7D8FF]/70 text-[#1A3155] py-2 px-4 rounded-md font-semibold cursor-pointer'>
                                Sign in
                            </Link>
                        }
                    </div>
                </div>

                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className=" flex flex-col px-4 py-6 space-y-4 
                    bg-white/10 backdrop-blur-lg border-t border-white/20">
                    <NavLink to='/features' className={({ isActive }) => `font-semibold hover:text-[#90B5EE] transition ${isActive ? 'text-[#90B5EE]' : 'text-white'}`}>
                        Features
                    </NavLink>
                    <NavLink to='/how-it-work' className={({ isActive }) => `font-semibold hover:text-[#90B5EE] transition ${isActive ? 'text-[#90B5EE]' : 'text-white'}`}>
                        How it works
                    </NavLink>
                    <NavLink to='/guidance' className={({ isActive }) => `font-semibold hover:text-[#90B5EE] transition ${isActive ? 'text-[#90B5EE]' : 'text-white'}`}>
                        Guidance
                    </NavLink>
                    <NavLink to='/contact-us' className={({ isActive }) => `font-semibold hover:text-[#90B5EE] transition ${isActive ? 'text-[#90B5EE]' : 'text-white'}`}>
                        Contact
                    </NavLink>
                    <NavLink to='/report-generation' className={({ isActive }) => `font-semibold hover:text-[#90B5EE] transition ${isActive ? 'text-[#90B5EE]' : 'text-white'}`}>
                        Request Demo
                    </NavLink>
                    <NavLink to='/login' className={({ isActive }) => `font-semibold hover:text-[#90B5EE] transition ${isActive ? 'text-[#90B5EE]' : 'text-white'}`}>
                        Sign in
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;