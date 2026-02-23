import { CheckCircle2 } from "lucide-react";

const Registration = () => {
    const passwordRequirements = [
        "At least 8 characters long",
        "At least one lowercase letter",
        "At least one uppercase letter",
        "At least one number",
        "At least one special character (!@#$%^&)"
    ];
    return (
        <div className="min-h-screen bg-[#b2d1f0] flex px-6 mt-12 pt-10">
            <div className="max-w-2xl w-full text-[#1e293b]">
                <h1 className="text-4xl font-bold mb-6 text-[#1e3a8a]">Registration</h1>
                <p className="text-lg mb-8 leading-relaxed">
                    Follow these steps to register in the system. This guide will take you through
                    the necessary steps to create an account.
                </p>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <CheckCircle2 className="w-6 h-6 mt-1 shrink-0" />
                        <p className="text-lg">Click "Register for an account".</p>
                    </div>
                    <div className="flex gap-4">
                        <CheckCircle2 className="w-6 h-6 mt-1 shrink-0" />
                        <div>
                            <p className="text-lg mb-4">
                                Enter your full name, email address, and create a secure password.
                                Ensure the password meets all security requirements:
                            </p>
                            <ul className="space-y-3 ml-2">
                                {passwordRequirements.map((req, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-black rounded-full block"></span>
                                        <span className="text-lg">{req}</span>
                                    </li>
                                ))}
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-black rounded-full block"></span>
                                    <span className="text-lg">Accept the terms and conditions by checking the box.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-black rounded-full block"></span>
                                    <span className="text-lg">Click the "Register" button to create your account.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-4">
                        <CheckCircle2 className="w-6 h-6 mt-1 shrink-0" />
                        <p className="text-lg">Accept the terms and conditions by checking the box.</p>
                    </div>

                    {/* Step 4 */}
                    <div className="flex gap-4">
                        <CheckCircle2 className="w-6 h-6 mt-1 shrink-0" />
                        <p className="text-lg">Click the "Register" button to create your account.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Registration;