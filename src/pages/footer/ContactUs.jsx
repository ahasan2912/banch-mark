import { useForm } from "react-hook-form";
import { Mail, Phone, Headphones } from "lucide-react";
import HeadingTitle from "../../components/shared/HeadingTitle";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: true,
            offset: 80,
        });

        AOS.refresh();
    }, []);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <div
            className="selection:bg-blue-500/15"
            style={{
                background: "radial-gradient(circle at 20% 30%, #1a2332 0%, #0a0c10 100%)",
            }}
        >
            <div className="min-h-screen w-full text-white relative overflow-hidden">
                <div className="absolute -right-100 inset-0 opacity-10 bg-image z-50 -rotate-20 bg-center lg:bg-right bg-cover lg:bg-contain pointer-events-none bg-fixed"></div>

                <div className="max-w-7xl mx-auto px-4 pb-20 pt-24 sm:pt-32">
                    <div data-aos="fade-up">
                        <HeadingTitle
                            title="Contact Us"
                            description="Have questions or need more information? Reach out to us and we'll be happy to assist you."
                            maxWidth="max-w-[453px]"
                            position=""
                            text="text-left"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-10">
                        <div
                            data-aos="fade-right"
                            data-aos-delay="150"
                            className="bg-[#0f172a]/50 border border-slate-800 p-8 rounded-xl backdrop-blur-sm"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div data-aos="fade-up" data-aos-delay="200">
                                    <input
                                        {...register("fullName", { required: "Name is required" })}
                                        placeholder="Full Name"
                                        className="w-full bg-[#1e293b]/50 border border-slate-700 rounded-lg p-4 outline-none focus:border-blue-500 transition-colors"
                                    />
                                    {errors.fullName && (
                                        <p className="text-red-400 text-sm mt-1">
                                            {errors.fullName.message}
                                        </p>
                                    )}
                                </div>

                                <div data-aos="fade-up" data-aos-delay="250">
                                    <input
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: "Invalid email",
                                            },
                                        })}
                                        placeholder="Email"
                                        className="w-full bg-[#1e293b]/50 border border-slate-700 rounded-lg p-4 outline-none focus:border-blue-500 transition-colors"
                                    />
                                    {errors.email && (
                                        <p className="text-red-400 text-sm mt-1">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                <div data-aos="fade-up" data-aos-delay="300">
                                    <input
                                        {...register("phone")}
                                        placeholder="Phone (optional)"
                                        className="w-full bg-[#1e293b]/50 border border-slate-700 rounded-lg p-4 outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>

                                <div data-aos="fade-up" data-aos-delay="350">
                                    <textarea
                                        {...register("message", {
                                            required: "Please enter a message",
                                        })}
                                        placeholder="Type your message..."
                                        rows="5"
                                        className="w-full bg-[#1e293b]/50 border border-slate-700 rounded-lg p-4 outline-none focus:border-blue-500 transition-colors resize-none"
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-400 text-sm mt-1">
                                            {errors.message.message}
                                        </p>
                                    )}
                                </div>

                                <button
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                    type="submit"
                                    className="w-full md:w-auto px-10 py-3 bg-[#bfdbfe] text-[#1e293b] font-bold rounded-lg hover:bg-blue-200 transition-colors cursor-pointer"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div
                            data-aos="fade-left"
                            data-aos-delay="250"
                            className="bg-[#0f172a]/50 border border-slate-800 p-8 rounded-xl backdrop-blur-sm space-y-6"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

                            <div
                                data-aos="fade-up"
                                data-aos-delay="300"
                                className="flex items-center gap-4 bg-[#1e293b]/30 p-4 rounded-xl border border-slate-800"
                            >
                                <div className="p-3 bg-slate-800 rounded-lg text-blue-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="font-medium">info@yourcompany.com</p>
                                    <p className="text-sm text-gray-500">Info & support</p>
                                </div>
                            </div>

                            <div
                                data-aos="fade-up"
                                data-aos-delay="350"
                                className="flex items-center gap-4 bg-[#1e293b]/30 p-4 rounded-xl border border-slate-800"
                            >
                                <div className="p-3 bg-slate-800 rounded-lg text-blue-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="font-medium">+1 (800) 765-4321</p>
                                </div>
                            </div>

                            <div
                                data-aos="fade-up"
                                data-aos-delay="400"
                                className="flex items-center gap-4 bg-[#1e293b]/30 p-4 rounded-xl border border-slate-800"
                            >
                                <div className="p-3 bg-slate-800 rounded-lg text-blue-300">
                                    <Headphones size={24} />
                                </div>
                                <div>
                                    <p className="font-medium">24/7 Customer Support</p>
                                    <p className="text-sm text-gray-500">
                                        We're here to help anytime day or night
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;