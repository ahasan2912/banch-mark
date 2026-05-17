import { Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import CreateTargetModal from '../modal/CreateTargetModal';
import { toast } from 'react-toastify';
import { useAllTargetListQuery } from '../../../features/target/targetApi';

const Target = ({ selectedProjectID, selectedSectionID, sectionInfo }) => {
    const [targetCreate, setTargetCreate] = useState(false);
    console.log(sectionInfo);
    const { projectId, id: sectionId } = sectionInfo || {};
    const { data: targetList, isLoading } = useAllTargetListQuery({ projectId, sectionId }, {
        skip: !projectId || !sectionId,
    });

    if (isLoading) {
        return <p>Loadin......</p>
    }

    console.log(targetList?.data);

    const handleTargetCreateOpen = () => {
        if (!selectedSectionID) {
            toast.error("Please select a section first!");
            return;
        }
        setTargetCreate(true);
    };

    return (
        <div className="w-1/2 p-4 border-r border-[#d1e4ff]">
            <div className="flex items-center gap-3 text-[#334155] font-bold text-base">
                <span>Target</span>
                <Plus onClick={handleTargetCreateOpen} size={21} className="text-[#60a5fa] cursor-pointer" />
                <Pencil size={18} className="text-[#60a5fa] cursor-pointer" />
                <Trash2 size={20} className="text-[#ef4444] cursor-pointer" />
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
            {/* show targer list */}
            <div className="h-100"></div>
        </div>
    );
};

export default Target;


