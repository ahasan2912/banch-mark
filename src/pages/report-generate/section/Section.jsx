import React, { useState } from 'react';
import { useAllSectionListQuery, useDeleteSingleSectionMutation } from '../../../features/section/sectionApi';
import ReportGenerationHomeSkeleton from '../../../components/laoding-skeleton/ReportGenerationHomeSkeleton';
import CreateSectionModal from '../modal/CreateSectionModal';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import EditSectionModal from '../modal/EditSectionModal';
import { toast } from 'react-toastify';
import DeleteMessage from '../component/DeleteMessage';

const Section = ({ selectedProjectID, selectedSectionID, setSelectedSectionID, sectionInfo, setSectionInfo }) => {
    const [sectionCreate, setSectionCreate] = useState(false);
    const [sectionedit, setSectionedit] = useState(false);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [deleteSingleSection, { isLoading: deleteLoading }] = useDeleteSingleSectionMutation();
    const { data: sectionList, isLoading: sectionLoading } = useAllSectionListQuery(selectedProjectID, {
        skip: !selectedProjectID,
    });


    if (sectionLoading) {
        return <ReportGenerationHomeSkeleton />
    }

    const sections = sectionList?.data || [];
    const handleSectionSelect = (section) => {
        setSelectedSectionID(section?.id);
        setSectionInfo(section)
    };

    const handleEditSectionOpen = () => {
        if (!sectionInfo) {
            toast.error("Please select a section first!");
            return;
        }
        setSectionedit(true);
    };

    const handleDeleteConfirmOpen = () => {
        if (!selectedSectionID) {
            toast.error("Please select a section first!");
            return;
        }

        setDeleteConfirmOpen(true);
    };

    const handleSectionDelete = async () => {
        if (!selectedProjectID) {
            toast.error("Please select a project first!");
            return;
        }
        if (!selectedSectionID) {
            toast.error("Please select a section first!");
            return;
        }

        const payload = {
            projectId: selectedProjectID,
            sectionId: selectedSectionID
        }
        const res = await deleteSingleSection(payload);
        if (res?.data?.success) {
            toast.success("Section deleted successfully!");
            setSelectedSectionID("");
            setSectionInfo(null);
            setDeleteConfirmOpen(false);
        } else {
            toast.error(res?.error?.data?.message || "Delete failed!");
        }
    }

    return (
        <div className="w-1/2 p-4 border-r border-[#d1e4ff]">
            <div className="flex items-center gap-3 text-[#334155] font-bold text-base">
                <span>Section</span>
                <Plus onClick={() => setSectionCreate(true)} size={21} className="text-[#60a5fa] cursor-pointer font-bold" />
                <Pencil onClick={handleEditSectionOpen} size={18} className="text-[#60a5fa] cursor-pointer" />
                <Trash2 onClick={handleDeleteConfirmOpen} size={19} className="text-[#ef4444] cursor-pointer" />
            </div>
            {
                sectionCreate && <CreateSectionModal
                    setIsModalOpen={setSectionCreate}
                    projectId={selectedProjectID} />
            }
            {
                sectionedit && <EditSectionModal
                    setIsModalOpen={setSectionedit}
                    sectionInfo={sectionInfo} />
            }
            {
                deleteConfirmOpen && <DeleteMessage
                    setDeleteConfirmOpen={setDeleteConfirmOpen}
                    deleteLoading={deleteLoading}
                    selectedProject={sectionInfo}
                    itemType="section"
                    handleProjectDelete={handleSectionDelete}
                />
            }

            {/* Show section list */}
            <div className="min-h-100 mt-4 space-y-2 overflow-y-auto pr-2 custom-scrollbar">
                {sections.length === 0 ? (
                    <p className="text-sm text-slate-500">No section found</p>
                ) : (
                    sections.map((section) => {
                        const isSelected = selectedSectionID === section?.id;

                        return (
                            <div key={section?.id} className='max-w-full'>
                                <button
                                    type="button"
                                    onClick={() => handleSectionSelect(section)}
                                    className={`w-full text-left px-3 py-2 rounded-md border font-medium transition cursor-pointer ${isSelected
                                        ? "bg-[#4a72b2] border-[#4a72b2] text-white shadow-md"
                                        : "bg-white border-[#d1e4ff] text-[#334155] hover:bg-[#dbeafe] hover:border-[#60a5fa]"
                                        }`}>
                                    {section?.name}
                                </button>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default Section;
