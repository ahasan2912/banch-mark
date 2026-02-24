import { useEffect } from "react";
import HeadingTitle from "../../components/shared/HeadingTitle";

const TermCondition = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div className="selection:bg-blue-500/15" style={{
            background: 'radial-gradient(circle at 20% 30%, #1a2332 0%, #0a0c10 100%)'
        }}>
            <div
                className="min-h-screen w-full text-white relative overflow-hidden">
                <div className="absolute -right-100 inset-0 opacity-10 bg-image z-50 -rotate-20 bg-center lg:bg-right bg-cover lg:bg-contain pointer-events-none bg-fixed"></div>
                <div className="max-w-7xl mx-auto px-4 pb-20 pt-24 sm:pt-32">
                    <HeadingTitle
                        title='Terms & Condition'
                        description='By accessing or using the Movement Monitoring & Reporting Platform ("Platform") provided by [Your Company Name] ("we," "our," or "us"), you agree to comply with these Terms and Conditions ("Terms"). If you do not agree with these Terms, please do not use the Platform. We reserve the right to update or change these Terms at any time, and your continued use of the Platform after any changes indicates acceptance of those changes'
                        maxWidth=''
                        position=''
                        text='text-left'
                    />
                    <div className="space-y-4 mt-3">
                        <p>To use certain features of the Platform, you must create an account by providing accurate and complete information. You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account. If you suspect any unauthorized use of your account, you must notify us immediately.We grant you a limited, non-transferable, and non-exclusive license to use the Platform for its intended purposes, subject to these Terms. You agree not to copy, modify, distribute, or engage in any activities that interfere with the functioning of the Platform. You are prohibited from using the Platform for any illegal or unauthorized purposes.
                        </p>
                        <p>Your use of the Platform is governed by our Privacy Policy, which explains how we collect, use, and protect your personal and project data. By using the Platform, you consent to the data practices described in the Privacy Policy.Certain features of the Platform may require payment. The applicable fees for these features will be clearly indicated at the time of purchase. Payments can be made through PayPal, credit card, or other specified methods, and by submitting payment, you authorize us to charge your selected payment method.All content and functionality of the Platform, including software, text, graphics, logos, and other materials, are owned by [Your Company Name] and are protected by intellectual property laws. You retain ownership of any data you upload to the Platform, but by using the Platform, you grant us a license to process and store that data as needed to provide the services.</p>
                        <p>We reserve the right to suspend or terminate your access to the Platform if you violate these Terms or if we believe your actions pose a risk to the security or integrity of the Platform. You may terminate your account at any time by contacting us. The Platform is provided "as is," without any warranties of any kind, either express or implied. We do not guarantee that the Platform will meet your requirements or that the services will be uninterrupted, error-free, or free of viruses. In no event shall [Your Company Name] be liable for any indirect, incidental, or consequential damages arising out of your use of the Platform.
                            You agree to indemnify and hold [Your Company Name] harmless from any claims, damages, or expenses arising from your use of the Platform or violation of these Terms.</p>
                            <p>We reserve the right to suspend or terminate your access to the Platform if you violate these Terms or if we believe your actions pose a risk to the security or integrity of the Platform. You may terminate your account at any time by contacting us.The Platform is provided "as is," without any warranties of any kind, either express or implied. We do not guarantee that the Platform will meet your requirements or that the services will be uninterrupted, error-free, or free of viruses. In no event shall [Your Company Name] be liable for any indirect, incidental, or consequential damages arising out of your use of the Platform. You agree to indemnify and hold [Your Company Name] harmless from any claims, damages, or expenses arising from your use of the Platform or violation of these Terms.</p>
                <p>These Terms will be governed by and construed in accordance with the laws of the jurisdiction in which [Your Company Name] is based. Any disputes related to these Terms shall be resolved in the competent courts of that jurisdiction.We may update these Terms from time to time. When we make significant changes, we will post the updated Terms on this page, and you will be notified if necessary. Please check this page periodically for any updates to ensure that you remain aware of any changes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermCondition;