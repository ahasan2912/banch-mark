import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import LogIn from "../pages/auth/LogIn"
import Register from "../pages/auth/Register";
import Testing from "../pages/Testing";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/home/Dashboard";
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
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import UpdatePassword from "../pages/auth/UpdatePassword";
import Addcompany from "../pages/auth/Addcompany";
import ReportGeneration from "../pages/report-generate/ReportGeneration";
import ReportGenerationHome from "../pages/report-generate/component/ReportGenerationHome";
import ViewSurvey from "../pages/report-generate/subroute/ViewSurvey";
import UploadDrawings from "../pages/report-generate/subroute/uploaded-drawing/UploadDrawings";
import ArchiveProject from "../pages/report-generate/subroute/ArchiveProject";
import ViewReport from "../pages/report-generate/subroute/ViewReport";
import ReinstateProject from "../pages/report-generate/subroute/ReinstateProject";
import SelectProject from "../pages/report-generate/subroute/SelectProject";
import ViewEvent from "../pages/report-generate/subroute/view-event/ViewEvent";
import AdditionalInfo from "../pages/report-generate/subroute/additional-info/AdditionalInfo";
import Users from "../pages/dashboard/users/Users";
import Projects from "../pages/dashboard/projects/Projects";
import Reports from "../pages/dashboard/reports/Reports";
import Revenue from "../pages/dashboard/revenue/Revenue";
import Settings from "../pages/dashboard/setting/Settings";

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
                path: "/forgot-password",
                element: <ForgotPassword />,
            },
            {
                path: "/reset-password",
                element: <ResetPassword />,
            },
            {
                path: "/update-password",
                element: <UpdatePassword />,
            },
            {
                path: "/add-company",
                element: <Addcompany />,
            },
            {
                path: "/report-generation",
                element: <ReportGeneration />,
                children: [
                    {
                        index: true,
                        element: <ReportGenerationHome />
                    },
                    {
                        path: "view-servey",
                        element: <ViewSurvey />
                    },
                    {
                        path: "view-event",
                        element: <ViewEvent />
                    },
                    {
                        path: "additional-info",
                        element: <AdditionalInfo />
                    },
                    {
                        path: "upload-drawings",
                        element: <UploadDrawings />
                    },
                    {
                        path: "archive-project",
                        element: <ArchiveProject />
                    },
                    {
                        path: "select-project",
                        element: <SelectProject />
                    },
                    {
                        path: "view-report",
                        element: <ViewReport />
                    },
                    {
                        path: "reinstate-project",
                        element: <ReinstateProject />
                    },
                ]
            },
            {
                path: "/testing",
                element: <Testing />
            },
        ],
    },
    {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: 'admin-dashboard',
                element: <Dashboard />
            },
            {
                path: 'users',
                element: <Users/>
            },
            {
                path: 'projects',
                element: <Projects/>
            },
            {
                path: 'report',
                element: <Reports/>
            },
            {
                path: 'revenue',
                element: <Revenue/>
            },
            {
                path: 'setting',
                element: <Settings/>
            },
        ]
    }
]);

export default router;