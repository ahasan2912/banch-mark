import { CheckCircle2 } from "lucide-react";

const AddSection = () => {
    const steps = [
        "Select project from live projects list.",
        "Click \"Add Section\" in the panel on the right.",
        "Enter the section name and description to define the purpose of the section.",
        "Click \"Save Section\" to add the section to the project."
    ];
    return (
        <div className="bg-[#b2d1f0] flex px-6 py-4 mt-2 rounded-lg min-h-[74vh]">
            <div className="max-w-2xl text-[#1E293B]">
                <h1 className="text-4xl font-bold text-[#1E3A8A] mb-6">
                    Add a Section
                </h1>
                <p className="text-lg mb-8 leading-relaxed">
                    Follow these steps to add sections to your project. This guide will help you organize your project by adding sections efficiently.
                </p>
                <div className="space-y-4">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <div className="mt-1 shrink-0">
                                <CheckCircle2 size={20} strokeWidth={2.5} />
                            </div>
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

export default AddSection;