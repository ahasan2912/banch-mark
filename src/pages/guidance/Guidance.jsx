import { Outlet } from "react-router-dom";
import GuidanceSidebar from "./components/GuidanceSidebar";
import GuidanceHeader from "./components/GuidanceHeader";

const Guidance = () => {
    return (
        <div
            className="min-h-screen selection:bg-blue-500/15"
            style={{
                background:
                    "radial-gradient(circle at 20% 30%, #1a2332 0%, #0a0c10 100%)"
            }}>
            <div className="max-w-7xl mx-auto">
                <div className="mt-20 max-w-7xl mx-auto">
                    <GuidanceHeader />
                </div>
                <div className="flex gap-5">
                    <div className="w-64 min-h-screen">
                        <GuidanceSidebar />
                    </div>
                    <div className="flex-1 py-10  pl-10 text-white">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guidance;