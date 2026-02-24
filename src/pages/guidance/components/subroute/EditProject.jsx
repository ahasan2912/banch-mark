import { CheckCircle2 } from "lucide-react";

const EditProject = () => {
    const steps = [
        "Go to the projects list.",
        "Find the project you want to edit and click on \"Edit\" next to the project name.",
        "Update the project details such as name, region, or any other relevant information.",
        "Click \"Save Changes\" to update the project information."
    ];
    return (
        <div className="bg-[#b2d1f0] flex px-6 py-4 mt-2 rounded-lg min-h-[74vh]">
            <div className="w-full max-w-4xl">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-[#1E3A8A] mb-6">
                        Edit a Project
                    </h1>
                    <p className="text-lg text-gray-800 leading-relaxed">
                        Follow these steps to edit an existing project in the system. This guide will demonstrate how to efficiently update project details.
                    </p>
                </header>

                <ul className="space-y-4">
                    {steps.map((step, index) => (
                        <li key={index} className="flex items-start gap-4 group">
                            <div className="mt-1 shrink-0">
                                <CheckCircle2
                                    className="text-[#1a1a1a] stroke-[1.5]"
                                />
                            </div>
                            <span className="text-lg text-gray-800">
                                {step}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default EditProject;