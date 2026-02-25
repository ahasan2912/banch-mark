import { useEffect } from "react";
import ReportGenerateSidebar from "./component/ReportGenerateSidebar";
import { Outlet } from "react-router-dom";
const ReportGeneration = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div
            className="min-h-screen selection:bg-blue-500/15 pt-24 md:pt-38"
            style={{
                background:
                    "radial-gradient(circle at 20% 30%, #1a2332 0%, #0a0c10 100%)"
            }}>
            <div className="max-w-7xl mx-auto px-4 bg-[#1A2C4D] rounded-lg">
                <div className="flex flex-col sm:flex-row gap-3 pb-5">
                    <div className="flex-1 text-whitet">
                        <Outlet />
                    </div>
                    <div className="w-full sm:w-72">
                        <ReportGenerateSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportGeneration;