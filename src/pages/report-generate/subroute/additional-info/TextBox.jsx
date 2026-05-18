import { useForm } from 'react-hook-form';
import { Trash2, Save } from 'lucide-react';
import { useAddAditionalInfoMutation } from '../../../../features/projects/projectApi';
import { toast } from 'react-toastify';

const TextBox = ({ projectId }) => {
    const [addAditionalInfo, { isLoading }] = useAddAditionalInfoMutation();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            additionalInfo: ""
        }
    });

    const onSubmit = async (data) => {
        const payload = {
            additionalInfo: data?.additionalInfo
        }
        if (projectId) {
            const res = await addAditionalInfo({
                projectId: projectId,
                data: payload,
            });
            if (res?.data?.success) {
                toast.success("Aditional Info updated successfully!");
                reset("");
            } else {
                toast.error(res?.data?.message || "Aditional Info update failed!");
            };
        }
    };

    const onDelete = () => {
        reset({ additionalInfo: "" });
    };

    return (
        <div className="flex items-center justify-center w-full">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full bg-[#1e293b] px-6 py-4 rounded-lg shadow-xl border border-slate-700">
                <h2 className="text-white text-lg font-semibold mb-4">
                    Add Additional Info
                </h2>

                <div className="relative mb-6">
                    <textarea
                        {...register("additionalInfo", {
                            required: "Additional information is required",
                        })}
                        placeholder="Enter Any Additional Info"
                        className="w-full h-32 bg-[#26354d] text-slate-200 placeholder-slate-400 
                        border border-slate-500 rounded-md p-4 outline-none 
                        focus:ring-2 focus:ring-blue-500 transition-all resize-none"/>
                </div>
                {errors.additionalInfo && (
                    <p className="text-red-500 text-sm -mt-5">
                        {errors.additionalInfo.message}
                    </p>
                )}

                <div className="flex gap-4 mt-4">
                    <button
                        type="button"
                        onClick={onDelete}
                        className="flex items-center justify-center gap-2 bg-[#ff4747] hover:bg-red-600 
                       text-white font-medium py-2.5 px-6 rounded-md transition-colors w-32 cursor-pointer">
                        <Trash2 size={18} />
                        Delete
                    </button>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center justify-center gap-2 bg-[#34C759] hover:bg-emerald-500 
                       text-white font-medium py-2.5 px-6 rounded-md transition-colors w-32 cursor-pointer">
                        {isLoading && (
                            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        )}
                        {isLoading ? "Save..." : "Save"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TextBox;