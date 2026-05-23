import { Save, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { authApi } from "../../../../features/auth/authApi";
import { userLoggedIn } from "../../../../features/auth/authSlice";
import { useSetUserProfileMutation } from "../../../../features/dashborad/dashboardApi";

const Profile = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const previewUrlRef = useRef(null);
    const [selectedPreview, setSelectedPreview] = useState(null);
    const [setUserProfile, { isLoading }] = useSetUserProfileMutation();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        values: {
            name: user?.name || "",
            profileImage: null,
        },
    });
    const imageRegister = register("profileImage", {
        validate: {
            lessThan2MB: (files) => !files?.[0] || files[0].size < 2000000 || "Max size 2MB",
            acceptedFormats: (files) => !files?.[0] || ["image/jpeg", "image/png", "image/webp"].includes(files[0].type) || "Only JPG, PNG, or WEBP",
        },
        onChange: (event) => {
            const file = event.target.files?.[0];

            if (previewUrlRef.current) {
                URL.revokeObjectURL(previewUrlRef.current);
                previewUrlRef.current = null;
            }

            if (file) {
                const imageUrl = URL.createObjectURL(file);
                previewUrlRef.current = imageUrl;
                setSelectedPreview(imageUrl);
                return;
            }

            setSelectedPreview(null);
        },
    });
    const preview = selectedPreview || user?.profileImage;

    useEffect(() => {
        return () => {
            if (previewUrlRef.current) {
                URL.revokeObjectURL(previewUrlRef.current);
            }
        };
    }, []);

    const onSubmit = async (data) => {
        const formData = new FormData();

        const payload = {
            name: data.name,
        }

        formData.append("bodyData", JSON.stringify(payload));

        if (data.profileImage?.[0]) {
            formData.append("profileImage", data.profileImage[0]);
        }

        try {
            await setUserProfile(formData).unwrap();
            const profileResponse = await dispatch(
                authApi.endpoints.handleCurrentLoggedInUser.initiate(undefined, {
                    forceRefetch: true,
                })
            ).unwrap();

            if (profileResponse?.data) {
                dispatch(userLoggedIn(profileResponse.data));
            }

            toast.success("Profile updated successfully");
            reset();        } catch (error) {
            toast.error(error?.data?.message || "Profile update failed");
        }
    };

    const inputStyles = "w-full bg-[#1e293b] border border-gray-700 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all";
    const labelStyles = "text-sm font-medium text-gray-300 mb-1 block";

    return (
        <div className="text-gray-200 flex my-8">
            <div className="w-full max-w-4xl bg-[#1e293b] shadow-xl p-2 sm:p-8">
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold text-[#E9F6FF]">Profile Information</h2>
                    <p className="text-gray-400 text-base mt-1">Update your name and profile image</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 bg-[#1e293b] shadow-lg rounded-full flex items-center justify-center border border-gray-700 overflow-hidden">
                            {preview ? (
                                <img src={preview} alt="Profile preview" className="w-full h-full object-cover" />
                            ) : (
                                <User className="text-gray-400" size={32} />
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="profile-image-upload"
                                className="cursor-pointer px-4 py-2 border border-gray-600 rounded-md text-sm font-medium hover:bg-gray-800 transition-all text-white"
                            >
                                Change Image
                            </label>
                            <input
                                id="profile-image-upload"
                                type="file"
                                className="hidden"
                                accept="image/*"
                                {...imageRegister}
                            />
                            {errors.profileImage && <p className="text-red-400 text-xs mt-2">{errors.profileImage.message}</p>}
                        </div>
                    </div>

                    <div>
                        <label className={labelStyles}>Name</label>
                        <input
                            {...register("name", {
                                required: "Name is required",
                                validate: (value) => value.trim().length > 0 || "Name is required",
                            })}
                            placeholder="Enter your name"
                            className={inputStyles}
                        />
                        {errors.name && <span className="text-red-400 text-xs mt-1">{errors.name.message}</span>}
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex items-center gap-2 bg-[#4c78bc] hover:bg-[#6a8fc2] text-white font-medium py-2.5 px-6 rounded-md transition-all shadow-md active:scale-95 disabled:cursor-not-allowed disabled:opacity-70">
                            <Save size={18} />
                            {isLoading && (
                                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            )}
                            {isLoading ? "Saving..." : "Save Changes"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;
