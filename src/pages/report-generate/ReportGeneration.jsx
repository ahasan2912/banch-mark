import { useEffect } from "react";
import ReportGenerateSidebar from "./component/ReportGenerateSidebar";
import { Outlet } from "react-router-dom";
const ReportGeneration = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div
            className="min-h-fit selection:bg-blue-500/15 pt-28 pb-8 px-2 sm:px-4"
            style={{
                background:
                    "radial-gradient(circle at 20% 30%, #1a2332 0%, #0a0c10 100%)"
            }}>
            <div className="max-w-7xl mx-auto bg-[#1A2C4D] rounded-lg ">
                <div className="flex flex-col md:flex-row gap-0 pb-5">
                    <div className="flex-1 text-whitet">
                        <Outlet />
                    </div>
                    <div className="w-full md:w-70">
                        <ReportGenerateSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportGeneration;
