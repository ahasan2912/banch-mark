import { Save } from 'lucide-react';
import { useForm } from 'react-hook-form';

const Notification = () => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            marketing: true,
            security: false,
            updates: true,
        }
    });

    const onSubmit = (data) => {
        console.log("Form Data Submitted:", data);
    };
    return (
        <div className="flex items-center my-8">
            <div className="w-full max-w-4xl bg-[#1e293b] rounded-lg p-2 sm:p-8 shadow-xl">
                <header className="mb-6">
                    <h2 className="text-xl font-semibold text-[#E9F6FF]">Notification Preferences</h2>
                    <p className="text-gray-400 text-base">Configure how you receive notifications and alerts</p>
                </header>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    <div className="flex items-center justify-between py-4 border-b border-gray-700/50 last:border-0">
                        <div className="flex flex-col">
                            <span className="text-gray-100 font-medium">Email Notification</span>
                            <span className="text-gray-400 text-sm">Receive notification via email</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                {...register('marketing')}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-gray-700/50 last:border-0">
                        <div className="flex flex-col">
                            <span className="text-gray-100 font-medium">Email Notification</span>
                            <span className="text-gray-400 text-sm">Receive notification via email</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                {...register('security')}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-gray-700/50 last:border-0">
                        <div className="flex flex-col">
                            <span className="text-gray-100 font-medium">Email Notification</span>
                            <span className="text-gray-400 text-sm">Receive notification via email</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                {...register('updates')}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                        </label>
                    </div>
                    <div className="pt-6">
                        <button
                            type="submit"
                            className="flex items-center gap-2 bg-[#4473BA] hover:bg-[#a8bad6] text-white px-4 py-2.5 rounded-sm transition-colors duration-200 text-sm font-medium"
                        >
                            <Save size={18} />
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Notification;