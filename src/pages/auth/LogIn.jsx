import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useHandleLoginMutation } from '../../features/auth/authApi';
import { Eye, EyeOff } from 'lucide-react';


const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [handleLogin, { isLoading, error, isSuccess }] = useHandleLoginMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            toast.success("Login Successful!");
            navigate("/");
        }
        if (error) {
            const message = error?.data?.message || "Registration failed!";
            toast.error(message);
        }

    }, [navigate, isSuccess, error]);

    const onSubmit = async (data) => {
        try {
            if (data?.rememberMe === true) {

                //handleLogin
                handleLogin({
                    email: data.email,
                    password: data.password,
                });

                reset();
            } else {
                toast.error('Please click remember checkbox!')
            }
        } catch (err) {
            toast.error(err.message || "Something went wrong!");
        }
    };
    return (
        <div className="w-full max-w-lg mx-auto px-3 sm:px-8 py-12">
            <div className='border border-gray-300 px-4 rounded-xl py-4'>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Sign in</h1>
                <p className="text-gray-500 mb-8">
                    Don't have an account? <Link to="/register" className="text-[#ed8793] font-semibold underline">Create now</Link>
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email"
                            placeholder="example@gmail.com"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#ed8793] outline-none transition"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <div className="relative">
                            <input
                                {...register("password", { required: "Password is required" })}
                                type={showPassword ? "text" : "password"}
                                placeholder="@#*%"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#ed8793] outline-none transition"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Options */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-sm text-gray-600">
                            <input type="checkbox" {...register("rememberMe")} className="rounded border-gray-300 text-emerald-900 focus:ring-[#ed8793]" />
                            Remember me
                        </label>
                        <a href="#" className="text-sm font-semibold text-gray-900 underline">Forgot Password?</a>
                    </div>

                    <button disabled={isLoading} type="submit" className="w-full bg-[#ed8793] text-white py-3 rounded-xl font-bold hover:bg-[#c1848b] transition">
                        Sign in
                    </button>

                    <div className="relative py-4">
                        <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-200"></span></div>
                        <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-400">or</span></div>
                    </div>

                    {/* Social Buttons */}
                    <div className="space-y-3">
                        <button type="button" className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-full hover:bg-gray-50 transition">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                            <span className="font-semibold text-gray-700">Continue with Google</span>
                        </button>
                        <button type="button" className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-full hover:bg-gray-50 transition">
                            <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-5 h-5" alt="Facebook" />
                            <span className="font-semibold text-gray-700">Continue with Facebook</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;