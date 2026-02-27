import { FileText } from "lucide-react";
import { useState } from "react";

const DrawingUploadFile = () => {
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };
    console.log(file);
    return (
        <div className="flex items-center justify-between w-full px-6 py-4 bg-[#1e2d4d] rounded-lg shadow-lg border border-slate-700 mt-5">
            <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-white">Drawings</h3>
                {file && (
                    <p className="mt-2 text-white text-sm">
                        Selected file: <span className="font-medium">{file.name}</span>
                    </p>
                )}
            </div>
            <label className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-3 py-3 rounded-md flex items-center gap-2 transition-all shadow-sm cursor-pointer">
                <FileText size={20} />
                <span className="text-sm font-semibold">Upload File</span>
                <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                />
            </label>
        </div>
    );
};

export default DrawingUploadFile;