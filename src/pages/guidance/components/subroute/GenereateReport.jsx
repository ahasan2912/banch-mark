import { CheckCircle2 } from "lucide-react";

const GenereateReport = () => {
    const steps = [
        "Select project from live projects list.",
        "Click \"Generate Report\" in the panel on the right.",
        "Choose the type of report you need from the available options.",
        "Set date range and any specific parameters for the report.",
        "Click \"Generate\" to create the report. The report will be generated and available for download.."
    ];
    return (
        <div className="bg-[#b2d1f0] flex px-6 py-4 mt-2 rounded-lg min-h-[74vh]">
            <div className="max-w-3xl w-full text-[#1E293B]">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-[#1E3A8A] mb-6">
                        Generate Reports
                    </h1>
                    <p className="text-lg text-slate-700 leading-relaxed max-w-2xl">
                        Follow these steps to generate reports for your projects. This guide will help you generate and view reports effectively.
                    </p>
                </header>
                <ul className="space-y-4">
                    {steps.map((step, index) => (
                        <li key={index} className="flex items-start gap-4 group">
                            <CheckCircle2
                                className="w-6 h-6 mt-1 shrink-0 text-[#1E293B]"
                                strokeWidth={2}
                            />
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

export default GenereateReport;