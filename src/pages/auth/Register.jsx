import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import AddCompanyModal from './component/AddCompanyModal';
import { useHandleUserCreateMutation } from '../../features/auth/authApi';
import { toast } from 'react-toastify';

const Register = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [companyInfo, setCompanyInfo] = useState(null);
    const [confirmShowPassword, setConfirmShowPassword] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [handleUserCreate, { isLoading: registerLoading }] = useHandleUserCreateMutation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const onSubmit = async (data) => {
        const payload = {
            name: data.name,
            email: data.email,
            password: data.password,
            company: {
                name: companyInfo?.companyName,
                email: companyInfo?.companyEmail,
                phone: companyInfo?.companyPhone,
                website: companyInfo?.companyWebsite,
                address: companyInfo?.companyAddress,
            },
        };
        const res = await handleUserCreate(payload);
        localStorage.setItem("email", data.email);
        if (res?.data?.success) {
            toast.success("Registration successfully!");
            navigate('/otp-verification');
        } else {
            toast.error("Registration faild!");
        }
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
                    <div className="max-w-7xl mx-auto px-4 pb-20 pt-24 sm:pt-20">
                        <div className="flex items-center justify-center h-full pt-24">
                            <div className="w-full max-w-160 mx-auto bg-[#1A315580] rounded-xl p-4 sm:p-8 md:p-12 shadow-2xl border border-white/5 relative z-10">
                                <div className="text-center mb-10">
                                    <h1 className="text-[28px] sm:text-[40px] font-bold text-[#90B5EE] mb-2">
                                        Create Your Account
                                    </h1>

                                    <p className="text-[#CBD5E1] text-base sm:text-lg">
                                        Register now for a free 30-day trial. No obligation.
                                    </p>
                                </div>

                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-6">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </div>

                                        <input
                                            {...register("name", {
                                                required: "Name is required",
                                            })}
                                            type="text"
                                            placeholder="Full Name"
                                            className="block w-full pl-12 pr-4 py-4 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                                        />

                                        {errors.name && (
                                            <span className="text-red-400 text-sm mt-1">
                                                {errors.name.message}
                                            </span>
                                        )}
                                    </div>
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
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-400" />
                                        </div>

                                        <input
                                            {...register("confirmPassword", {
                                                required: "Confirm Password is required",
                                                validate: (value) =>
                                                    value === watch("password") ||
                                                    "Passwords do not match",
                                            })}
                                            type={confirmShowPassword ? "text" : "password"}
                                            placeholder="Confirm your new password"
                                            className="block w-full pl-12 pr-12 py-4 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setConfirmShowPassword(!confirmShowPassword)
                                            }
                                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                                        >
                                            {confirmShowPassword ? (
                                                <EyeOff className="h-5 w-5" />
                                            ) : (
                                                <Eye className="h-5 w-5" />
                                            )}
                                        </button>

                                        {errors.confirmPassword && (
                                            <span className="block text-red-400 text-sm mt-1">
                                                {errors.confirmPassword.message}
                                            </span>
                                        )}
                                    </div>
                                    {/* Add company and checkbox */}
                                    <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id="terms"
                                                {...register("terms", {
                                                    required: "You must accept the Terms and Conditions.",
                                                })}
                                                className="w-4 h-4 rounded border-slate-600 bg-slate-800"
                                            />
                                            <label htmlFor="terms" className="text-slate-300">
                                                I agree to <Link to='/terms-condition' className="text-blue-400 cursor-pointer underline">terms</Link> of service
                                            </label>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setIsModalOpen(true)}
                                            className="bg-blue-200 text-slate-900 px-6 py-3 sm:py-2 rounded-md font-semibold hover:bg-blue-300 transition w-full sm:w-auto cursor-pointer">
                                            Add Company
                                        </button>
                                    </div>
                                    {errors.terms && (
                                        <p className="-mt-7 text-sm text-red-500">
                                            {errors.terms.message}
                                        </p>
                                    )}
                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:pt-2">
                                        <button
                                            type="submit"
                                            disabled={registerLoading}
                                            className="bg-blue-200 text-slate-900 py-3 rounded-lg font-semibold hover:bg-blue-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 w-full sm:w-auto px-10">
                                            {registerLoading && (
                                                <span className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></span>
                                            )}
                                            {registerLoading ? "Sign Up..." : "Sign Up"}
                                        </button>

                                        <div className="text-right space-y-2">
                                            <p className="text-gray-300 text-sm sm:text-base">
                                                Already have an account? {" "}
                                                <Link
                                                    to="/login"
                                                    className="text-blue-400 hover:underline">
                                                    Sign in
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                                {isModalOpen && <AddCompanyModal onClose={() => setIsModalOpen(false)} setCompanyInfo={setCompanyInfo} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
