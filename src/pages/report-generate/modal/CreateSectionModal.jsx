import { useForm, useFieldArray } from "react-hook-form";
import { X, Plus, Trash2 } from "lucide-react";
import { useEffect, useRef } from "react";

const CreateSectionModal = ({ setIsModalOpen }) => {
    const modalRef = useRef();

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            sectionName: "",
            targets: [{ value: "" }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "targets",
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        setIsModalOpen(false);
    };

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                setIsModalOpen(false);
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [setIsModalOpen]);

    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setIsModalOpen(false);
        }
    };

    return (
        <div
            onClick={handleOutsideClick}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        >
            <div
                ref={modalRef}
                className="w-full max-w-lg bg-[#162a4d] rounded-lg shadow-xl overflow-hidden text-white border border-gray-700 animate-fadeIn">
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                    <h2 className="text-xl font-semibold">Section</h2>
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
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <label className="text-base font-medium text-gray-300">
                                Targets
                            </label>
                            <button
                                type="button"
                                onClick={() => append({ value: "" })}
                                className="bg-[#85A0C2] hover:bg-[#618dc2] rounded-full p-2 transition"
                            >
                                <Plus size={14} />
                            </button>
                        </div>

                        {fields.map((field, index) => (
                            <div key={field.id} className="flex gap-2 items-center">
                                <input
                                    {...register(`targets.${index}.value`, {
                                        required: "Target cannot be empty",
                                    })}
                                    placeholder={`Target ${index + 1}`}
                                    className="flex-1 bg-transparent border border-gray-600 rounded-md p-3 outline-none focus:border-blue-400 text-gray-200 placeholder-gray-500 transition-all"
                                />
                                {fields.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => remove(index)}
                                        className="text-gray-400 hover:text-red-400 transition"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                )}
                            </div>
                        ))}
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
                            className="flex-1 bg-[#4473BA] hover:bg-[#7996c2] text-white font-medium py-3 rounded-md transition">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateSectionModal;