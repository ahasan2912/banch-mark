import { useForm } from 'react-hook-form';
import { X, Calendar } from 'lucide-react';

const EventModal = ({ isOpen, onClose, onSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  if (!isOpen) return null;

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#1e293b] w-full max-w-md rounded-lg shadow-2xl border border-slate-700 overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-slate-700">
          <h2 className="text-lg font-semibold text-white">New Events</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="p-6 space-y-5">
          <div className="space-y-1">
            <label className="text-sm text-slate-300 font-medium">Event Date</label>
            <div className="relative">
              <input 
                {...register("date", { required: "Date is required" })}
                placeholder="dd/mm/yyyy"
                className="w-full bg-[#243146] border border-blue-400/30 rounded-md p-2.5 text-sm text-white focus:outline-none focus:border-blue-400 transition-colors"
              />
              <Calendar className="absolute right-3 top-2.5 text-slate-400" size={18} />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm text-slate-300 font-medium">Event Description</label>
            <input 
              {...register("description", { required: true })}
              placeholder="Enter Event Description"
              className="w-full bg-[#243146] border border-blue-400/30 rounded-md p-2.5 text-sm text-white focus:outline-none focus:border-blue-400"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm text-slate-300 font-medium">Weather</label>
            <input 
              {...register("weather", { required: true })}
              placeholder="Enter Weather"
              className="w-full bg-[#243146] border border-blue-400/30 rounded-md p-2.5 text-sm text-white focus:outline-none focus:border-blue-400"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm text-slate-300 font-medium">Surveyor</label>
            <input 
              {...register("surveyor", { required: true })}
              placeholder="Enter Surveyor Name"
              className="w-full bg-[#243146] border border-blue-400/30 rounded-md p-2.5 text-sm text-white focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="flex gap-4 pt-4">
            <button 
              type="button"
              onClick={onClose}
              className="flex-1 bg-[#6b7280] hover:bg-opacity-80 text-white font-medium py-2.5 rounded-md transition-all">
              Cancel
            </button>
            <button 
              type="submit"
              className="flex-1 bg-[#3b82f6] hover:bg-blue-600 text-white font-medium py-2.5 rounded-md transition-all">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventModal;