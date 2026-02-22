import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { images } from '../assets/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/20">

            <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-4">
                
                <Link to="/" className="flex items-center gap-2 max-w-37.5">
                    <img src={images.navbarLogo} alt="logo" />
                </Link>

                <div className="hidden lg:flex items-center space-x-10">
                    <NavLink to='/product' className='text-white font-semibold hover:text-[#e38590] transition'>
                        Features
                    </NavLink>
                    <NavLink to='/product' className='text-white font-semibold hover:text-[#e38590] transition'>
                        How it works
                    </NavLink>
                    <NavLink to='/product' className='text-white font-semibold hover:text-[#e38590] transition'>
                        Guidance
                    </NavLink>
                    <NavLink to='/product' className='text-white font-semibold hover:text-[#e38590] transition'>
                        Contact
                    </NavLink>

                    <div className='flex gap-4'>
                        <Link className='bg-[#1A3155]/80 backdrop-blur-md text-white py-2 px-4 rounded-md border border-white/20'>
                            Request Demo
                        </Link>
                        <Link className='bg-[#B7D8FF]/90 text-[#1A3155] py-2 px-4 rounded-md font-semibold'>
                            Sign in
                        </Link>
                    </div>
                </div>

                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden px-4 pb-6 space-y-4 
                    bg-white/10 backdrop-blur-lg border-t border-white/20">
                    
                    <NavLink to='/product' className='block text-white font-semibold'>
                        Features
                    </NavLink>
                    <NavLink to='/product' className='block text-white font-semibold'>
                        How it works
                    </NavLink>
                    <NavLink to='/product' className='block text-white font-semibold'>
                        Guidance
                    </NavLink>
                    <NavLink to='/product' className='block text-white font-semibold'>
                        Contact
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;