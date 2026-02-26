import { useState } from 'react';
import { Plus, MoreVertical } from 'lucide-react';
import SurveyModal from '../modal/SurveyModal';

const BASE_E = 123.123;
const BASE_N = 123.123;
const BASE_Z = 123.123;

export default function SurveyTable() {
    const [surveys, setSurveys] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleNewSurvey = (newEntry) => {
        setSurveys([...surveys, newEntry]);
        setIsModalOpen(false);
    };

    return (
        <div className="pt-10 text-slate-300">
            <div className="max-w-7xl mx-auto">
                <div className="overflow-hidden rounded-lg border-4 border-[#E9F6FF] shadow-2xl">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-[#1e2f56] text-sm uppercase tracking-wider text-slate-300">
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
                        <tbody className="bg-[#eef8ff] text-slate-800 text-base">
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

                <SurveyModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleNewSurvey}
                />
            </div>
        </div>
    );
}