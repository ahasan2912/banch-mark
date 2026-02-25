import { useState } from 'react';
import { Plus, Edit2, Trash2, ChevronDown, } from 'lucide-react';
import ProjectModal from './ProjectModal';
import SimpleModal from './SimpleModal';

const Testing = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="min-h-screen bg-slate-900 p-8 text-slate-200 font-sans pt-40">
      <div className="max-w-5xl mx-auto overflow-hidden rounded-lg shadow-2xl">
        <div className="bg-[#1e293b] p-4 flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-6 flex-1">
            <h2 className="font-semibold text-white whitespace-nowrap">Live Projects</h2>
            <div className="relative w-full max-w-2xl">
              <select className="w-full bg-white text-slate-900 py-2 px-4 rounded-md appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Project</option>
              </select>
              <ChevronDown className="absolute right-3 top-2.5 text-slate-500 pointer-events-none" size={18} />
            </div>
          </div>
          <div className="flex items-center gap-4 ml-4">
            <button onClick={() => setActiveModal('project')} className="text-blue-400 hover:text-blue-300 transition-colors">
              <Plus size={24} />
            </button>
            <button className="text-blue-400 hover:text-blue-300 transition-colors">
              <Edit2 size={20} />
            </button>
            <button className="text-red-500 hover:text-red-400 transition-colors">
              <Trash2 size={20} />
            </button>
          </div>
        </div>
        <div className="bg-[#f0f9ff] p-6 space-y-8 min-h-50">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setActiveModal('section')}>
            <span className="text-[#1e293b] font-medium text-lg">Section</span>
            <Plus className="text-blue-500 group-hover:scale-110 transition-transform" size={20} />
          </div>

          <div className="border-t border-blue-100"></div>

          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setActiveModal('target')}>
            <span className="text-[#1e293b] font-medium text-lg">Target</span>
            <Plus className="text-blue-500 group-hover:scale-110 transition-transform" size={20} />
          </div>
        </div>
      </div>

      {/* Modals */}
      {activeModal === 'project' && <ProjectModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'section' && <SimpleModal title="Section" label="Section Name" onClose={() => setActiveModal(null)} />}
      {activeModal === 'target' && <SimpleModal title="New Target" label="Target Name" onClose={() => setActiveModal(null)} />}
    </div>
  );
};

export default Testing;