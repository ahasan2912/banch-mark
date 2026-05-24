import { Menu } from "lucide-react";
const Header = ({ setSidebarOpen }) => {
    return (
        <header className="fixed w-full top-0 z-30 flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-4 flex-1">
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden p-2.5 bg-slate-50 text-slate-600 rounded-md border border-slate-200"
                >
                    <Menu size={20} />
                </button>
            </div>

            {/* <div className='border border-slate-200 rounded-full'>
                <div className="flex items-center gap-2 md:gap-4">
                    <img className='w-10 h-10 rounded-full object-fill' src={user?.profileImage} alt="profile-pic" />
                </div>
            </div> */}
        </header>
    );
};

export default Header;