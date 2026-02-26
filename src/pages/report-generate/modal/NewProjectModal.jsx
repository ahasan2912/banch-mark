import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { X } from "lucide-react";

const NewProjectModal = ({ setIsModalOpen }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        setIsModalOpen(false);
    };

    const inputBase =
        "w-full bg-[#2a3b5a] border border-blue-400/20 rounded-md px-3 py-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors";

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                setIsModalOpen(false);
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [setIsModalOpen]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#1e2d4a] border border-slate-700 rounded-lg shadow-2xl animate-fadeIn">
                <div className="flex justify-between items-center px-6 py-4 border-b border-slate-700">
                    <h2 className="text-white text-xl font-medium">New Project</h2>
                    <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="text-slate-400 text-2xl hover:text-white transition cursor-pointer">
                        <X size={20}/>
                    </button>
                </div>
                <div className="px-4 py-3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    <div className="space-y-4">
                        <h3 className="text-slate-300 text-lg mb-2">Project Details</h3>
                        <div>
                            <input {...register("projectName", { required: "Field required" })} placeholder="Project Name" className={inputBase} />
                            {errors.projectName && <span className="text-red-500 text-xs">{errors.projectName.message}</span>}
                        </div>

                        <div>
                            <input {...register("reference", { required: "Field required" })} placeholder="Reference" className={inputBase} />
                            {errors.reference && <span className="text-red-500 text-xs">{errors.reference.message}</span>}
                        </div>

                        <div>
                            <input {...register("frequency", { required: "Field required" })} placeholder="Frequency" className={inputBase} />
                            {errors.frequency && <span className="text-red-500 text-xs">{errors.frequency.message}</span>}
                        </div>

                        <div>
                            <textarea {...register("instrumentation", { required: "Field required" })} placeholder="Instrumentation" rows={5} className={`${inputBase} resize-none`} />
                            {errors.instrumentation && <span className="text-red-500 text-xs">{errors.instrumentation.message}</span>}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-3">
                            <h3 className="text-yellow-500 text-lg">Warning</h3>

                            <input type="number" step="any" {...register("wEasting", { required: "Required" })} placeholder="Easting (warning)" className={inputBase} />
                            {errors.wEasting && <p className="text-red-500 text-xs">{errors.wEasting.message}</p>}

                            <input type="number" step="any" {...register("wNorthing", { required: "Required" })} placeholder="Northing (warning)" className={inputBase} />
                            {errors.wNorthing && <p className="text-red-500 text-xs">{errors.wNorthing.message}</p>}

                            <input type="number" step="any" {...register("wLevel", { required: "Required" })} placeholder="Level (warning)" className={inputBase} />
                            {errors.wLevel && <p className="text-red-500 text-xs">{errors.wLevel.message}</p>}
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-red-500 text-lg font-medium">Alert</h3>

                            <input type="number" step="any" {...register("aEasting", { required: "Required" })} placeholder="Easting (Alert)" className={inputBase} />
                            {errors.aEasting && <p className="text-red-500 text-xs">{errors.aEasting.message}</p>}

                            <input type="number" step="any" {...register("aNorthing", { required: "Required" })} placeholder="Northing (Alert)" className={inputBase} />
                            {errors.aNorthing && <p className="text-red-500 text-xs">{errors.aNorthing.message}</p>}

                            <input type="number" step="any" {...register("aLevel", { required: "Required" })} placeholder="Level (Alert)" className={inputBase} />
                            {errors.aLevel && <p className="text-red-500 text-xs">{errors.aLevel.message}</p>}
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-4 px-8 pb-8">
                    <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="px-10 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-10 py-2 bg-[#4473BA] text-white rounded-md hover:bg-[#5286d4] transition cursor-pointer">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewProjectModal;