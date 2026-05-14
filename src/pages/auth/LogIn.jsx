import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        navigate('/report-generation');
    };
    return (
        <div className="selection:bg-blue-500/15" style={{
            background: 'radial-gradient(circle at 20% 30%, #1a2332 0%, #0a0c10 100%)'
        }}>
            <div
                className="selection:bg-blue-500/15"
                style={{
                    background:
                        "radial-gradient(circle at 20% 30%, #1a2332 0%, #0a0c10 100%)",
                }}
            >
                <div className="min-h-screen w-full text-[#CBD5E1] relative overflow-hidden">
                    <div className="absolute -right-100 inset-0 opacity-10 bg-image z-50 -rotate-20 bg-center lg:bg-right bg-cover lg:bg-contain pointer-events-none bg-fixed"></div>

                    <div className="max-w-7xl mx-auto px-4 pb-20 pt-24 sm:pt-32">
                        <div className="flex items-center justify-center h-full pt-28">
                            <div className="w-full max-w-160 mx-auto bg-[#1A315580] rounded-xl p-4 sm:p-8 md:p-12 shadow-2xl border border-white/5 relative z-10">
                                <div className="text-center mb-10">
                                    <h1 className="text-[28px] sm:text-[40px] font-bold text-[#90B5EE] mb-2">
                                        Welcome Back
                                    </h1>

                                    <p className="text-[#CBD5E1] text-base sm:text-lg">
                                        Sign in to continue to the movement monitoring platform
                                    </p>
                                </div>

                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-6">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" />
                                        </div>

                                        <input
                                            {...register("email", {
                                                required: "Email is required",
                                            })}
                                            type="email"
                                            placeholder="Email"
                                            className="block w-full pl-12 pr-4 py-4 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                                        />

                                        {errors.email && (
                                            <span className="text-red-400 text-sm mt-1">
                                                {errors.email.message}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-400" />
                                        </div>

                                        <input
                                            {...register("password", {
                                                required: "Password is required",
                                            })}
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                            className="block w-full pl-12 pr-12 py-4 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-5 w-5" />
                                            ) : (
                                                <Eye className="h-5 w-5" />
                                            )}
                                        </button>

                                        {errors.password && (
                                            <span className="text-red-400 text-sm mt-1">
                                                {errors.password.message}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                                        <button
                                            type="submit"
                                            className="w-full md:w-auto px-10 py-3 bg-[#bcd9ff] hover:bg-blue-100 text-[#1A3155] font-bold rounded-lg transition-colors text-base sm:text-lg cursor-pointer"
                                        >
                                            Log In
                                        </button>

                                        <div className="text-right space-y-2">
                                            <p className="text-gray-300 text-sm sm:text-base">
                                                Forgot your password?{" "}
                                                <Link
                                                    to="/forgot-password"
                                                    className="text-blue-400 hover:underline">
                                                    Click here
                                                </Link>
                                            </p>

                                            <p className="text-gray-300 text-sm sm:text-base">
                                                Don't have an account?{" "}
                                                <Link
                                                    to="/register"
                                                    className="text-blue-400 hover:underline">
                                                    Register here
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;