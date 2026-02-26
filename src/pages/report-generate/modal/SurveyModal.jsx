import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';

export default function SurveyModal({ isOpen, onClose, onSubmit }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit({
      id: Date.now(),
      date: data.date.split('-').reverse().join('/'),
      E: parseFloat(data.E),
      N: parseFloat(data.N),
      Z: parseFloat(data.Z),
    });
    reset();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a2b4b] w-full max-w-lg rounded-xl shadow-2xl border border-slate-700">
        <div className="flex justify-between items-center p-4 border-b border-slate-700">
          <h2 className="text-white font-semibold text-lg">New Survey</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="p-6 space-y-5">
          <div>
            <label className="block text-slate-300 text-sm mb-1.5">Survey Date</label>
            <input
              type="date"
              {...register("date", { required: "Survey date is required" })}
              className="w-full bg-[#1e2f56] border border-slate-500 rounded-md p-2.5 text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date.message}</p>}
          </div>
          {['E', 'N', 'Z'].map((field) => (
            <div key={field}>
              <label className="block text-slate-300 text-sm mb-1.5">{field}</label>
              <input
                type="number"
                step="0.001"
                placeholder={`Enter ${field}`}
                {...register(field, { required: `${field} value is required` })}
                className="w-full bg-[#1e2f56] border border-slate-500 rounded-md p-2.5 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
              {errors[field] && <p className="text-red-400 text-xs mt-1">{errors[field].message}</p>}
            </div>
          ))}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-slate-600 hover:bg-slate-500 text-white py-2.5 rounded-md font-semibold transition">
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
    </div>
  );
}