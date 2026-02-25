const IconButton = ({ icon, onClick, disabled, danger, title }) => {
  return (
    <button
      title={title}
      onClick={onClick}
      disabled={disabled}
      className={[
        "inline-flex h-8 w-8 items-center justify-center rounded-md",
        "ring-1 ring-white/10 transition hover:bg-white/5 active:scale-[0.98]",
        disabled ? "cursor-not-allowed opacity-40" : "",
        danger ? "text-red-400 hover:bg-red-500/10" : "text-slate-200",
      ].join(" ")}
    >
      {icon}
    </button>
  );
};

export default IconButton;