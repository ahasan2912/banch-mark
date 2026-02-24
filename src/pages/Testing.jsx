import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Handle your login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f1a] p-4">
      {/* Background decoration to mimic the image glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full" />
      </div>

      <div className="w-full max-w-md bg-[#162031] rounded-3xl p-8 md:p-12 shadow-2xl border border-white/5 relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold text-blue-200 mb-4">Welcome Back</h1>
          <p className="text-gray-400 text-lg">
            Sign in to continue to the movement monitoring platform
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Email"
              className="block w-full pl-12 pr-4 py-4 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
            />
            {errors.email && <span className="text-red-400 text-sm mt-1">{errors.email.message}</span>}
          </div>

          {/* Password Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              {...register("password", { required: "Password is required" })}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="block w-full pl-12 pr-12 py-4 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
            {errors.password && <span className="text-red-400 text-sm mt-1">{errors.password.message}</span>}
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
            <button
              type="submit"
              className="w-full md:w-auto px-10 py-3 bg-[#bcd9ff] hover:bg-blue-100 text-[#162031] font-bold rounded-lg transition-colors text-lg"
            >
              Log In
            </button>

            <div className="text-right space-y-2">
              <p className="text-gray-300">
                Forgot your password? <a href="#" className="text-blue-400 hover:underline">Click here</a>
              </p>
              <p className="text-gray-300">
                Don't have an account? <a href="#" className="text-blue-400 hover:underline">Register here</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;