import { FileText, FileUp } from "lucide-react";
import { useState } from "react";
import { useAddDrawingsUploadFileMutation } from "../../../../features/projects/projectApi";
import { toast } from "react-toastify";

const DrawingUploadFile = ({ projectId }) => {
    const [file, setFile] = useState(null);
    const [addDrawingsUploadFile, { isLoading }] = useAddDrawingsUploadFileMutation();

    const getShortFileName = (fileName) => {
        const extension = fileName.includes(".") ? fileName.split(".").pop() : "";
        const nameWithoutExtension = extension ? fileName.slice(0, -(extension.length + 1)) : fileName;
        const shortName = nameWithoutExtension
            .split(/[-_\s]+/)
            .filter(Boolean)
            .slice(0, 3)
            .join(" ");

        return extension ? `${shortName}.${extension}` : shortName;
    };

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleImageUpload = async () => {
        const formData = new FormData();
        formData.append("drawings", file);

        const res = await addDrawingsUploadFile({
            data: formData,
            projectId: projectId
        });
        if (res?.data?.success) {
            toast.success("Drawing updated successfully!");
        } else {
            toast.error(res?.data?.message || "Drawing update failed!");
        };
    }
    return (
        <div className="flex items-center justify-between w-full px-6 py-4 bg-[#1e2d4d] rounded-lg shadow-lg border border-slate-700">
            <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-white">Drawings</h3>
                {file && (
                    <p className="mt-2 text-white text-sm">
                        Selected file: <span className="font-medium">{getShortFileName(file.name)}</span>
                    </p>
                )}
            </div>
            <div className="flex items-center gap-2">
                <label className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-3 py-3 rounded-md flex items-center gap-2 transition-all shadow-sm cursor-pointer">
                    <FileText size={20} />
                    <span className="text-sm font-semibold">choice File</span>
                    <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </label>
                <button
                    onClick={handleImageUpload}
                    disabled={isLoading}
                    className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-3 py-3 rounded-md flex items-center transition-all shadow-sm cursor-pointer text-sm font-semibold gap-1">
                    {isLoading ? (
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : <FileUp className="font-bold" size={20} />}
                    {isLoading ? "Upload File.." : "Upload File"}
                </button>
            </div>
        </div>
    );
};

export default DrawingUploadFile;
