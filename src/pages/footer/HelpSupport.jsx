import { useEffect } from "react";
import HeadingTitle from "../../components/shared/HeadingTitle";

const HelpSupport = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div className="selection:bg-blue-500/15" style={{
            background: 'radial-gradient(circle at 20% 30%, #1a2332 0%, #0a0c10 100%)'
        }}>
            <div
                className="min-h-screen w-full text-[#CBD5E1] relative overflow-hidden">
                <div className="absolute -right-100 inset-0 opacity-10 bg-image z-50 -rotate-20 bg-center lg:bg-right bg-cover lg:bg-contain pointer-events-none bg-fixed"></div>
                <div className="max-w-7xl mx-auto px-4 pb-20 pt-24 sm:pt-32">
                    <HeadingTitle
                        title='Help & Support'
                        description="At Benchmark, we are committed to ensuring that your experience with our Movement Monitoring & Reporting Platform is as seamless as possible. If you encounter any issues or have questions, our support team is here to assist you. You can reach out to us through the following channels:"
                        maxWidth=''
                        position=''
                        text='text-left'
                    />
                    <div className="space-y-4 mt-4">
                        <ul className="space-y-4">
                            <li className="flex gap-2">
                                <span className="text-[#CBD5E1]">•</span>
                                <p className="leading-relaxed">
                                    <strong className="text-[#CBD5E1] font-bold">Email Support:</strong> For detailed inquiries, troubleshooting, or assistance with specific platform features, email us at <span className="text-[#CBD5E1] font-medium cursor-pointer hover:underline">example123@gmail.com</span>. We typically respond within 24-48 hours.
                                </p>
                            </li>

                            <li className="flex gap-2">
                                <span className="text-[#CBD5E1]">•</span>
                                <p className="leading-relaxed">
                                    <strong className="text-[#CBD5E1] font-bold">Phone Support:</strong> If you prefer to speak directly with a support representative, call us at <span className="text-[#CBD5E1] font-medium">+123 123 1223</span> during our support hours of 8:00 AM to 6:00 PM. We are happy to assist you in resolving any issues or providing guidance on using the platform.
                                </p>
                            </li>
                        </ul>
                        <p className="text-gray-300 leading-relaxed">
                            We strive to provide the best customer support, and no matter which method you choose, we’ll ensure that you receive the assistance you need in a timely and professional manner.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpSupport;