import { CirclePlus, Plus } from "lucide-react";
import { useState } from "react";
import BaseReadingModal from "./BaseReadingModal";
import { useSelector } from "react-redux";

const UploadBaseReading = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { target } = useSelector((state => state?.target));

    return (
        <div className="mt-5 flex items-center justify-between w-full px-6 py-4 bg-[#1e2d4d] rounded-lg shadow-lg border border-slate-700">
            <div className="flex items-center gap-2">
                <button
                    disabled={target === null}
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#22c55e] hover:bg-[#16a34a] disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-70 text-white px-3 py-3 rounded-md flex items-center transition-all shadow-sm text-sm font-semibold gap-1"
                >
                    <CirclePlus size={20} />
                    Base Reading
                </button>
            </div>
            <BaseReadingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default UploadBaseReading;
