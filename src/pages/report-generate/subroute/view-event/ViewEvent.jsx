import { Plus, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import NewProjectModal from '../../modal/NewProjectModal';
import CreateSectionModal from '../../modal/CreateSectionModal';
import SurveyTable from '../../component/SurveyTable';
import EventTable from './components/EventTable';
import EventModal from './components/EventModal';

const ViewEvent = () => {
    const [selectedProject, setSelectedProject] = useState("Select Project");
    const [newProjectOpen, setNewProjectOpen] = useState(false);
    const [sectionCreate, setSectionCreate] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projects = [
        "Project-1",
        "Project-2",
        "Project-3",
    ];

    const [events, setEvents] = useState([
        { id: 1, date: '07/02/2026', description: 'Movement monitoring survey', weather: 'Rainy 16° C', surveyor: 'Tomal ux' }
    ]);


    const handleAddEvent = (data) => {
        setEvents([...events, { ...data, id: Date.now() }]);
    };

    const handleDeleteEvent = (id) => {
        setEvents(events.filter(e => e.id !== id));
    };

    return (
        <div className="p-4 flex flex-col items-start">
            <div className="w-full relative">
                <div className="bg-[#1a2332] rounded-t-xl px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <span className="text-white text-base font-semibold tracking-wide">
                            Live Projects
                        </span>
                        <select
                            value={selectedProject}
                            onChange={(e) => setSelectedProject(e.target.value)}
                            className="bg-white text-[#475569] text-base py-2 px-3 rounded  border outline-none focus:ring-2 focus:ring-blue-400">
                            {projects.map((project, index) => (
                                <option key={index} value={project}>
                                    {project}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center gap-4 pr-1">
                        <Plus onClick={() => setNewProjectOpen(true)} size={22} className="text-[#60a5fa] cursor-pointer" />
                        <Pencil size={20} className="text-[#60a5fa] cursor-pointer" />
                        <Trash2 size={20} className="text-[#ef4444] cursor-pointer" />
                    </div>
                    {
                        newProjectOpen && <NewProjectModal setIsModalOpen={setNewProjectOpen} />
                    }
                    {
                        sectionCreate && <CreateSectionModal setIsModalOpen={setSectionCreate} />
                    }

                </div>

                <div className="bg-[#f0f7ff] rounded-b-lg border-t border-slate-700 h-55 relative overflow-y-auto custom-scrollbar">
                    <div className="flex min-h-full">
                        <div className="w-1/2 p-4 border-r border-[#d1e4ff]">
                            <div className="flex items-center gap-1 text-[#334155] font-bold text-base">
                                <span>Section</span>
                                <Plus onClick={() => setSectionCreate(true)} size={18} className="text-[#60a5fa] cursor-pointer" />
                            </div>
                            <div className="h-100"></div>
                        </div>

                        <div className="w-1/2 p-4">
                            <div className="flex items-center gap-1 text-[#334155] font-bold text-base">
                                <span>Target</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <EventTable
                        events={events}
                        onAddClick={() => setIsModalOpen(true)}
                        onDelete={handleDeleteEvent}
                    />

                    <EventModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onSubmit={handleAddEvent}
                    />
                </div>
            </div>
        </div>
    );
};

export default ViewEvent;