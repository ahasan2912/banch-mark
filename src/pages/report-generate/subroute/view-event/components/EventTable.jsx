import { useState } from 'react';
import { Plus, MoreVertical, Trash2, Copy, X, Pencil } from 'lucide-react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import EventModal from './EventModal';
import EditEventModal from './EditEventModal';
import { useAllEventsListQuery, useDeleteEventMutation } from '../../../../../features/event/eventApi';
import EventTableSekeleton from '../../../../../components/laoding-skeleton/EventTableSekeleton';
import DeleteMessage from '../../../component/DeleteMessage';

const EventTable = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  const { event } = useSelector((state => state?.event));
  const { data: events, isLoading } = useAllEventsListQuery(event?.projectId, {
    skip: !event?.projectId,
  });
  const eventRows = Array.isArray(events?.data) ? events.data : events?.data?.events || [];
  const [deleteEvent, { isLoading: isDeleting }] = useDeleteEventMutation();

  if (isLoading) {
    return <EventTableSekeleton />
  }

  const formatDate = (date) => {
    if (!date) return '';

    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(new Date(date));
  };

  const handleClickEvent = () => {
    if (!event?.projectId) {
      toast.error('Please select a project');
      return;
    }
    setIsModalOpen(true);
  }


  const handleEditEvent = (eventItem) => {
    setSelectedEvent(eventItem);
    setIsEditModalOpen(true);
    setActiveMenu(null);
  }

  const handleDeleteConfirmOpen = (eventItem) => {
    setEventToDelete(eventItem);
    setActiveMenu(null);
    setDeleteConfirmOpen(true);
  };

  const handleDeleteEvent = async () => {
    if (!event?.projectId || !eventToDelete?.id || isDeleting) return;

    const res = await deleteEvent({
      projectId: event?.projectId,
      eventId: eventToDelete.id
    });

    if (res?.data?.success) {
      toast.success("Event deleted successfully!");
      setDeleteConfirmOpen(false);
      setEventToDelete(null);
    } else {
      toast.error(res?.data?.message || "Event delete failed!");
    };
  }

  return (
    <div className="overflow-x-auto shadow-xl border-2 border-[#B7D8FF] rounded-md custom-scrollbar w-full">
      <table className="w-full text-left border-collapse">
        {/* Table Header */}
        <thead className="bg-[#1e293b] text-slate-200 font-semibold">
          <tr>
            <th className="p-4 font-semibold">Event Date</th>
            <th className="p-4 font-semibold col-span-2" colSpan="2">Event Description</th>
            <th className="p-4 font-semibold">Weather</th>
            <th className="p-4 font-semibold">Surveyor</th>
            <th className="p-4 text-right">
              <button
                disabled={event?.projectId === null}
                onClick={handleClickEvent}
                className="hover:scale-110 transition-transform inline-block">
                <Plus size={24} />
              </button>
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-[#f0f9ff]">
          {eventRows.map((event) => (
            <tr
              key={event.id}
              className="border-b border-blue-100 last:border-0 text-slate-700 align-top"
            >
              <td className="p-4 text-base whitespace-nowrap">{formatDate(event.eventDate)}</td>
              <td className="p-4 text-base" colSpan="2">{event.eventDescription}</td>
              <td className="p-4 text-base">{event.weather}</td>
              <td className="p-4 text-base">{event.surveyor}</td>

              <td className="p-4 text-right relative">
                <button
                  onClick={() => setActiveMenu(activeMenu === event.id ? null : event.id)}
                  className="inline-block"
                >
                  <MoreVertical size={18} className="text-gray-700 hover:text-slate-800 cursor-pointer" />
                </button>

                {/* Dropdown Menu */}
                {activeMenu === event.id && (
                  <div className="absolute right-4 -top-14 z-20 w-48 bg-[#f0f9ff] border border-blue-200 shadow-xl rounded-md text-left">
                    <div className="flex justify-between items-center px-3 py-1.5 border-b border-blue-50 bg-blue-50/50">
                      <span className="text-[10px] tracking-widest text-slate-400 uppercase font-bold"></span>
                      <X
                        size={18}
                        className="cursor-pointer text-black hover:opacity-70"
                        onClick={() => setActiveMenu(null)}
                      />
                    </div>
                    <button
                      onClick={() => handleDeleteConfirmOpen(event)}
                      disabled={isDeleting}
                      className="w-full flex items-center gap-3 px-4 pb-2 text-sm text-black hover:bg-blue-100 transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
                      <Trash2 size={16} /> Delete Event
                    </button>
                    <button
                      onClick={() => handleEditEvent(event)}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-blue-100 border-t border-blue-50 transition-colors cursor-pointer">
                      <Pencil size={16} /> Edit Event
                    </button>
                  </div>
                )}
              </td>

            </tr>
          ))}
        </tbody>
      </table>
      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <EditEventModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedEvent(null);
        }}
        eventToEdit={selectedEvent}
        projectId={event?.projectId}
      />
      {deleteConfirmOpen && (
        <DeleteMessage
          setDeleteConfirmOpen={(isOpen) => {
            setDeleteConfirmOpen(isOpen);
            if (!isOpen) {
              setEventToDelete(null);
            }
          }}
          deleteLoading={isDeleting}
          selectedProject={{
            name: eventToDelete
              ? `Event ${formatDate(eventToDelete?.eventDate)}`
              : 'Selected event',
          }}
          handleProjectDelete={handleDeleteEvent}
          itemType="event"
        />
      )}
    </div>
  );
};

export default EventTable;
