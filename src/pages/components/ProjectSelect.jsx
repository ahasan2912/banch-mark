import { ChevronDown } from "lucide-react";

export function ProjectSelect({ value, setValue, projects, disabled }) {
  const selected = projects.find((p) => p.id === value);
  return (
    <div className="relative w-90">
      <select
        className={[
          "w-full appearance-none rounded-md bg-[#14264a] px-3 py-2 pr-9 text-sm font-semibold text-slate-100",
          "outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-blue-400/60",
          disabled ? "opacity-50" : "",
        ].join(" ")}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
      >
        <option value="" disabled>
          Select Project
        </option>
        {projects.map((p) => (
          <option key={p.id} value={p.id}>
            {p.projectName || "Untitled Project"}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-200/80">
        <ChevronDown size={18} />
      </div>

      {selected?.reference ? (
        <div className="mt-1 text-xs text-slate-300/70">{selected.reference}</div>
      ) : null}
    </div>
  );
}
