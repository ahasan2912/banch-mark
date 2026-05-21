import React, { useState } from 'react';
import { FileUp, X } from 'lucide-react';
import { useSurveyCSVUploadedMutation } from '../../../features/survey/surveyApi';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const UploadModal = ({ setIsOpen }) => {
    const [fileName, setFileName] = useState('');
    const [surveyCSVUploaded, { isLoading }] = useSurveyCSVUploadedMutation();
    const { target } = useSelector((state => state?.target));
    const { id: targetId, projectId } = target || {};

    const handleUploadButton = async () => {
        const formData = new FormData();
        formData.append("drawings", fileName);

        const res = await surveyCSVUploaded({
            data: formData,
            targetId: targetId,
            projectId: projectId
        });
        if (res?.data?.success) {
            toast.success("Survey file uploaded successfully!");
        } else {
            toast.error(res?.data?.message || "Survey file uploaded failed!");
        };
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
                        <button onClick={handleUploadButton} className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-3 py-3 rounded-md flex items-center justify-center transition-all shadow-sm cursor-pointer text-sm font-semibold gap-1">
                            {isLoading ? (
                                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            ) : <FileUp className="font-bold" size={20} />}
                            {isLoading ? "Upload File.." : "Upload File"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadModal;

