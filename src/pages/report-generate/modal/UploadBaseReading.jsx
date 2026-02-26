import { FileText } from "lucide-react";
import { useState } from "react";

const UploadBaseReading = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };
    return (
        <div className="flex flex-col items-start">
            <label className="mt-5 bg-[#22c55e] hover:bg-[#16a34a] text-white px-3 py-3 rounded-md flex items-center gap-2 transition-all shadow-sm cursor-pointer">
                <FileText size={20} />
                <span className="text-sm font-semibold">Upload Base readings</span>
                <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                />
            </label>
            {file && (
                <p className="mt-2 text-white text-sm">
                    Selected file: <span className="font-medium">{file.name}</span>
                </p>
            )}
        </div>
    );
};

export default UploadBaseReading;