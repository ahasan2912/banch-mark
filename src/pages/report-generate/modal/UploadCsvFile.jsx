import React, { useState } from 'react';
import { X } from 'lucide-react';

const UploadModal = ({ setIsOpen }) => {
    const [fileName, setFileName] = useState('');

    const handleUploadButton = () => {
        console.log(fileName);
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div
                className="absolute inset-0"
                onClick={() => setIsOpen(false)}></div>
            <div
                className="relative w-full max-w-125 bg-[#1a2b4b] text-blue-50 rounded-md shadow-2xl border border-blue-900/50 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-4 border-b border-blue-800/50">
                    <h2 className="text-lg font-semibold">
                        Upload Readings from CSV file
                    </h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="hover:text-white transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-5 space-y-4">
                    <p className="text-sm leading-relaxed">
                        Upload readings exported from your device. Please follow the instructions below:
                    </p>

                    <ol className="text-sm space-y-3 opacity-90">
                        <li>1. Download the Template and Example provided below to understand the required format.</li>
                        <li>2. For new projects: You must first set up the sections and targets using the left panel before uploading the CSV file.</li>
                        <li>3. Ensure that the target names in the CSV file exactly match those in the left panel.</li>
                        <li>4. A project must be selected, and a date must be entered prior to uploading the file.</li>
                        <li>5. All readings should be in decimal format (e.g., 599.213).</li>
                        <li>6. Each target name must be unique to the project; you cannot use the same target name more than once.</li>
                        <li>7. Only CSV format is accepted (XLS files will not work).</li>
                    </ol>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                        <button className="bg-gray-600 hover:bg-gray-500 py-2 rounded text-sm font-medium transition-colors">
                            Template
                        </button>
                        <button className="bg-[#305B9C] hover:bg-[#6d8cb9] py-2 rounded text-sm font-medium transition-colors">
                            Example
                        </button>
                    </div>

                    <div className="flex border border-blue-400/30 rounded overflow-hidden h-10">
                        <label className="px-4 flex items-center cursor-pointer text-sm font-medium w-full">
                            <input
                                type="file"
                                className="hidden"
                                accept=".csv"
                                onChange={(e) => setFileName(e.target.files[0])}
                            />
                            {fileName?.name || "Choose CSV file"}
                        </label>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-gray-500/80 hover:bg-gray-500 py-2.5 rounded text-sm font-medium transition-colors cursor-pointer">
                            Cancel
                        </button>
                        <button onClick={handleUploadButton} className="bg-[#22c55e] hover:bg-[#1eb054] py-2.5 rounded text-sm font-medium transition-colors text-white cursor-pointer">
                            Upload CSV
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadModal;