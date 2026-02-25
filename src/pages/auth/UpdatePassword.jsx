import { Link } from "react-router-dom";
import { images } from "../../assets/image";

const UpdatePassword = () => {
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
                                <div className="flex flex-col text-center gap-3 items-center justify-center mb-10">
                                    <img src={images.updateIcon} alt="updatepassword-icon" />
                                    <h1 className="text-[28px] sm:text-[40px] font-bold text-[#90B5EE]">
                                        Password Updated
                                    </h1>

                                    <p className="text-[#CBD5E1] text-base sm:text-lg">
                                        Your password has been successfully updated. You can now sign in using your new password.
                                    </p>
                                    <div className="pt-6">
                                        <Link to='/login' className="w-full md:w-auto px-10 py-3 bg-[#bcd9ff] hover:bg-blue-100 text-[#1A3155] font-bold rounded-lg transition-colors text-base sm:text-lg cursor-pointer">Back to Sign In</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePassword;