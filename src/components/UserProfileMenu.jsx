import React, { useEffect, useRef } from 'react';

const UserProfileMenu = ({ isShow: isOpen, setIsShow: setIsOpen }) => {
    const menuRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setIsOpen]);

    return (
        <div className="flex justify-end bg-slate-900" ref={menuRef}>
            <div className="relative">
                {isOpen && (
                    <div className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-xl py-2 z-50 ring-1 ring-black ring-opacity-5 animate-in fade-in zoom-in duration-150">
                        <div className="px-4 py-2 border-b border-gray-100">
                            <p className="text-sm font-semibold text-gray-800">My Account</p>
                        </div>

                        <a href="#signin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                            Sign In
                        </a>

                        <a href="#signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                            Sign Up
                        </a>

                        <hr className="my-1 border-gray-100" />

                        <button
                            onClick={() => alert('Logged out!')}
                            className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserProfileMenu;