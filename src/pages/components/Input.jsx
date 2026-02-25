import React from "react";

const Input = React.forwardRef(function Input(
  { error, className = "", disabled, ...props },
  ref
) {
  return (
    <div>
      <input
        ref={ref}
        disabled={disabled}
        className={[
          "h-10 w-full rounded-md bg-[#12223f] px-3 text-sm text-slate-100",
          "outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-blue-400/60",
          "placeholder:text-slate-400/70",
          disabled ? "cursor-not-allowed opacity-50" : "",
          className,
        ].join(" ")}
        {...props}
      />
      {error ? <div className="mt-1 text-xs text-red-300">{error}</div> : null}
    </div>
  );
});

export default Input;