import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, X } from 'lucide-react';
import { toast } from 'react-toastify';
import { useEventEditMutation } from '../../../../../features/event/eventApi';

const formatInputDate = (date) => {
  if (!date) return '';

  if (/^\d{2}\/\d{2}\/\d{4}$/.test(date)) return date;

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) return '';

  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(parsedDate);
};

const EditEventModal = ({ isOpen, onClose, eventToEdit, projectId }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [eventEdit, { isLoading }] = useEventEditMutation();

  useEffect(() => {
    if (!isOpen || !eventToEdit) return;

    reset({
      date: formatInputDate(eventToEdit?.eventDate),
      description: eventToEdit?.eventDescription || '',
      weather: eventToEdit?.weather || '',
      surveyor: eventToEdit?.surveyor || '',
    });
  }, [eventToEdit, isOpen, reset]);

  if (!isOpen) return null;

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleFormSubmit = async (data) => {
    const eventInfo = {
      eventDate: data?.date,
      eventDescription: data?.description,
      weather: data?.weather,
      surveyor: data?.surveyor,
    };

    const res = await eventEdit({
      data: eventInfo,
      projectId,
      eventId: eventToEdit?.id,
    });

    if (res?.data?.success) {
      toast.success('Event updated successfully!');
      handleClose();
    } else {
      toast.error(res?.data?.message || 'Event update failed!');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 w-full">
      <div className="bg-[#1e293b] w-full max-w-lg rounded-lg shadow-2xl border border-slate-700 overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-slate-700">
          <h2 className="text-lg font-semibold text-white">Edit Event</h2>
          <button type="button" onClick={handleClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="p-6 space-y-5">
          <div className="space-y-1">
            <label className="text-sm text-slate-300 font-medium">Event Date</label>
            <div className="relative">
              <input
                {...register('date', { required: 'Date is required' })}
                placeholder="dd/mm/yyyy"
                className="w-full bg-[#243146] border border-blue-400/30 rounded-md p-2.5 text-sm text-white focus:outline-none focus:border-blue-400 transition-colors"
              />
              <Calendar className="absolute right-3 top-2.5 text-slate-400 pointer-events-none" size={18} />
            </div>
            {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date.message}</p>}
          </div>

          <div className="space-y-1">
            <label className="text-sm text-slate-300 font-medium">Event Description</label>
            <textarea
              rows={5}
              {...register('description', { required: 'Event description is required' })}
              placeholder="Enter Event Description"
              className="w-full bg-[#243146] border border-blue-400/30 rounded-md p-2.5 text-sm text-white focus:outline-none focus:border-blue-400 resize-none"
            />
            {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description.message}</p>}
          </div>

          <div className="space-y-1">
            <label className="text-sm text-slate-300 font-medium">Weather</label>
            <input
              {...register('weather', { required: 'Weather is required' })}
              placeholder="Enter Weather"
              className="w-full bg-[#243146] border border-blue-400/30 rounded-md p-2.5 text-sm text-white focus:outline-none focus:border-blue-400"
            />
            {errors.weather && <p className="text-red-400 text-xs mt-1">{errors.weather.message}</p>}
          </div>

          <div className="space-y-1">
            <label className="text-sm text-slate-300 font-medium">Surveyor</label>
            <input
              {...register('surveyor', { required: 'Surveyor name is required' })}
              placeholder="Enter Surveyor Name"
              className="w-full bg-[#243146] border border-blue-400/30 rounded-md p-2.5 text-sm text-white focus:outline-none focus:border-blue-400"
            />
            {errors.surveyor && <p className="text-red-400 text-xs mt-1">{errors.surveyor.message}</p>}
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 bg-[#6b7280] hover:bg-opacity-80 text-white font-medium py-2.5 rounded-md transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-200 text-slate-900 py-3 rounded-md font-semibold hover:bg-blue-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 w-full sm:w-auto px-10"
            >
              {isLoading && (
                <span className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></span>
              )}
              {isLoading ? 'Update Event...' : 'Update Event'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEventModal;
