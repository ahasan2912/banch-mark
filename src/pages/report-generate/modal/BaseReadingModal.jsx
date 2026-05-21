import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useAddBaseReadingMutation } from "../../../features/target/targetApi";
import { toast } from "react-toastify";

const BaseReadingModal = ({ isOpen, onClose }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { target } = useSelector((state => state?.target));
    const { id: targetId, projectId } = target || {};
    const [addBaseReading, { isLoading }] = useAddBaseReadingMutation();

    const handleFormSubmit = async (data) => {
        const serveyInfo = {
            E: Number(data.E),
            N: Number(data.N),
            Z: Number(data.Z),
        }
        const payload = {
            data: serveyInfo,
            projectId: projectId,
            targetId: targetId,
        }
        const res = await addBaseReading(payload);
        if (res?.data?.success) {
            toast.success("Basereading added successfully!");
            reset();
            onClose();
        } else {
            toast.error(res?.data?.message || "Basereading added failed!");
        };
        reset();
    };

    const handleClose = () => {
        reset();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-[#1a2b4b] w-full max-w-lg rounded-xl shadow-2xl border border-slate-700">
                <div className="flex justify-between items-center p-4 border-b border-slate-700">
                    <h2 className="text-white font-semibold text-lg">Add Basereading</h2>
                    <button type="button" onClick={handleClose} className="text-slate-400 hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit(handleFormSubmit)} className="p-6 space-y-5">
                    {['E', 'N', 'Z'].map((field) => (
                        <div key={field}>
                            <label className="block text-slate-300 text-sm mb-1.5">{field}</label>
                            <input
                                type="number"
                                step="0.001"
                                placeholder={`Enter ${field}`}
                                {...register(field, {
                                    required: `${field} value is required`,
                                    valueAsNumber: true,
                                })}
                                className="w-full bg-[#1e2f56] border border-slate-500 rounded-md p-2.5 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                            />
                            {errors[field] && <p className="text-red-400 text-xs mt-1">{errors[field].message}</p>}
                        </div>
                    ))}
                    <div className="flex gap-3 pt-2">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="flex-1 bg-slate-600 hover:bg-slate-500 text-white py-2.5 rounded-md font-semibold transition">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-blue-200 text-slate-900 py-3 rounded-lg font-semibold hover:bg-blue-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 w-full sm:w-auto px-10">
                            {isLoading && (
                                <span className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></span>
                            )}
                            {isLoading ? "Add Basereading..." : "Add Basereading"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BaseReadingModal;