import { useState } from "react";
import { useForm } from "react-hook-form";
import AddCompanyModal from "./component/AddCompanyModal";
import { useGetAllCompanyListQuery } from "../../features/company/companyApi";
import AddCompanySekeleton from "../../components/laoding-skeleton/AddCompanySekeleton";
import { Link, useNavigate } from "react-router-dom";
import { useHandleUserCreateMutation } from "../../features/auth/authApi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Addcompany = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [companyInfo, setCompanyInfo] = useState(null);
    const navigate = useNavigate();
    const { user } = useSelector(state => state?.auth);
    const { data: allCompany, isLoading, isError } = useGetAllCompanyListQuery();
    const [handleUserCreate, { isLoading: registerLoading }] = useHandleUserCreateMutation();

    if (isLoading) {
        return <AddCompanySekeleton />
    }

    console.log(companyInfo);

    const companies = Array.isArray(allCompany?.data)
        ? allCompany.data
        : Object.values(allCompany?.data || {});

    const onSubmit = async (data) => {
        if (data?.terms) {
            try {
                if (allCompany?.data?.length === 0) {
                    const payload = {
                        name: user?.name,
                        email: user?.email,
                        password: user?.password,
                        company: {
                            name: companyInfo?.companyName,
                            email: companyInfo?.companyEmail,
                            phone: companyInfo?.companyPhone,
                            website: companyInfo?.companyWebsite,
                            address: companyInfo?.companyAddress,
                        },
                    };
                    const res = await handleUserCreate(payload);
                    if (res?.data?.success) {
                        toast.success("Registration successfully!");
                        navigate('/otp-verification');
                    }
                } else {
                    const payload = {
                        name: user?.name,
                        email: user?.email,
                        password: user?.password,
                        companyId: data?.companyId
                    };
                    const res = await handleUserCreate(payload);
                    if (res?.data?.success) {
                        toast.success("Registration successfully!");
                        navigate('/otp-verification');
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

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
                                <div className="w-full max-w-md space-y-8">
                                    <div className="text-center mb-10">
                                        <h1 className="text-[28px] sm:text-[40px] font-bold text-[#90B5EE] mb-2">
                                            Create Your Account
                                        </h1>
                                        <p className="text-[#CBD5E1] text-base sm:text-lg">
                                            Register now for a free 30-day trial. No obligation.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        {/* Company Dropdown */}
                                        <div className="space-y-4">
                                            <select
                                                {...register("companyId", { required: true })}
                                                disabled={isError || companies.length === 0}
                                                className="w-full bg-slate-800 border border-slate-600 text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                                                <option value="">
                                                    {isError
                                                        ? "Unable to load companies"
                                                        : companies.length === 0
                                                            ? "No company found"
                                                            : "Select Company"}
                                                </option>
                                                {companies.map((company) => (
                                                    <option key={company.id} value={company.id}>
                                                        {company.name}
                                                    </option>
                                                ))}
                                            </select>

                                            <div className="flex items-center justify-between">
                                                <span className="text-slate-300">Your company not in list?</span>
                                                <button
                                                    type="button"
                                                    onClick={() => setIsModalOpen(true)}
                                                    className="bg-blue-200 text-slate-900 px-6 py-2 rounded-md font-semibold hover:bg-blue-300 transition">
                                                    Add Company
                                                </button>
                                            </div>
                                        </div>

                                        {/* Terms Checkbox */}
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
                                        {errors.terms && (
                                            <p className="-mt-3 text-sm text-red-500">
                                                {errors.terms.message}
                                            </p>
                                        )}

                                        {/* Action Buttons */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <Link to='/register'
                                                type="button"
                                                className="bg-slate-800 text-slate-300 py-3 rounded-lg font-semibold border border-slate-700 hover:bg-slate-700 text-center"
                                            >
                                                Back
                                            </Link>
                                            <button
                                                type="submit"
                                                disabled={registerLoading}
                                                className="bg-blue-200 text-slate-900 py-3 rounded-lg font-semibold hover:bg-blue-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                                                {registerLoading && (
                                                    <span className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></span>
                                                )}
                                                {registerLoading ? "Registering..." : "Register"}
                                            </button>
                                        </div>
                                    </form>
                                    {isModalOpen && <AddCompanyModal onClose={() => setIsModalOpen(false)} setCompanyInfo={setCompanyInfo} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addcompany;
