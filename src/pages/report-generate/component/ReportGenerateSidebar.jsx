import { NavLink } from "react-router-dom";

const ReportGenerateSidebar = () => {
    const baseStyles = "block w-full px-4 py-2.5 rounded-md font-semibold text-base transition-all duration-200 mb-2";

    const getLinkStyles = ({ isActive }) =>
        isActive
            ? `${baseStyles} bg-[#4a72b2] text-white shadow-md`
            : `${baseStyles} bg-[#b9d7fb] text-[#2c5282] hover:bg-[#a5c9f5]`;
    return (
        <div className="flex min-h-fit">
            <nav className="w-full rounded-xl border border-slate-800 shadow-2xl h-fit mt-3">
                <div className="bg-[#112240] p-4 rounded-lg mb-4 flex flex-col gap-1">
                    <NavLink to="view-servey" className={getLinkStyles}>
                        View Surveys
                    </NavLink>

                    <NavLink to="view-event" className={getLinkStyles}>
                        View Events
                    </NavLink>

                    <NavLink to="additional-info" className={getLinkStyles}>
                        Additional Info
                    </NavLink>

                    <NavLink to="upload-drawings" className={getLinkStyles}>
                        Upload Drawings
                    </NavLink>
                </div>
                <div className="bg-[#112240] p-4 rounded-lg mb-4 flex flex-col gap-1">
                    <NavLink to="archive-project" className={getLinkStyles}>
                        Archive This Project
                    </NavLink>
                    <NavLink to="view-report" className={getLinkStyles}>
                        View Report
                    </NavLink>
                </div>
                {/* <div className="bg-[#112240] p-4 rounded-lg mb-4 flex flex-col gap-1">
                    <NavLink to="select-project" className={getLinkStyles}>
                        Select Archived Project
                    </NavLink>
                    <NavLink to="reinstate-project" className={getLinkStyles}>
                        Reinstate Project
                    </NavLink>
                </div> */}
                <div className="bg-[#4473BA] hover:bg-[#5e91df] rounded-md text-white cursor-pointer">
                    <button className="block w-full px-4 py-2.5 rounded-md font-semibold text-base transition-all duration-200 mb-2 cursor-pointer">Request New Reports</button>
                </div>
            </nav>
        </div>
    );
};

export default ReportGenerateSidebar;