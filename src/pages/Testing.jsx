import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AddCompanyModal from "./AddCompanyModal";

const Testing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log("Form Data:", data);

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-200 mb-2">Create Your Account</h1>
          <p className="text-green-500 font-medium">Register now for a free 30-day trial. No obligation.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Company Dropdown */}
          <div className="space-y-4">
            <select
              {...register("company", { required: true })}
              className="w-full bg-slate-800 border border-slate-600 text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              <option value="">Select Company</option>
              <option value="benchmark">BENCHMARK SES LTD</option>
              <option value="culfin">Culfin Data Solutions</option>
            </select>

            <div className="flex items-center justify-between">
              <span className="text-slate-300">Your company not in list?</span>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-200 text-slate-900 px-6 py-2 rounded-md font-semibold hover:bg-blue-300 transition"
              >
                Add Company
              </button>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              {...register("terms", { required: true })}
              className="w-4 h-4 rounded border-slate-600 bg-slate-800"
            />
            <label htmlFor="terms" className="text-slate-300">
              I agree to <span className="text-blue-400 cursor-pointer underline">terms</span> of service
            </label>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="bg-slate-800 text-slate-300 py-3 rounded-lg font-semibold border border-slate-700 hover:bg-slate-700"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-blue-200 text-slate-900 py-3 rounded-lg font-semibold hover:bg-blue-300"
            >
              Register
            </button>
          </div>
        </form>

        <p className="text-center text-slate-300">
          Already have an account? <span className="text-blue-400 cursor-pointer">Sign in</span>
        </p>

        {isModalOpen && <AddCompanyModal onClose={() => setIsModalOpen(false)} />}
      </div>
    </div>
  );
};

export default Testing;