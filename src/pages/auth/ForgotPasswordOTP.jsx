import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useForgetPasswordOtpMutation } from "../../features/auth/authApi";
import { useNavigate } from "react-router-dom";
const OTP_LENGTH = 6;
const OTP_EXPIRY_SECONDS = 5 * 60;

const ForgotPasswordOTP = () => {
    const [otp, setOtp] = useState("");
    const [timeLeft, setTimeLeft] = useState(OTP_EXPIRY_SECONDS);
    const inputRef = useRef(null);
    const [forgetPasswordOtp, { isLoading, isSuccess, error }] = useForgetPasswordOtpMutation();
    const navigate = useNavigate();
    const email = localStorage.getItem("resetEmail");

    useEffect(() => {
        if (isSuccess) {
            toast.success("OTP verified successfully");
            navigate('/reset-password');
        }
        if (error) {
            toast.error(
                error?.data?.message || "OTP verification failed"
            );
        }
    }, [isSuccess, navigate, error]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timerId = setInterval(() => {
            setTimeLeft((currentTime) => Math.max(currentTime - 1, 0));
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft]);

    const formattedTime = `${String(Math.floor(timeLeft / 60)).padStart(2, "0")}.${String(timeLeft % 60).padStart(2, "0")}`;

    const handleChange = (e) => {
        const value = e.target.value.slice(0, OTP_LENGTH);
        setOtp(value);
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasted = e.clipboardData
            .getData("text")
            .slice(0, OTP_LENGTH);
        setOtp(pasted);
    };

    const handleResendCode = () => {
        setOtp("");
        setTimeLeft(OTP_EXPIRY_SECONDS);
        inputRef.current.focus();
    };

    const handleClick = async () => {
        if (otp.length === 6) {
            const res = await forgetPasswordOtp({
                email: email,
                otp: Number(otp),
            });
            localStorage.setItem("resetToken", res?.data?.data);
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
                            <div
                                className="w-full max-w-160 mx-auto bg-[#1A315580] rounded-xl p-4 sm:p-8 md:p-12 shadow-2xl border border-white/5 relative z-10 text-center"
                                onClick={() => inputRef.current.focus()}
                            >
                                <div className="mb-10">
                                    <h1 className="text-[28px] sm:text-[40px] font-bold text-[#90B5EE] mb-2">
                                        Enter Verification Code
                                    </h1>

                                    <p className="text-[#CBD5E1] text-base sm:text-lg">
                                        Please enter the 6-digit code sent to your email
                                    </p>
                                </div>

                                <div className="flex justify-center gap-2 cursor-text">
                                    {Array.from({ length: OTP_LENGTH }).map((_, index) => (
                                        <div
                                            key={index}
                                            className={`w-11 h-11 sm:w-13 sm:h-13 bg-transparent flex items-center justify-center text-xl font-semibold text-white border rounded-lg transition-all
                                            ${index === otp.length ? "border-blue-500 ring-2 ring-blue-500/50" : "border-gray-600"}`}
                                        >
                                            {otp[index] || ""}
                                        </div>
                                    ))}
                                </div>

                                <input
                                    ref={inputRef}
                                    type="number"
                                    value={otp}
                                    onChange={handleChange}
                                    onPaste={handlePaste}
                                    className="absolute text-lg opacity-0 pointer-events-none"
                                />

                                <p className="text-gray-300 text-sm sm:text-base mt-5">
                                    Didn't received the code?
                                    <button
                                        type="button"
                                        onClick={handleResendCode}
                                        className="text-blue-400 font-bold hover:underline cursor-pointer"
                                    >
                                    </button>
                                    <span className="text-[#CBD5E1] font-bold"> {formattedTime}</span>
                                </p>

                                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
                                    <button
                                        type="submit"
                                        onClick={handleClick}
                                        disabled={isLoading}
                                        className="w-full max-w-88 mx-auto bg-blue-200 text-slate-900 py-4 rounded-lg font-semibold hover:bg-blue-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors"
                                    >
                                        {isLoading ? (
                                            <>
                                                <span className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></span>
                                                Continue...
                                            </>
                                        ) : (
                                            "Continue"
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordOTP;