import { CircleArrowLeft } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectList = ({ selectedProjectID, handleProjectChange, projects }) => {
    const navigate = useNavigate();
    const handleReportGeneration = () => {
        navigate('/report-generation');
    }
    return (
        <div className="flex items-center gap-2 sm:gap-6">
            <span className="text-white text-sm sm:text-base font-semibold tracking-wide flex gap-2">
                <CircleArrowLeft onClick={handleReportGeneration} className='cursor-pointer' />
                Live Projects
            </span>
            <select
                value={selectedProjectID || ""}
                onChange={handleProjectChange}
                className="bg-white text-[#475569] text-base py-2 px-3 rounded  border outline-none focus:ring-2 focus:ring-blue-400">
                {projects.length === 0 && (
                    <option value="">No project found</option>
                )}
                {projects.map((project) => (
                    <option key={project?.id} value={project?.id}>
                        {project?.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ProjectList;