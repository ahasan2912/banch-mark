import { X } from "lucide-react";
import { useForm } from "react-hook-form";

const ProjectModal = ({ onClose }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log("Project Data:", data);
        onClose();
    };

    const inputClass = "w-full bg-[#2a3b52] border border-slate-500 rounded p-2 text-sm text-white focus:ring-1 focus:ring-blue-400 outline-none";

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
            <div className="bg-[#1a2638] border border-slate-700 rounded-lg w-full max-w-3xl shadow-2xl overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b border-slate-700">
                    <h3 className="text-white font-medium">New Project</h3>
                    <button onClick={onClose}><X className="text-slate-400 hover:text-white" size={20} /></button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column: Details */}
                    <div className="space-y-4">
                        <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider">Project Details</h4>
                        <input {...register("name")} placeholder="Project Name" className={inputClass} />
                        <input {...register("reference")} placeholder="Reference" className={inputClass} />
                        <input {...register("frequency")} placeholder="Frequency" className={inputClass} />
                        <textarea {...register("instrumentation")} placeholder="Instrumentation" rows={6} className={inputClass} />
                    </div>

                    {/* Right Column: Warnings/Alerts */}
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <h4 className="text-yellow-500 text-xs font-bold uppercase tracking-wider">Warning</h4>
                            <input {...register("w_easting")} placeholder="Easting (warning)" className={inputClass} />
                            <input {...register("w_northing")} placeholder="Northing (warning)" className={inputClass} />
                            <input {...register("w_level")} placeholder="Level (warning)" className={inputClass} />
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-red-500 text-xs font-bold uppercase tracking-wider">Alert</h4>
                            <input {...register("a_easting")} placeholder="Easting (Alert)" className={inputClass} />
                            <input {...register("a_northing")} placeholder="Northing (Alert)" className={inputClass} />
                            <input {...register("a_level")} placeholder="Level (Alert)" className={inputClass} />
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button type="button" onClick={onClose} className="flex-1 bg-gray-600 hover:bg-gray-500 text-white py-2 rounded transition-colors">Cancel</button>
                            <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded transition-colors">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectModal;