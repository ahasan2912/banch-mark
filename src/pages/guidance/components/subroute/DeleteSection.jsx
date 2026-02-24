import { CheckCircle2 } from "lucide-react";

const DeleteSection = () => {
    const steps = [
        "Go to the projects list.",
        "Select the project that contains the section you want to delete.",
        "Click \"Delete Section\" next to the section name.",
        "Confirm the deletion by clicking \"Delete\" in the confirmation window."
    ];
    return (
        <div className="bg-[#b2d1f0] flex px-6 py-4 mt-2 rounded-lg min-h-[74vh]">
            <div className="max-w-4xl">
                <h1 className="text-4xl font-bold text-[#1E3A8A] mb-6">
                    Delete a Section
                </h1>

                <p className="text-lg text-gray-800 leading-relaxed">
                    Follow these steps to delete a section from your project. This guide will help you safely remove sections you no longer need.
                </p>
                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <CheckCircle2
                                className="text-[#1a1a1a] stroke-[1.5]"
                                strokeWidth={2.5}
                            />
                            <p className="text-lg text-gray-800">
                                {step}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DeleteSection;