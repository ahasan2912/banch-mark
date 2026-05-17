import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { useEditSectionMutation } from "../../../features/section/sectionApi";
import { toast } from "react-toastify";

const EditSectionModal = ({ setIsModalOpen, sectionInfo }) => {
    const modalRef = useRef();
    const [editSection, { isLoading }] = useEditSectionMutation();
    const { id: sectionId, name, projectId } = sectionInfo || {};
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            sectionName: "",
        },
    });

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                setIsModalOpen(false);
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [setIsModalOpen]);

    useEffect(() => {
        reset({
            sectionName: name || "",
        });
    }, [name, reset]);

    const onSubmit = async (data) => {
        const payload = {
            name: data?.sectionName,
        };

        const res = await editSection({
            projectId,
            sectionId,
            data: payload,
        });

        if (res?.data?.success) {
            toast.success("Section updated successfully!");
            setIsModalOpen(false);
        } else {
            toast.error(res?.data?.message || "Section update failed!");
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        >
            <div
                ref={modalRef}
                className="w-full max-w-lg bg-[#162a4d] rounded-lg shadow-xl overflow-hidden text-white border border-gray-700 animate-fadeIn">
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                    <h2 className="text-xl font-semibold">Section Edit Form</h2>
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="text-gray-400 hover:text-white transition"
                    >
                        <X size={20} />
                    </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
                    <div>
                        <label className="block text-base font-medium mb-2 text-gray-300">
                            Section Name
                        </label>
                        <input
                            {...register("sectionName", {
                                required: "Section name is required",
                            })}
                            placeholder="Enter Section Name"
                            className="w-full bg-transparent border border-blue-400/50 rounded-md p-3 outline-none focus:border-blue-400 text-gray-200 placeholder-gray-500 transition-all"
                        />
                        {errors.sectionName && (
                            <p className="text-red-400 text-xs mt-1">
                                {errors.sectionName.message}
                            </p>
                        )}
                    </div>
                    <div className="flex gap-4 pt-4">
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                            className="flex-1 bg-gray-600 hover:bg-gray-500 text-white font-medium py-3 rounded-md transition">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-blue-200 text-slate-900 py-3 rounded-md font-semibold hover:bg-blue-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 w-full sm:w-auto px-10">
                            {isLoading && (
                                <span className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></span>
                            )}
                            {isLoading ? "Edit Section..." : "Edit Section"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditSectionModal;
