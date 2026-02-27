import { useForm } from 'react-hook-form';
import { Trash2, Save } from 'lucide-react';

const TextBox = () => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            additionalInfo: ""
        }
    });

    const onSubmit = (data) => {
        console.log("Saved Data:", data);
    };

    const onDelete = () => {
        reset({ additionalInfo: "" });
    };

    return (
        <div className="flex items-center justify-center mt-5">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full bg-[#1e293b] px-6 py-4 rounded-lg shadow-xl border border-slate-700">
                <h2 className="text-white text-lg font-semibold mb-4">
                    Add Additional Info
                </h2>

                <div className="relative mb-6">
                    <textarea
                        {...register("additionalInfo")}
                        placeholder="Enter Any Additional info"
                        className="w-full h-40 bg-[#26354d] text-slate-200 placeholder-slate-400 
                       border border-slate-500 rounded-md p-4 outline-none 
                       focus:ring-2 focus:ring-blue-500 transition-all resize-none"/>
                </div>

                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={onDelete}
                        className="flex items-center justify-center gap-2 bg-[#ff4747] hover:bg-red-600 
                       text-white font-medium py-2.5 px-6 rounded-md transition-colors w-32">
                        <Trash2 size={18} />
                        Delete
                    </button>

                    <button
                        type="submit"
                        className="flex items-center justify-center gap-2 bg-[#34C759] hover:bg-emerald-500 
                       text-white font-medium py-2.5 px-6 rounded-md transition-colors w-32">
                        <Save size={18} />
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TextBox;