import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";
import LoadingSpiner from "../components/LoadingSpiner";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import ErrorPage from "../pages/ErrorPage";

// Lazy load page components for code splitting
const Home = React.lazy(() => import("../pages/home/Home"));
const LogIn = React.lazy(() => import("../pages/auth/LogIn"));
const Register = React.lazy(() => import("../pages/auth/Register"));
const Features = React.lazy(() => import("../pages/features/Features"));
const Workprocess = React.lazy(() => import("../pages/work/Workprocess"));
const Guidance = React.lazy(() => import("../pages/guidance/Guidance"));
const Registration = React.lazy(() => import("../pages/guidance/components/subroute/Registration"));
const GuidanceHome = React.lazy(() => import("../pages/guidance/components/GuidanceHome"));
const Project = React.lazy(() => import("../pages/guidance/components/subroute/Project"));
const UploadBaseline = React.lazy(() => import("../pages/guidance/components/subroute/UploadBaseline"));
const MonitoringStage = React.lazy(() => import("../pages/guidance/components/subroute/MonitoringStage"));
const GenereateReport = React.lazy(() => import("../pages/guidance/components/subroute/GenereateReport"));
const AddSection = React.lazy(() => import("../pages/guidance/components/subroute/AddSection"));
const AddTarget = React.lazy(() => import("../pages/guidance/components/subroute/AddTarget"));
const SurveCSVFile = React.lazy(() => import("../pages/guidance/components/subroute/SurveCSVFile"));
const AddSurve = React.lazy(() => import("../pages/guidance/components/subroute/AddSurve"));
const EditProject = React.lazy(() => import("../pages/guidance/components/subroute/EditProject"));
const DeleteSection = React.lazy(() => import("../pages/guidance/components/subroute/DeleteSection"));
const ContactUs = React.lazy(() => import("../pages/footer/ContactUs"));
const Privacy = React.lazy(() => import("../pages/footer/Privacy"));
const TermCondition = React.lazy(() => import("../pages/footer/TermCondition"));
const HelpSupport = React.lazy(() => import("../pages/footer/HelpSupport"));
const ForgotPassword = React.lazy(() => import("../pages/auth/ForgotPassword"));
const ResetPassword = React.lazy(() => import("../pages/auth/ResetPassword"));
const UpdatePassword = React.lazy(() => import("../pages/auth/UpdatePassword"));
const ReportGeneration = React.lazy(() => import("../pages/report-generate/ReportGeneration"));
const ReportGenerationHome = React.lazy(() => import("../pages/report-generate/component/ReportGenerationHome"));
const ViewSurvey = React.lazy(() => import("../pages/report-generate/subroute/ViewSurvey"));
const UploadDrawings = React.lazy(() => import("../pages/report-generate/subroute/uploaded-drawing/UploadDrawings"));
const ArchiveProject = React.lazy(() => import("../pages/report-generate/subroute/ArchiveProject"));
const ViewReport = React.lazy(() => import("../pages/report-generate/subroute/ViewReport"));
const ReinstateProject = React.lazy(() => import("../pages/report-generate/subroute/ReinstateProject"));
const SelectProject = React.lazy(() => import("../pages/report-generate/subroute/SelectProject"));
const ViewEvent = React.lazy(() => import("../pages/report-generate/subroute/view-event/ViewEvent"));
const AdditionalInfo = React.lazy(() => import("../pages/report-generate/subroute/additional-info/AdditionalInfo"));
const Dashboard = React.lazy(() => import("../pages/dashboard/home/Dashboard"));
const Users = React.lazy(() => import("../pages/dashboard/users/Users"));
const Projects = React.lazy(() => import("../pages/dashboard/projects/Projects"));
const Reports = React.lazy(() => import("../pages/dashboard/reports/Reports"));
const Revenue = React.lazy(() => import("../pages/dashboard/revenue/Revenue"));
const Settings = React.lazy(() => import("../pages/dashboard/setting/Settings"));
const OtpVerification = React.lazy(() => import("../pages/auth/OtpVerification"));
const ForgotPasswordOTP = React.lazy(() => import("../pages/auth/ForgotPasswordOTP"));
const Success = React.lazy(() => import("../pages/payment/Success"));
const Cancel = React.lazy(() => import("../pages/payment/Cancel"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Suspense fallback={<LoadingSpiner />}><Home /></Suspense>,
            },
            {
                path: "/features",
                element: <Suspense fallback={<LoadingSpiner />}><Features /></Suspense>,
            },
            {
                path: "/how-it-work",
                element: <Suspense fallback={<LoadingSpiner />}><Workprocess /></Suspense>,
            },
            {
                path: "/guidance",
                element: <Suspense fallback={<LoadingSpiner />}><Guidance /></Suspense>,
                children: [
                    {
                        index: true,
                        element: <Suspense fallback={<LoadingSpiner />}><GuidanceHome /></Suspense>
                    },
                    {
                        path: "registration",
                        element: <Suspense fallback={<LoadingSpiner />}><Registration /></Suspense>
                    },
                    {
                        path: "project-creation",
                        element: <Suspense fallback={<LoadingSpiner />}><Project /></Suspense>
                    },
                    {
                        path: "upload-baseline",
                        element: <Suspense fallback={<LoadingSpiner />}><UploadBaseline /></Suspense>
                    },
                    {
                        path: "monitoring-stages",
                        element: <Suspense fallback={<LoadingSpiner />}><MonitoringStage /></Suspense>
                    },
                    {
                        path: "generate-reports",
                        element: <Suspense fallback={<LoadingSpiner />}><GenereateReport /></Suspense>
                    },
                    {
                        path: "add-section",
                        element: <Suspense fallback={<LoadingSpiner />}><AddSection /></Suspense>
                    },
                    {
                        path: "add-target",
                        element: <Suspense fallback={<LoadingSpiner />}><AddTarget /></Suspense>
                    },
                    {
                        path: "upload-survey-csv",
                        element: <Suspense fallback={<LoadingSpiner />}><SurveCSVFile /></Suspense>
                    },
                    {
                        path: "add-survey",
                        element: <Suspense fallback={<LoadingSpiner />}><AddSurve /></Suspense>
                    },
                    {
                        path: "edit-project",
                        element: <Suspense fallback={<LoadingSpiner />}><EditProject /></Suspense>
                    },
                    {
                        path: "delete-section",
                        element: <Suspense fallback={<LoadingSpiner />}><DeleteSection /></Suspense>
                    },
                ]
            },
            {
                path: "/contact-us",
                element: <Suspense fallback={<LoadingSpiner />}><ContactUs /></Suspense>,
            },
            {
                path: "/privacy-policy",
                element: <Suspense fallback={<LoadingSpiner />}><Privacy /></Suspense>,
            },
            {
                path: "/terms-condition",
                element: <Suspense fallback={<LoadingSpiner />}><TermCondition /></Suspense>,
            },
            {
                path: "/help-support",
                element: <Suspense fallback={<LoadingSpiner />}><HelpSupport /></Suspense>,
            },
            {
                path: "/success",
                element: <Suspense fallback={<LoadingSpiner />}><Success /></Suspense>,
            },
            {
                path: "/cancel",
                element: <Suspense fallback={<LoadingSpiner />}><Cancel /></Suspense>,
            },
            {
                path: "/login",
                element: <Suspense fallback={<LoadingSpiner />}><LogIn /></Suspense>,
            },
            {
                path: "/register",
                element: <Suspense fallback={<LoadingSpiner />}><Register /></Suspense>,
            },
            {
                path: "/otp-verification",
                element: <Suspense fallback={<LoadingSpiner />}><OtpVerification /></Suspense>
            },
            {
                path: "/forgot-password",
                element: <Suspense fallback={<LoadingSpiner />}><ForgotPassword /></Suspense>,
            },
            {
                path: "/forgot-password-otp",
                element: <Suspense fallback={<LoadingSpiner />}><ForgotPasswordOTP /></Suspense>,
            },
            {
                path: "/reset-password",
                element: <Suspense fallback={<LoadingSpiner />}><ResetPassword /></Suspense>,
            },
            {
                path: "/update-password",
                element: <Suspense fallback={<LoadingSpiner />}><UpdatePassword /></Suspense>,
            },
            {
                path: "/report-generation",
                element: <Suspense fallback={<LoadingSpiner />}><PrivateRoute><ReportGeneration /></PrivateRoute></Suspense>,
                children: [
                    {
                        index: true,
                        element: <Suspense fallback={<LoadingSpiner />}><ReportGenerationHome /></Suspense>
                    },
                    {
                        path: "view-servey",
                        element: <Suspense fallback={<LoadingSpiner />}><ViewSurvey /></Suspense>
                    },
                    {
                        path: "view-event",
                        element: <Suspense fallback={<LoadingSpiner />}><ViewEvent /></Suspense>
                    },
                    {
                        path: "additional-info",
                        element: <Suspense fallback={<LoadingSpiner />}><AdditionalInfo /></Suspense>
                    },
                    {
                        path: "upload-drawings",
                        element: <Suspense fallback={<LoadingSpiner />}><UploadDrawings /></Suspense>
                    },
                    {
                        path: "archive-project",
                        element: <Suspense fallback={<LoadingSpiner />}><ArchiveProject /></Suspense>
                    },
                    {
                        path: "select-project",
                        element: <Suspense fallback={<LoadingSpiner />}><SelectProject /></Suspense>
                    },
                    {
                        path: "view-report",
                        element: <Suspense fallback={<LoadingSpiner />}><ViewReport /></Suspense>
                    },
                    {
                        path: "reinstate-project",
                        element: <Suspense fallback={<LoadingSpiner />}><ReinstateProject /></Suspense>
                    },
                ]
            },
        ],
    },
    {
        path: 'dashboard',
        element: <Suspense fallback={<LoadingSpiner />}><AdminRoute><DashboardLayout /></AdminRoute></Suspense>,
        children: [
            {
                path: 'admin-dashboard',
                element: <Suspense fallback={<LoadingSpiner />}><Dashboard /></Suspense>
            },
            {
                path: 'users',
                element: <Suspense fallback={<LoadingSpiner />}><Users /></Suspense>
            },
            {
                path: 'projects',
                element: <Suspense fallback={<LoadingSpiner />}><Projects /></Suspense>
            },
            {
                path: 'report',
                element: <Suspense fallback={<LoadingSpiner />}><Reports /></Suspense>
            },
            {
                path: 'revenue',
                element: <Suspense fallback={<LoadingSpiner />}><Revenue /></Suspense>
            },
            {
                path: 'setting',
                element: <Suspense fallback={<LoadingSpiner />}><Settings /></Suspense>
            },
        ]
    }
]);

export default router;
