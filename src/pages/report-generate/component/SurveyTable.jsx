import { useState } from 'react';
import { Plus, MoreVertical, X, Trash, Pencil } from 'lucide-react';
import SurveyModal from '../modal/SurveyModal';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useAllSurveyListQuery, useDeleteSurveyMutation } from '../../../features/survey/surveyApi';
import TableSkeleton from '../../../components/laoding-skeleton/TableSkeleton';
import DeleteMessage from './DeleteMessage';

export default function SurveyTable() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openPopupId, setOpenPopupId] = useState(null);
    const [selectedSurvey, setSelectedSurvey] = useState(null);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [surveyToDelete, setSurveyToDelete] = useState(null);
    const { target } = useSelector((state => state?.target));
    const { id: targetId, projectId } = target || {};
    const [deleteSurvey, { isLoading: isDeleting }] = useDeleteSurveyMutation();
    const { data: surveys, isLoading } = useAllSurveyListQuery(
        { projectId, targetId },
        {
            skip: !projectId || !targetId,
        }
    );

    if (isLoading) {
        return <TableSkeleton />
    }

    const handlePopUp = (rowId) => {
        setOpenPopupId(openPopupId === rowId ? null : rowId);
    };

    const handleAddSurvey = () => {
        if (!target) {
            toast.error('Please select a target');
            return;
        }
        setIsModalOpen(true);
        setSelectedSurvey(null);
    };

    const handleEditSurvey = (survey) => {
        setSelectedSurvey(survey);
        setIsModalOpen(true);
        setOpenPopupId(null);
    };

    const handleDeleteConfirmOpen = (survey) => {
        setSurveyToDelete(survey);
        setOpenPopupId(null);
        setDeleteConfirmOpen(true);
    };

    const handleDeleteSurvey = async () => {
        if (!projectId || !surveyToDelete?.id || isDeleting) return;

        const res = await deleteSurvey({ projectId, surveyId: surveyToDelete.id });

        if (res?.data?.success) {
            toast.success('Survey deleted successfully!');
            setDeleteConfirmOpen(false);
            setSurveyToDelete(null);
        } else {
            toast.error(res?.data?.message || 'Survey delete failed!');
        }
    };

    const formatDate = (iso) => {
        if (!iso) return '';

        return new Intl.DateTimeFormat("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }).format(new Date(iso));
    };

    return (
        <div className="pt-5 text-slate-300 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="overflow-x-auto rounded-lg border-4 border-[#E9F6FF] shadow-2xl">
                    <table className="w-full text-left border-collapse overflow-x-auto">
                        <thead className="bg-[#1e2f56] text-sm uppercase tracking-wider text-slate-300">
                            <tr>
                                <th className="p-4 border-b border-slate-700">Survey Date</th>
                                <th colSpan="3" className="p-4 border-b border-l border-slate-700 text-center">Base Readings</th>
                                <th colSpan="3" className="p-4 border-b border-l border-slate-700 text-center">Survey Readings</th>
                                <th colSpan="3" className="p-4 border-b border-l border-slate-700 text-center">Movement from Base (m)</th>
                                <th className="p-4 border-b border-slate-700 text-right">
                                    <button
                                        onClick={handleAddSurvey}
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
                            {surveys?.data?.surveys?.map((row) => (
                                <tr key={row.id} className="border-b border-blue-100 hover:bg-blue-50 transition relative">
                                    <td className="px-4 py-3 whitespace-nowrap">{formatDate(row?.surveyDate || row?.updatedAt)}</td>
                                    {/* Base Readings */}
                                    <td className="px-4 py-3 border-l border-blue-100">{row?.baseReading?.E?.toFixed(2)}</td>
                                    <td className="px-4 py-3">{row?.baseReading?.N?.toFixed(2)}</td>
                                    <td className="px-4 py-3">{row?.baseReading?.Z?.toFixed(2)}</td>

                                    {/* Survey Readings */}
                                    <td className="px-4 py-3 border-l border-blue-100">{row?.surveyReading?.E.toFixed(2)}</td>
                                    <td className="px-4 py-3">{row?.surveyReading?.N.toFixed(2)}</td>
                                    <td className="px-4 py-3">{row?.surveyReading?.Z.toFixed(2)}</td>

                                    {/* Movement from Base (m) */}
                                    <td className="px-4 py-3 border-l border-blue-100 bg-[#dcfce7] font-medium">{(row?.movementReading?.E.toFixed(2))}</td>
                                    <td className="px-4 py-3 bg-[#dcfce7] font-medium">{(row?.movementReading?.N?.toFixed(2))}</td>
                                    <td className="px-4 py-3 bg-[#dcfce7] font-medium">{(row?.movementReading?.Z?.toFixed(2))}</td>

                                    <td className="px-4 py-3 text-right relative">
                                        <button
                                            type="button"
                                            onClick={() => handlePopUp(row.id)}
                                            className="inline-flex items-center justify-center text-gray-700 hover:text-slate-900"
                                        >
                                            <MoreVertical size={18} />
                                        </button>

                                        {openPopupId === row.id && (
                                            <div className='absolute right-0 -top-20 bg-[#E9F6FF] px-3 py-4 rounded-sm shadow-xl z-10 w-44 text-left'>
                                                <X
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        setOpenPopupId(null);
                                                    }}
                                                    className='text-[#183A71] cursor-pointer absolute right-1 top-2'
                                                    size={20}
                                                />
                                                <div className='flex flex-col gap-2 text-[15px] text-[#183A71] font-medium'>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleEditSurvey(row)}
                                                        className='px-2 py-1.5 hover:bg-blue-100 rounded flex items-center gap-2 transition-colors font-semibold'>
                                                        <Pencil size={16} /> Edit Survey
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDeleteConfirmOpen(row)}
                                                        disabled={isDeleting}
                                                        className='px-2 py-1.5 hover:bg-blue-100 rounded flex items-center gap-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed'>
                                                        <Trash size={16} /> Delete Survey
                                                    </button>
                                                </div>
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
                    onClose={() => {
                        setIsModalOpen(false);
                        setSelectedSurvey(null);
                    }}
                    surveyToEdit={selectedSurvey}
                />

                {deleteConfirmOpen && (
                    <DeleteMessage
                        setDeleteConfirmOpen={(isOpen) => {
                            setDeleteConfirmOpen(isOpen);
                            if (!isOpen) {
                                setSurveyToDelete(null);
                            }
                        }}
                        deleteLoading={isDeleting}
                        selectedProject={{
                            name: surveyToDelete
                                ? `Survey ${formatDate(surveyToDelete?.surveyDate || surveyToDelete?.updatedAt)}`
                                : 'Selected survey',
                        }}
                        handleProjectDelete={handleDeleteSurvey}
                        itemType="survey"
                    />
                )}
            </div>
        </div>
    );
}
