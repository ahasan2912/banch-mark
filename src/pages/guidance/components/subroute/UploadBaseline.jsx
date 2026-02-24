import { CheckCircle2 } from 'lucide-react';

const UploadBaseline = () => {
    const steps = [
        "Select project from live projects list.",
        "Enter date for baseline from the panel on the right.",
        "Click \"Upload Baseline Data\" in the panel on the right",
        "Download the Example and Template CSV files from the format panel for columns:",
        "Ensure section names and target names exactly match the original names in the project.",
        "Only CSV format accepted (.csv not .xls)."
    ];
    return (
        <div className='bg-[#b2d1f0] flex px-6 py-4 mt-2 rounded-lg min-h-[74vh]'>
            <div className="max-w-3xl w-full text-[#1E3A5F]">
                <header className="mb-6">
                    <h1 className="text-4xl font-bold mb-6 text-[#1e3a8a]">
                        Upload Baseline Data
                    </h1>
                    <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                        Follow these steps to upload baseline data using a CSV file. This guide will help ensure that your baseline data is formatted and uploaded successfully.
                    </p>
                </header>

                <ul className="space-y-4">
                    {steps.map((step, index) => (
                        <li key={index} className="flex items-start gap-4 group">
                            <div className="shrink-0 mt-1">
                                <CheckCircle2 className="w-6 h-6 stroke-[2px]" />
                            </div>
                            <span className="text-lg font-medium leading-snug">
                                {step}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UploadBaseline;