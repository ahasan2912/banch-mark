import { Plus, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import SurveyTable from '../../component/SurveyTable';
import EventTable from './components/EventTable';
import EventModal from './components/EventModal';
import ReportGenerationHome from '../../component/ReportGenerationHome';

const ViewEvent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                <ReportGenerationHome />
                <div className="p-3 sm:p-6 flex flex-col items-start">
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