import { useEffect } from "react";
import HeadingTitle from "../../components/shared/HeadingTitle";

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    const sections = [
        {
            id: 1,
            title: "Information We Collect",
            content: [
                "Account Information: We collect basic information such as your name and email when you register for an account.",
                "Survey and Monitoring Data: We collect XYZ displacement values (E, N, Z) and other data you upload for analysis.",
                "Usage Data: We track interactions with the platform, including logins, page visits, and feature usage."
            ]
        },
        {
            id: 2,
            title: "How We Use Your Data",
            content: [
                "Service Delivery: To provide, personalize, and improve the platform's features, including generating reports and tracking movements.",
                "Communication: To send updates, product improvements, and respond to support requests.",
                "Analytics: To analyze data for performance and security improvements."
            ]
        },
        {
            id: 3,
            title: "Data Security",
            content: [
                "Encryption: We encrypt your personal and project data both in transit and at rest.",
                "Access Control: Only authorized users can access sensitive data, and we regularly audit these controls.",
                "Two-Factor Authentication: We recommend enabling 2FA for additional account security."
            ]
        }
    ];
    return (
        <div className="selection:bg-blue-500/15" style={{
            background: 'radial-gradient(circle at 20% 30%, #1a2332 0%, #0a0c10 100%)'
        }}>
            <div
                className="w-full text-[#CBD5E1] relative overflow-hidden">
                <div className="absolute -right-100 inset-0 opacity-10 bg-image z-50 -rotate-20 bg-center lg:bg-right bg-cover lg:bg-contain pointer-events-none bg-fixed"></div>
                <div className="max-w-7xl mx-auto px-4 pb-20 pt-24 sm:pt-32">
                    <HeadingTitle
                        title='Privacy Policy'
                        description="At Benchmark, we value your privacy and are committed to safeguarding your personal information. This Privacy Policy explains how we collect, use, and protect your data when you use our Movement Monitoring & Reporting Platform"
                        maxWidth=''
                        position=''
                        text='text-left'
                    />
                    <div className="relative z-10 text-[#CBD5E1] mt-8">
                        {sections.map((section) => (
                            <section key={section.id} className="mb-8">
                                <h2 className="text-[#CBD5E1] font-bold text-lg mb-4">{section.id}. {section.title}</h2>
                                <ul className="list-disc ml-6 space-y-2">
                                    {section.content.map((item, idx) => (
                                        <li key={idx} className="leading-relaxed">{item}</li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto selection:bg-blue-500/15 text-[#CBD5E1] px-4 -mt-20">
                <section className="mb-8">
                    <h2 className="text-[#CBD5E1] font-bold text-lg mb-4">4. Data Retention</h2>
                    <p className="leading-relaxed">
                        We retain your data as long as needed to provide our services and fulfill legal obligations. You may request to delete your data by contacting us at [Insert Contact Information], and we will handle your request promptly.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-[#CBD5E1] font-bold text-lg mb-4">5. Sharing of Information</h2>
                    <p className="mb-2">We do not sell your personal data. However, we may share data in the following cases:</p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Service Providers: Third-party vendors who assist with hosting, payment processing, and analytics.</li>
                        <li>Legal Compliance: To comply with laws or legal requests or to protect our rights.</li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-[#CBD5E1] font-bold text-lg mb-4">6. Cookies and Tracking</h2>
                    <p>We use cookies to improve user experience, analyze site traffic, and ensure functionality. You can control cookies through your browser settings.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-[#CBD5E1] font-bold text-lg mb-4">7. Your Rights</h2>
                    <p className="mb-2">You may have rights under applicable law to:</p>
                    <ul className="list-disc ml-6 space-y-1 mb-2">
                        <li>Access: Request access to your data.</li>
                        <li>Correct: Request corrections to your data.</li>
                        <li>Delete: Request deletion of your data.</li>
                        <li>Opt-Out: Opt-out of marketing emails or other uses of your data.</li>
                    </ul>
                    <p>Contact us at [Insert Contact Information] to exercise your rights.</p>
                </section>
                <section className="mb-8">
                    <h2 className="text-[#CBD5E1] font-bold text-lg mb-4">8. Changes to This Policy</h2>
                    <p>We may update this Privacy Policy to reflect changes in our practices. Any significant updates will be posted on this page. Please check this policy regularly for updates.</p>
                </section>

                <section className="pb-8">
                    <h2 className="text-[#CBD5E1] font-bold text-lg mb-4">9. Contact Us</h2>
                    <p className="mb-4">For any questions or concerns about this Privacy Policy, please reach out to us at:</p>
                    <div className="space-y-1 text-base">
                        <p className="font-semibold text-[#CBD5E1]">Benchmark Site Engineering Ltd.</p>
                        <p>Email: example123@gmail.com</p>
                        <p>Phone: 123456789</p>
                        <p>Address: London, United Kingdom</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Privacy;