import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Save, User } from 'lucide-react';

const Profile = () => {
    const [preview, setPreview] = useState(null);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const avatarFile = watch("avatar");

    useEffect(() => {
        if (avatarFile && avatarFile.length > 0) {
            const file = avatarFile[0];
            setPreview(URL.createObjectURL(file));
            return () => URL.revokeObjectURL(preview);
        }
    }, [avatarFile]);

    const onSubmit = (data) => {
        console.log("Form Data Submitted:", data);
    };

    const inputStyles = "w-full bg-[#1e293b] border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all";
    const labelStyles = "text-sm font-medium text-gray-300 mb-1 block";
    return (
        <div className="text-gray-200 flex my-8 ">
            <div className="w-full max-w-4xl bg-[#1C448033]/20 shadow-xl p-2 sm:p-8">
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold text-[#E9F6FF]">Profile Information</h2>
                    <p className="text-gray-400 text-base mt-1">Upload your personal details and contact information</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="flex items-center gap-6 mb-6">
                        <div className="w-20 h-20 bg-[#1e293b] shadow-lg rounded-full flex items-center justify-center border border-gray-700 overflow-hidden">
                            {preview ? (
                                <img src={preview} alt="Avatar" className="w-full h-full object-cover" />
                            ) : (
                                <User className="text-gray-400" size={32} />
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="avatar-upload"
                                className="cursor-pointer px-4 py-2 border border-gray-600 rounded-md text-sm font-medium hover:bg-gray-800 transition-all text-white"
                            >
                                Change Avatar
                            </label>
                            <input
                                id="avatar-upload"
                                type="file"
                                className="hidden"
                                accept="image/*"
                                {...register("avatar", {
                                    validate: {
                                        lessThan2MB: (files) => !files[0] || files[0].size < 2000000 || "Max size 2MB",
                                        acceptedFormats: (files) => !files[0] || ['image/jpeg', 'image/png'].includes(files[0].type) || "Only JPG/PNG"
                                    }
                                })}
                            />
                            {errors.avatar && <p className="text-red-400 text-xs mt-2">{errors.avatar.message}</p>}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div>
                            <label className={labelStyles}>First Name</label>
                            <input
                                {...register("firstName", { required: "First name is required" })}
                                placeholder="Enter first your name"
                                className={inputStyles}
                            />
                            {errors.firstName && <span className="text-red-400 text-xs mt-1">{errors.firstName.message}</span>}
                        </div>
                        <div>
                            <label className={labelStyles}>Last Name</label>
                            <input
                                {...register("lastName")}
                                placeholder="Enter your last name"
                                className={inputStyles}
                            />
                        </div>
                        <div>
                            <label className={labelStyles}>Email</label>
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                                })}
                                placeholder="Enter your email"
                                className={inputStyles}
                            />
                            {errors.email && <span className="text-red-400 text-xs mt-1">{errors.email.message}</span>}
                        </div>
                        <div>
                            <label className={labelStyles}>Mobile</label>
                            <input
                                {...register("mobile", { required: "Mobile number is required" })}
                                placeholder="Enter your mobile number"
                                className={inputStyles}
                            />
                            {errors.mobile && <span className="text-red-400 text-xs mt-1">{errors.mobile.message}</span>}
                        </div>
                    </div>
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="flex items-center gap-2 bg-[#4c78bc] hover:bg-[#6a8fc2] text-white font-medium py-2.5 px-6 rounded-md transition-all shadow-md active:scale-95"
                        >
                            <Save size={18} />
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;