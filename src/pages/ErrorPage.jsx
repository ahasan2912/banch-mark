import { AlertTriangle, ArrowLeft, Home, RefreshCcw } from "lucide-react";
import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    const error = useRouteError();
    const status = error?.status || "404";
    const title = error?.statusText || "Page not found";
    const errorMessage = error?.data || error?.message;
    const message = typeof errorMessage === "string"
        ? errorMessage
        : "The page you are looking for may have been moved, renamed, or is temporarily unavailable.";

    return (
        <div
            className="min-h-screen px-4 py-10 sm:px-6 flex items-center selection:bg-blue-500/15"
            style={{
                background: "radial-gradient(circle at 20% 30%, #1a2332 0%, #0a0c10 100%)",
            }}
        >
            <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-xl border border-slate-700/70 bg-[#101827]/90 shadow-2xl">
                <div className="bg-[#1a2332] px-5 py-4 flex items-center justify-between gap-4 border-b border-slate-700">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-md bg-red-500/15 border border-red-400/30 flex items-center justify-center">
                            <AlertTriangle size={22} className="text-red-400" />
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-wider text-blue-200 font-semibold">
                                Benchmark
                            </p>
                            <h1 className="text-white text-lg sm:text-xl font-semibold">
                                Something went wrong
                            </h1>
                        </div>
                    </div>
                    <span className="text-3xl sm:text-5xl font-bold text-blue-200/90">
                        {status}
                    </span>
                </div>

                <div className="grid lg:grid-cols-[1fr_360px] gap-8 p-6 sm:p-10 items-center">
                    <div>
                        <p className="text-sm font-semibold text-[#60a5fa] uppercase tracking-wide">
                            Error details
                        </p>
                        <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-white">
                            {title}
                        </h2>
                        <p className="mt-4 text-base text-slate-300 max-w-2xl">
                            {message}
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <Link
                                to="/"
                                className="inline-flex items-center justify-center gap-2 bg-[#4a72b2] hover:bg-[#3c6099] text-white font-semibold px-5 py-3 rounded-md transition"
                            >
                                <Home size={18} />
                                Go Home
                            </Link>
                            <button
                                type="button"
                                onClick={() => navigate(-1)}
                                className="inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold px-5 py-3 rounded-md transition cursor-pointer"
                            >
                                <ArrowLeft size={18} />
                                Go Back
                            </button>
                            <button
                                type="button"
                                onClick={() => window.location.reload()}
                                className="inline-flex items-center justify-center gap-2 border border-slate-600 bg-transparent hover:bg-slate-800 text-slate-200 font-semibold px-5 py-3 rounded-md transition cursor-pointer"
                            >
                                <RefreshCcw size={18} />
                                Retry
                            </button>
                        </div>
                    </div>

                    <div className="bg-[#162a4d]/80 border border-slate-700 rounded-lg p-5">
                        <div className="h-48 rounded-md bg-[#0f172a] border border-slate-700 p-4 flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="h-3 w-2/3 rounded bg-[#60a5fa]"></div>
                                <div className="h-3 w-full rounded bg-slate-700"></div>
                                <div className="h-3 w-4/5 rounded bg-slate-700"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                <div className="h-16 rounded-md bg-[#4a72b2]"></div>
                                <div className="h-16 rounded-md bg-[#60a5fa]"></div>
                                <div className="h-16 rounded-md bg-[#22c55e]"></div>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-slate-300">
                            Check the route, return home, or retry the current page.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
