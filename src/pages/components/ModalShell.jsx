import { X } from "lucide-react";

const ModalShell = ({ open, onClose, title, children, widthClass = "w-[820px]" }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4">
      <div className={["rounded-xl bg-[#0f1b2f] shadow-2xl", widthClass].join(" ")}>
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="text-sm font-semibold text-slate-200">{title}</div>
          <button
            onClick={onClose}
            className="rounded-md p-2 text-slate-300 hover:bg-white/5"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <div className="px-5 py-5">{children}</div>
      </div>
    </div>
  );
};

export default ModalShell;