import { ArrowLeft, CreditCard, Home, XCircle } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div
            className="selection:bg-blue-500/15"
            style={{
                background: "radial-gradient(circle at 20% 30%, #1a2332 0%, #0a0c10 100%)",
            }}
        >
            <section className="min-h-screen w-full text-white relative overflow-hidden">
                <div className="absolute -right-100 inset-0 opacity-10 bg-image z-50 -rotate-20 bg-center lg:bg-right bg-cover lg:bg-contain pointer-events-none bg-fixed"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 pt-28 sm:pt-36 pb-20">
                    <div className="min-h-[calc(100vh-9rem)] flex items-center justify-center">
                        <div className="w-full max-w-165 rounded-xl border border-white/10 bg-[#1A315580] p-5 sm:p-8 md:p-12 shadow-2xl backdrop-blur-md">
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-rose-300/30 bg-rose-400/10">
                                    <XCircle className="h-11 w-11 text-rose-300" />
                                </div>

                                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#B7D8FF]">
                                    Stripe checkout cancelled
                                </p>
                                <h1 className="text-[30px] sm:text-[44px] font-bold leading-tight text-[#90B5EE]">
                                    Payment Cancelled
                                </h1>
                                <p className="mt-4 max-w-135 text-base sm:text-lg font-medium leading-relaxed text-[#CBD5E1]">
                                    No charge was made. You can safely return to checkout when you are ready or continue exploring the platform.
                                </p>
                            </div>

                            <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-5 sm:p-6">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#B7D8FF]/15">
                                        <CreditCard className="h-5 w-5 text-[#B7D8FF]" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-bold text-white">Need to try again?</h2>
                                        <p className="mt-2 text-sm sm:text-base leading-7 text-[#CBD5E1]">
                                            Return to your report generation area and restart the payment flow. Your account and project information remain unchanged.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    to="/report-generation"
                                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-[#B7D8FF]/90 px-6 py-3 font-bold text-[#1A3155] transition-all duration-300 hover:bg-[#B7D8FF]/70"
                                >
                                    <ArrowLeft className="h-5 w-5" />
                                    Try Again
                                </Link>
                                <Link
                                    to="/"
                                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-white/20 bg-[#1A3155]/80 px-6 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-[#1A3155]/50"
                                >
                                    <Home className="h-5 w-5" />
                                    Back Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cancel;
