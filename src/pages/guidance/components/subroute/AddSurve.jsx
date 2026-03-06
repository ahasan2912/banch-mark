import { CheckCircle2 } from "lucide-react";

const AddSurve = () => {
    const steps = [
        "Select project and section from live projects list.",
        "Click \"Add Survey\" in the panel on the right.",
        "Enter the date of the survey and the reading value.",
        "Click \"Save Survey\" to add the survey to the project."
    ];
    return (
        <div className="bg-[#b2d1f0] flex px-6 py-4 mt-2 rounded-lg min-h-[74vh]">
            <div className="w-full max-w-2xl ">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-[#1E3A8A] mb-4">
                        Add new visit Data
                    </h1>
                    <p className="text-lg text-gray-800 leading-relaxed">
                        Follow these steps to add a survey to your project. This guide will help you record new survey readings efficiently.
                    </p>
                </header>

                <ul className="space-y-4">
                    {steps.map((step, index) => (
                        <li key={index} className="flex items-start gap-4">
                            <div className="mt-1 shrink-0">
                                <CheckCircle2
                                    className="w-6 h-6 text-black stroke-[1.5]"
                                    aria-hidden="true"
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

export default AddSurve;