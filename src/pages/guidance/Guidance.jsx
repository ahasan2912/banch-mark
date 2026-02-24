import { Outlet } from "react-router-dom";
import GuidanceSidebar from "./components/GuidanceSidebar";
import GuidanceHeader from "./components/GuidanceHeader";
import { useEffect } from "react";

const Guidance = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div
            className="min-h-screen selection:bg-blue-500/15"
            style={{
                background:
                    "radial-gradient(circle at 20% 30%, #1a2332 0%, #0a0c10 100%)"
            }}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="pt-12 max-w-7xl mx-auto">
                    <GuidanceHeader />
                </div>
                <div className="flex flex-col sm:flex-row gap-2 pb-5">
                    <div className="w-full sm:w-72">
                        <GuidanceSidebar />
                    </div>
                    <div className="flex-1 text-white">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guidance;