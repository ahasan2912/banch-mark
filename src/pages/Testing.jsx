import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { X, Plus, MoreVertical } from 'lucide-react';

const BASE_E = 123.123;
const BASE_N = 123.123;
const BASE_Z = 123.123;

export default function SurveyApp() {
  const [surveys, setSurveys] = useState([
    { id: 1, date: '07/02/2026', E: 123.123, N: 123.123, Z: 123.123 },
    { id: 2, date: '14/02/2026', E: 123.123, N: 123.123, Z: 123.123 },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newEntry = {
      id: Date.now(),
      date: data.date.split('-').reverse().join('/'),
      E: parseFloat(data.E),
      N: parseFloat(data.N),
      Z: parseFloat(data.Z),
    };
    setSurveys([...surveys, newEntry]);
    setIsModalOpen(false);
    reset();
  };

  return (
    <div className="min-h-screen bg-[#0b1120] p-4 md:p-10 text-slate-300 mt-44">
      <div className="max-w-7xl mx-auto">
        
        <div className="overflow-hidden rounded-lg border border-slate-700 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#1e2f56] text-[11px] uppercase tracking-wider text-slate-300">
              <tr>
                <th className="p-4 border-b border-slate-700">Survey Date</th>
                <th colSpan="3" className="p-4 border-b border-l border-slate-700 text-center">Base Readings</th>
                <th colSpan="3" className="p-4 border-b border-l border-slate-700 text-center">Survey Readings</th>
                <th colSpan="3" className="p-4 border-b border-l border-slate-700 text-center">Movement from Base (m)</th>
                <th className="p-4 border-b border-slate-700 text-right">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="hover:bg-blue-500/20 p-1 rounded-full transition"
                  >
                    <Plus size={20} />
                  </button>
                </th>
              </tr>
              <tr className="bg-[#162444] text-slate-400">
                <th className="px-4 py-2 font-normal lowercase">dd/mm/yy</th>
                <th className="px-4 py-2 border-l border-slate-700">E</th>
                <th className="px-4 py-2">N</th>
                <th className="px-4 py-2">Z</th>
                <th className="px-4 py-2 border-l border-slate-700">E</th>
                <th className="px-4 py-2">N</th>
                <th className="px-4 py-2">Z</th>
                <th className="px-4 py-2 border-l border-slate-700">E</th>
                <th className="px-4 py-2">N</th>
                <th className="px-4 py-2">Z</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody className="bg-[#eef8ff] text-slate-800 text-sm">
              {surveys.map((row) => (
                <tr key={row.id} className="border-b border-blue-100 hover:bg-blue-50 transition">
                  <td className="px-4 py-3 whitespace-nowrap">{row.date}</td>
                  <td className="px-4 py-3 border-l border-blue-100">{BASE_E.toFixed(3)}</td>
                  <td className="px-4 py-3">{BASE_N.toFixed(3)}</td>
                  <td className="px-4 py-3">{BASE_Z.toFixed(3)}</td>
                  <td className="px-4 py-3 border-l border-blue-100">{row.E.toFixed(3)}</td>
                  <td className="px-4 py-3">{row.N.toFixed(3)}</td>
                  <td className="px-4 py-3">{row.Z.toFixed(3)}</td>
                  <td className="px-4 py-3 border-l border-blue-100 bg-[#dcfce7] font-medium">{(row.E - BASE_E).toFixed(3)}</td>
                  <td className="px-4 py-3 bg-[#dcfce7] font-medium">{(row.N - BASE_N).toFixed(3)}</td>
                  <td className="px-4 py-3 bg-[#dcfce7] font-medium">{(row.Z - BASE_Z).toFixed(3)}</td>
                  <td className="px-4 py-3 text-right">
                    <MoreVertical size={16} className="inline cursor-pointer text-slate-400" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-[#1a2b4b] w-full max-w-sm rounded-xl shadow-2xl border border-slate-700">
              <div className="flex justify-between items-center p-4 border-b border-slate-700">
                <h2 className="text-white font-semibold text-lg">New Survey</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
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
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 bg-slate-600 hover:bg-slate-500 text-white py-2.5 rounded-md font-semibold transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2.5 rounded-md font-semibold transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}