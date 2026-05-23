import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const GuidanceSidebar = () => {
    const baseStyles = "block w-full px-4 py-2.5 rounded-md font-semibold text-base transition-all duration-200 mb-2";
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: true,
            offset: 80,
        });

        AOS.refresh();
    }, []);

    const getLinkStyles = ({ isActive }) =>
        isActive
            ? `${baseStyles} bg-[#4a72b2] text-white shadow-md`
            : `${baseStyles} bg-[#b9d7fb] text-[#2c5282] hover:bg-[#a5c9f5]`;
    return (
        <div className="flex bg-[#1a2c4d] p-6 mt-2 rounded-lg min-h-[74vh]" data-aos="fade-right">
            <nav className="w-full sm:w-72 bg-[#112240] p-4 rounded-xl text-base border border-slate-800 shadow-2xl h-fit">
                <NavLink to="registration" className={getLinkStyles}>
                    Registration
                </NavLink>

                <NavLink to="project-creation" className={getLinkStyles}>
                    Project Creation
                </NavLink>

                <NavLink to="upload-baseline" className={getLinkStyles}>
                    Upload Baseline Data
                </NavLink>

                <NavLink to="monitoring-stages" className={getLinkStyles}>
                    Submit Monitoring Visit Data
                </NavLink>

                <NavLink to="generate-reports" className={getLinkStyles}>
                    Generate Reports
                </NavLink>

                <NavLink to="add-section" className={getLinkStyles}>
                    Add a Section
                </NavLink>

                <NavLink to="add-target" className={getLinkStyles}>
                    Add a Target
                </NavLink>

                <NavLink to="upload-survey-csv" className={getLinkStyles}>
                    Upload Survey CSV File
                </NavLink>

                <NavLink to="add-survey" className={getLinkStyles}>
                    Add new visit Data
                </NavLink>

                <NavLink to="edit-project" className={getLinkStyles}>
                    Edit a Project
                </NavLink>

                <NavLink to="delete-section" className={getLinkStyles}>
                    Delete a Section
                </NavLink>

            </nav>
        </div>
    );
};

export default GuidanceSidebar;
