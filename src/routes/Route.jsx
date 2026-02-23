import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import LogIn from "../pages/auth/LogIn"
import Register from "../pages/auth/Register";
import Testing from "../pages/Testing";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Features from "../pages/features/Features";
import Workprocess from "../pages/work/Workprocess";
import Guidance from "../pages/guidance/Guidance";
import Registration from "../pages/guidance/components/Registration";
import GuidanceHome from "../pages/guidance/components/GuidanceHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <div>Error Page ...........</div>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/features",
                element: <Features />,
            },
            {
                path: "/how-it-work",
                element: <
                    Workprocess />,
            },
            {
                path: "/guidance",
                element: <Guidance />,
                children: [
                    {
                        index: true, 
                        element: <GuidanceHome />
                    },
                    {
                        path: "registration",
                        element: <Registration />
                    }
                ]
            },
            {
                path: "/login",
                element: <LogIn />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/testing",
                element: <Testing />

            }
        ],
    },
    {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: 'dashboardHome',
                element: <Dashboard />
            },
        ]
    }
]);

export default router;