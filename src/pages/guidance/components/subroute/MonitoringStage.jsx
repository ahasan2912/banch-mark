import { CheckCircle2 } from "lucide-react";

const MonitoringStage = () => {
    const steps = [
        "Select project from live projects list.",
        "Enter date of monitoring stage from panel on the right.",
        "Click \"Submit Monitoring Stage\" in the panel on the right.",
        "Download the Example and Template CSV files from the format panel for columns:",
        "Set the Status and enter a Comment in the panel if required.",
        "Ensure section names and target names exactly match the original names in the project.",
        "Only CSV format accepted (.csv not .xls)."
    ];
    return (
        <div className="bg-[#b2d1f0] flex px-6 py-4 mt-2 rounded-lg min-h-[74vh]">
            <div className="max-w-2xl w-full">
                <h1 className="text-4xl font-bold text-[#1E3A8A] mb-6">
                    Submit Monitoring Visit Data
                </h1>
                <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                    Follow these steps to submit Monitoring Visit Data data using a CSV file.
                    This guide will help ensure the monitoring data is formatted correctly
                    and uploaded successfully.
                </p>
                <div className="space-y-4">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-black stroke-[1.5]" strokeWidth={2} />
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

export default MonitoringStage;