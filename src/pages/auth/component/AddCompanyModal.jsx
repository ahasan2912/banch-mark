import { useForm } from "react-hook-form";

const AddCompanyModal = ({ onClose }) => {
  const { register, handleSubmit } = useForm();

  const onCompanySubmit = (data) => {
    console.log("New Company:", data);
    onClose();
  };

  const inputStyle = "w-full bg-slate-800 border border-slate-600 text-white rounded p-3 outline-none focus:border-blue-500 mb-3";

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#1A315580] w-full max-w-lg rounded-xl overflow-hidden shadow-2xl border border-slate-700">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-5 border-b border-slate-700">
          <h2 className="text-blue-200 text-xl font-semibold">Add Company</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white text-2xl">&times;</button>
        </div>

        <form onSubmit={handleSubmit(onCompanySubmit)} className="p-5 space-y-4">
          <div className="bg-blue-600/30 text-blue-200 p-2 rounded text-sm mb-4">
            The company details here will appear on your report
          </div>

          <input {...register("companyName")} placeholder="Company Name" className={inputStyle} />
          <input {...register("companyEmail")} placeholder="Company Email" className={inputStyle} />
          <input {...register("companyPhone")} placeholder="Company Phone" className={inputStyle} />
          <input {...register("companyWebsite")} placeholder="Company Website" className={inputStyle} />
          <textarea {...register("companyAddress")} placeholder="Company Address" className={`${inputStyle} h-24`} />

          <div className="bg-red-900/60 border border-red-900 text-red-200 p-3 rounded flex items-center gap-3">
            <span className="text-xl">⚠</span>
            <span className="text-sm font-medium">The company details here will appear on your report</span>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-600 text-white py-3 rounded hover:bg-gray-500 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-3 rounded hover:bg-blue-500 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCompanyModal;