import { useState } from 'react';
import { Plus, MoreVertical, X, Trash, Copy } from 'lucide-react';
import SurveyModal from '../modal/SurveyModal';

const BASE_E = 123.123;
const BASE_N = 123.123;
const BASE_Z = 123.123;

export default function SurveyTable() {
    const [surveys, setSurveys] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openPopupId, setOpenPopupId] = useState(null);

    const handleNewSurvey = (newEntry) => {
        setSurveys([...surveys, newEntry]);
        setIsModalOpen(false);
    };

    const handlePopUp = (rowId) => {
        setOpenPopupId(openPopupId === rowId ? null : rowId);
    };

    return (
        <div className="pt-5 text-slate-300">
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
                                <tr key={row.id} className="border-b border-blue-100 hover:bg-blue-50 transition relative">
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
                                    <td
                                        onClick={() => handlePopUp(row.id)}
                                        className="px-4 py-3 text-right cursor-pointer relative"
                                    >
                                        <MoreVertical size={16} className="inline text-gray-700" />

                                        {/* Popup for this row */}
                                        {openPopupId === row.id && (
                                            <div className='absolute right-0 -top-6 flex bg-[#E9F6FF] px-2 py-3 rounded-sm shadow-lg z-10 w-40'>
                                                <div className='flex flex-col text-[15px] text-[#183A71] font-medium'>
                                                    <button className='px-2 py-1 hover:bg-gray-300 rounded flex justify-center items-center gap-1'><Trash className='-mt-1' size={16} /> Delete Survey</button>
                                                    <button className='px-2 py-1 hover:bg-gray-300 rounded flex justify-center items-center gap-1'><Copy className='-mt-1' size={16} /> Copy Survey</button>
                                                </div>
                                                <X
                                                    onClick={() => setOpenPopupId(null)}
                                                    className='text-[#183A71] cursor-pointer absolute right-1 top-0'
                                                    size={20}
                                                />
                                            </div>
                                        )}
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