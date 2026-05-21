import { Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import CreateTargetModal from '../modal/CreateTargetModal';
import { toast } from 'react-toastify';
import { useAllTargetListQuery, useDeleteSingleTargetMutation } from '../../../features/target/targetApi';
import ReportGenerationHomeSkeleton from '../../../components/laoding-skeleton/ReportGenerationHomeSkeleton';
import EditTargetModal from '../modal/EditTargetModal';
import DeleteMessage from '../component/DeleteMessage';
import { useDispatch } from 'react-redux';
import { targetInformation } from '../../../features/target/targetSlice';
import TargetSkeleton from '../../../components/laoding-skeleton/TargetSkeleton';

const Target = ({ selectedProjectID, selectedSectionID, sectionInfo }) => {
    const [targetCreate, setTargetCreate] = useState(false);
    const [targetEditOpne, setTargetEditOpen] = useState(false);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const { projectId, id: sectionId } = sectionInfo || {};
    const [targetInfo, setTargetInfo] = useState();
    const dispatch = useDispatch();
    const [deleteSingleTarget, { isLoading: deleteLoading }] = useDeleteSingleTargetMutation();
    const { data: targetList, isLoading } = useAllTargetListQuery({ projectId, sectionId }, {
        skip: !projectId || !sectionId,
    });

    if (isLoading) {
        return <TargetSkeleton />
    }

    const targets = targetList?.data || [];

    const handleTargetSelect = (target) => {
        setTargetInfo(target);
        dispatch(targetInformation(target))
    };

    const handleTargetCreateOpen = () => {
        if (!selectedSectionID) {
            toast.error("Please select a section first!");
            return;
        }
        setTargetCreate(true);
    };

    const handleTargetEditOpen = () => {
        if (!targetInfo) {
            toast.error("Please select a target first!");
            return;
        }
        setTargetEditOpen(true);
    }

    const handleTargetDelete = () => {
        if (!targetInfo) {
            toast.error("Please select a target first!");
            return;
        }

        setDeleteConfirmOpen(true);
    };

    const handleTargetDeleteConfirm = async () => {
        if (!targetInfo) {
            toast.error("Please select a target first!");
            return;
        }

        const payload = {
            projectId: selectedProjectID,
            targetId: targetInfo?.id
        }

        const res = await deleteSingleTarget(payload);
        if (res?.data?.success) {
            toast.success("Target deleted successfully!");
            setTargetInfo(null);
            setDeleteConfirmOpen(false);
        } else {
            toast.error(res?.error?.data?.message || "Delete failed!");
        }
    }


    return (
        <div className="w-1/2 p-4 border-r border-[#d1e4ff]">
            <div className="flex items-center gap-3 text-[#334155] font-bold text-base">
                <span>Target</span>
                <Plus onClick={handleTargetCreateOpen} size={21} className="text-[#60a5fa] cursor-pointer" />
                <Pencil onClick={handleTargetEditOpen} size={18} className="text-[#60a5fa] cursor-pointer" />
                <Trash2 onClick={handleTargetDelete} size={20} className="text-[#ef4444] cursor-pointer" />
            </div>
            {
                targetCreate && (
                    <CreateTargetModal
                        setIsModalOpen={setTargetCreate}
                        projectId={selectedProjectID}
                        sectionId={selectedSectionID}
                        sectionInfo={sectionInfo}
                    />
                )
            }
            {
                targetEditOpne && (
                    <EditTargetModal
                        targetInfo={targetInfo}
                        setIsModalOpen={setTargetEditOpen}
                    />
                )
            }
            {
                deleteConfirmOpen && <DeleteMessage
                    setDeleteConfirmOpen={setDeleteConfirmOpen}
                    deleteLoading={deleteLoading}
                    selectedProject={targetInfo}
                    itemType="target"
                    handleProjectDelete={handleTargetDeleteConfirm}
                />
            }
            {/* Show target list */}
            <div className="min-h-100 mt-4 space-y-2 overflow-y-auto pr-2 custom-scrollbar">
                {targets.length === 0 ? (
                    <p className="text-sm text-slate-500">No target found</p>
                ) : (
                    targets.map((target) => {
                        const isSelected = targetInfo?.id === target?.id;

                        return (
                            <div key={target?.id} className='max-w-full'>
                                <button
                                    type="button"
                                    onClick={() => handleTargetSelect(target)}
                                    className={`w-full text-left px-3 py-2 rounded-md border font-medium transition cursor-pointer ${isSelected
                                        ? "bg-[#4a72b2] border-[#4a72b2] text-white shadow-md"
                                        : "bg-white border-[#d1e4ff] text-[#334155] hover:bg-[#dbeafe] hover:border-[#60a5fa]"
                                        }`}
                                >
                                    {target?.name}
                                </button>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default Target;
