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
import Registration from "../pages/guidance/components/subroute/Registration";
import GuidanceHome from "../pages/guidance/components/GuidanceHome";
import Project from "../pages/guidance/components/subroute/Project";
import UploadBaseline from "../pages/guidance/components/subroute/UploadBaseline";
import MonitoringStage from "../pages/guidance/components/subroute/MonitoringStage";
import GenereateReport from "../pages/guidance/components/subroute/GenereateReport";
import AddSection from "../pages/guidance/components/subroute/AddSection";
import AddTarget from "../pages/guidance/components/subroute/AddTarget";
import SurveCSVFile from "../pages/guidance/components/subroute/SurveCSVFile";
import AddSurve from "../pages/guidance/components/subroute/AddSurve";
import EditProject from "../pages/guidance/components/subroute/EditProject";
import DeleteSection from "../pages/guidance/components/subroute/DeleteSection";
import ContactUs from "../pages/footer/ContactUs";
import Privacy from "../pages/footer/Privacy";
import TermCondition from "../pages/footer/TermCondition";
import HelpSupport from "../pages/footer/HelpSupport";

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
                element: <Workprocess />,
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
                    },
                    {
                        path: "project-creation",
                        element: <Project />
                    },
                    {
                        path: "upload-baseline",
                        element: <UploadBaseline />
                    },
                    {
                        path: "monitoring-stages",
                        element: <MonitoringStage />
                    },
                    {
                        path: "generate-reports",
                        element: <GenereateReport />
                    },
                    {
                        path: "add-section",
                        element: <AddSection />
                    },
                    {
                        path: "add-target",
                        element: <AddTarget />
                    },
                    {
                        path: "upload-survey-csv",
                        element: <SurveCSVFile />
                    },
                    {
                        path: "add-target",
                        element: <AddTarget />
                    },
                    {
                        path: "add-survey",
                        element: <AddSurve />
                    },
                    {
                        path: "edit-project",
                        element: <EditProject />
                    },
                    {
                        path: "delete-section",
                        element: <DeleteSection />
                    },
                ]
            },
            {
                path: "/contact-us",
                element: <ContactUs />,
            },
            {
                path: "/privacy-policy",
                element: <Privacy />,
            },
            {
                path: "/terms-condition",
                element: <TermCondition />,
            },
            {
                path: "/help-support",
                element: <HelpSupport />,
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