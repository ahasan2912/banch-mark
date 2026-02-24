import { CheckCircle2 } from "lucide-react";

const Project = () => {
    const steps = [
        "Go to the projects list.",
        'Click "Create New Project".',
        "Enter the project name, region, and other necessary details in the form.",
        "Select Baseline from the dropdown list.",
        'Optionally, add sections to your project by clicking on "Add Section".'
    ];
    return (
        <div className="bg-[#b2d1f0] flex px-6 py-4 mt-2 rounded-lg min-h-[74vh]">
            <div className="w-full max-w-4xl">
                <h1 className="text-4xl font-bold text-[#1E3A8A] mb-6">
                    Project Creation
                </h1>

                <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                    Follow these steps to create a new project in the system. This guide will walk you through the necessary steps to set up a new project.
                </p>
                <div className="space-y-4">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-4 group">
                            <div className="mt-1 shrink-0">
                                <CheckCircle2
                                    className="w-6 h-6 text-black stroke-[1.5]"
                                />
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

export default Project;