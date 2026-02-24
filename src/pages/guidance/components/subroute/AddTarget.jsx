import { CheckCircle2 } from "lucide-react";

const AddTarget = () => {
    const steps = [
        "Select project and section from live projects list.",
        "Click \"Add Target\" in the panel on the right.",
        "Enter the target name and the unit of measurement, then define the initial and target readings.",
        "Click \"Save Target\" to add the target to the project."
    ];
    return (
        <div className="bg-[#b2d1f0] flex px-6 py-4 mt-2 rounded-lg min-h-[74vh]">
            <div className="max-w-3xl w-full">
                <header className="mb-6">
                    <h1 className="text-4xl font-bold text-[#1E3A8A] mb-4">
                        Add a Target
                    </h1>
                    <p className="text-lg text-gray-800 leading-relaxed">
                        Follow these steps to add targets to your project. This guide will walk you through the process of adding a target effectively.
                    </p>
                </header>
                <ul className="space-y-4">
                    {steps.map((step, index) => (
                        <li key={index} className="flex items-start gap-4">
                            <div className="mt-1 shrink-0">
                                <CheckCircle2 className="w-6 h-6 text-black stroke-[1.5]" />
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

export default AddTarget;