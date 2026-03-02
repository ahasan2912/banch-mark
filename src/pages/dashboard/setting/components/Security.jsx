import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, Save } from 'lucide-react';

const Security = () => {
    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false,
    });

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };

    const toggleVisibility = (field) => {
        setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    return (
        <div className="flex items-center text-slate-200 my-8">
            <div className="w-full max-w-4xl bg-[#1e293b] rounded-lg p-2 sm:p-8 shadow-xl">
                <h2 className="text-2xl font-semibold mb-1">Security Settings</h2>
                <p className="text-slate-400 mb-8">Manage your password and security options</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium">Current Password</label>
                        <div className="relative">
                            <input
                                type={showPassword.current ? "text" : "password"}
                                {...register("currentPassword", { required: "Current password is required" })}
                                className="w-full bg-transparent border border-slate-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => toggleVisibility('current')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                            >
                                {showPassword.current ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        {errors.currentPassword && <p className="text-red-400 text-xs">{errors.currentPassword.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium">New Password</label>
                        <div className="relative">
                            <input
                                type={showPassword.new ? "text" : "password"}
                                {...register("newPassword", {
                                    required: "New password is required",
                                    minLength: { value: 8, message: "Password must be at least 8 characters" }
                                })}
                                className="w-full bg-transparent border border-slate-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => toggleVisibility('new')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                            >
                                {showPassword.new ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        {errors.newPassword && <p className="text-red-400 text-xs">{errors.newPassword.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium">Confirm New Password</label>
                        <div className="relative">
                            <input
                                type={showPassword.confirm ? "text" : "password"}
                                {...register("confirmPassword", {
                                    validate: (value) => value === watch('newPassword') || "Passwords do not match"
                                })}
                                className="w-full bg-transparent border border-slate-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => toggleVisibility('confirm')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                            >
                                {showPassword.confirm ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        {errors.confirmPassword && <p className="text-red-400 text-xs">{errors.confirmPassword.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="flex items-center gap-2 bg-[#4f81c7] hover:bg-[#6a8fc2] text-white px-6 py-2.5 rounded-md font-medium transition-colors shadow-lg"
                    >
                        <Save size={18} />
                        Update Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Security;