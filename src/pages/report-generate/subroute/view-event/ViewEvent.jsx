import { Plus, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import SurveyTable from '../../component/SurveyTable';
import EventTable from './components/EventTable';
import EventModal from './components/EventModal';
import ReportGenerationHome from '../../component/ReportGenerationHome';

const ViewEvent = () => {
    const [events, setEvents] = useState([
        { id: 1, date: '07/02/2026', description: 'Movement monitoring survey', weather: 'Rainy 16° C', surveyor: 'Tomal ux' }
    ]);

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
                        onDelete={handleDeleteEvent}
                    />
                </div>
            </div>
        </div>
    );
};

export default ViewEvent;