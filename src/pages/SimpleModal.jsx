import { X } from "lucide-react";
import { useForm } from "react-hook-form";

const SimpleModal = ({ title, label, onClose }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div className=" inset-0 flex items-center justify-center p-4 z-50">
      <div className="bg-[#1a2638] border border-slate-700 rounded-lg w-full max-w-md shadow-2xl">
        <div className="flex justify-between items-center p-4 border-b border-slate-700">
          <h3 className="text-white font-medium">{title}</h3>
          <button onClick={onClose}><X className="text-slate-400 hover:text-white" size={20}/></button>
        </div>
        <form onSubmit={handleSubmit((data) => { console.log(data); onClose(); })} className="p-6 space-y-4">
          <div>
            <label className="text-slate-300 text-sm mb-2 block">{label}</label>
            <input 
              {...register("name")} 
              placeholder={`Enter ${label}`} 
              className="w-full bg-[#2a3b52] border border-slate-500 rounded p-3 text-white focus:ring-1 focus:ring-blue-400 outline-none" 
            />
          </div>
          <div className="flex gap-4 pt-2">
            <button type="button" onClick={onClose} className="flex-1 bg-gray-600 hover:bg-gray-500 text-white py-2 rounded">Cancel</button>
            <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SimpleModal;