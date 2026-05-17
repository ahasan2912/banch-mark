import { Plus, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import NewProjectModal from '../modal/NewProjectModal';
import UploadBaseReading from '../modal/UploadBaseReading';
import { useAllProjectsListQuery, useDeleteSingleProjectMutation } from '../../../features/projects/projectApi';
import ReportGenerationHomeSkeleton from '../../../components/laoding-skeleton/ReportGenerationHomeSkeleton';
import EditProjectModal from '../modal/EditProjectModal';
import { toast } from 'react-toastify';
import DeleteMessage from './DeleteMessage';
import Section from '../section/Section';
import Target from '../target/Target';
import ProjectList from './ProjectList';

const ReportGenerationHome = () => {
    const [selectedProjectIDValue, setSelectedProjectIDValue] = useState("");
    const [newProjectOpen, setNewProjectOpen] = useState(false);
    const [editProjectOpen, setEditProjectOpen] = useState(false);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [selectedSectionID, setSelectedSectionID] = useState("");
    const [sectionInfo, setSectionInfo] = useState(null);
    const { data: projecstList, isLoading } = useAllProjectsListQuery();
    const [deleteSingleProject, { isLoading: deleteLoading }] = useDeleteSingleProjectMutation();

    const projects = projecstList?.data?.data || [];
    const selectedProjectID = selectedProjectIDValue || (projects[0]?.id ? String(projects[0].id) : "");

    if (isLoading) {
        return <ReportGenerationHomeSkeleton />
    }

    const selectedProject = projects.find((project) => String(project?.id) === selectedProjectID);

    const handleProjectChange = (e) => {
        const projectId = e.target.value;
        setSelectedProjectIDValue(projectId);
        setSelectedSectionID("");
        setSectionInfo(null);
    };

    const handleProjectDelete = async () => {
        if (!selectedProjectID) {
            toast.error("Please select a project first!");
            return;
        }

        const res = await deleteSingleProject(selectedProjectID);
        if (res?.data?.success) {
            toast.success("Project deleted successfully!");
            setSelectedProjectIDValue("");
            setDeleteConfirmOpen(false);
        } else {
            toast.error(res?.error?.data?.message || "Delete failed!");
        }
    }


    return (
        <div className="p-3 sm:p-6 flex flex-col items-start">
            <div className="w-full relative">
                <div className="bg-[#1a2332] rounded-t-xl px-4 py-3 flex items-center justify-between">
                    <ProjectList 
                    selectedProjectID={selectedProjectID}
                    handleProjectChange={handleProjectChange}
                    projects={projects}
                    />
                    <div className="flex items-center gap-2 sm:gap-4">
                        <Plus onClick={() => setNewProjectOpen(true)} size={22} className="text-[#60a5fa] cursor-pointer" />
                        <Pencil onClick={() => setEditProjectOpen(true)} size={20} className="text-[#60a5fa] cursor-pointer" />
                        <Trash2 onClick={() => setDeleteConfirmOpen(true)} size={20} className="text-[#ef4444] cursor-pointer" />
                    </div>
                    {
                        newProjectOpen && <NewProjectModal setIsModalOpen={setNewProjectOpen} />
                    }
                    {
                        editProjectOpen && <EditProjectModal setIsModalOpen={setEditProjectOpen} projectId={selectedProjectID} />
                    }
                    {
                        deleteConfirmOpen && <DeleteMessage
                            setDeleteConfirmOpen={setDeleteConfirmOpen}
                            deleteLoading={deleteLoading}
                            selectedProject={selectedProject}
                            handleProjectDelete={handleProjectDelete}
                        />
                    }
                </div>

                <div className="bg-[#f0f7ff] rounded-b-lg border-t border-slate-700  relative overflow-y-auto custom-scrollbar min-h-75">
                    <div className="flex min-h-full">
                        <Section
                            selectedProjectID={selectedProjectID}
                            selectedSectionID={selectedSectionID}
                            setSelectedSectionID={setSelectedSectionID}
                            sectionInfo={sectionInfo}
                            setSectionInfo={setSectionInfo}
                        />
                        <Target selectedProjectID={selectedProjectID} selectedSectionID={selectedSectionID} sectionInfo={sectionInfo} />
                    </div>
                </div>
                <UploadBaseReading selectedProjectID={selectedProjectID} selectedProject={selectedProject} />
            </div>
        </div>
    );
};

export default ReportGenerationHome;
