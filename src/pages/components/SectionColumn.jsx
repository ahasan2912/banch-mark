import IconButton from "./IconButton";
import { Pencil, Trash2 } from "lucide-react";

const SectionColumn = ({ canCreateSection, activeSections, upsertSection, deleteSection, showLists }) => {
  return (
    <div className="border-r border-[#b9d7e6] pr-3">
      <div className="flex items-center gap-2 px-1 py-2 text-sm font-semibold text-[#1b3652]">
        <span>Section</span>
        <button
          className={[
            "inline-flex items-center gap-1 rounded-md px-2 py-1",
            canCreateSection ? "text-[#1d4ed8] hover:bg-[#cfe7f3]" : "cursor-not-allowed opacity-40",
          ].join(" ")}
          onClick={() => canCreateSection && upsertSection("")}
        >
          <Plus size={16} />
        </button>
      </div>

      <div className="h-40 overflow-y-auto pr-1">
        {showLists ? (
          <ul className="space-y-2">
            {activeSections.map((s) => (
              <li key={s.id} className="flex items-center">
                <button className="flex-1 rounded-md px-3 py-2 text-left text-sm">
                  {s.name}
                </button>

                <div className="ml-2 flex items-center gap-1 rounded-md bg-[#bfe0ff] px-2 py-1">
                  <button onClick={() => upsertSection(s.name)} title="Edit">
                    <Pencil size={14} />
                  </button>
                  <button onClick={() => deleteSection(s.id)} title="Delete">
                    <Trash2 size={14} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div>No Sections Available</div>
        )}
      </div>
    </div>
  );
};

export default SectionColumn;