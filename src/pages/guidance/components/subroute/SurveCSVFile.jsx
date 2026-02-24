import { CheckCircle2 } from "lucide-react";

const SurveCSVFile = () => {
    const steps = [
        "Select project from live projects list.",
        "Enter date of survey in the panel on the right.",
        "Click \"Upload CSV\" in the panel on the right.",
        "Ensure section names and target names exactly match the original names in the project.",
        "Only CSV format accepted (.csv not .xls)."
    ];
    return (
        <div className="bg-[#b2d1f0] flex px-6 py-4 mt-2 rounded-lg min-h-[74vh]">
            <div className="max-w-4xl text-[#1A2B4B]">
                <h1 className="text-4xl font-bold text-[#1E3A8A] mb-6">
                    Upload Survey CSV File
                </h1>

                <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                    Follow these steps to upload survey data readings using a CSV file.
                    This guide will help ensure your data is formatted correctly and uploaded successfully.
                </p>
                <div className="space-y-4">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="mt-1 shrink-0">
                                <CheckCircle2 size={24} strokeWidth={2} />
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

export default SurveCSVFile;