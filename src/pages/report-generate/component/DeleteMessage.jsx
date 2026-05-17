import { AlertTriangle, X } from 'lucide-react';

const DeleteMessage = ({ setDeleteConfirmOpen, deleteLoading, selectedProject, handleProjectDelete, itemType = "project" }) => {
    const itemName = selectedProject?.name || `Selected ${itemType}`;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="w-full max-w-md bg-[#1e2d4a] border border-red-400/30 rounded-lg shadow-2xl animate-fadeIn overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-500/15 border border-red-400/30 flex items-center justify-center">
                            <AlertTriangle size={22} className="text-red-400" />
                        </div>
                        <h2 className="text-white text-lg font-semibold">Confirm Delete</h2>
                    </div>
                    <button
                        type="button"
                        onClick={() => setDeleteConfirmOpen(false)}
                        disabled={deleteLoading}
                        className="text-slate-400 hover:text-white transition cursor-pointer disabled:opacity-60"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="px-5 py-5">
                    <p className="text-slate-200 text-base">
                        Are you sure you want to delete this {itemType}?
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                        {itemName} will be removed permanently.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-end gap-3 px-5 pb-5">
                    <button
                        type="button"
                        onClick={() => setDeleteConfirmOpen(false)}
                        disabled={deleteLoading}
                        className="px-8 py-2.5 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition cursor-pointer disabled:opacity-60"
                    >
                        No
                    </button>
                    <button
                        type="button"
                        onClick={handleProjectDelete}
                        disabled={deleteLoading}
                        className="px-8 py-2.5 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {deleteLoading && (
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        )}
                        {deleteLoading ? "Deleting..." : "Delete"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteMessage;
