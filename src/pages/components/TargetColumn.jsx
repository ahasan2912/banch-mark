import IconButton from "./IconButton";
import { Pencil, Trash2 } from "lucide-react";

const TargetColumn = ({ canCreateTarget, activeSections, upsertTarget, deleteTarget, showLists }) => {
  return (
    <div className="pl-3">
      <div className="flex items-center gap-2 px-1 py-2 text-sm font-semibold text-[#1b3652]">
        <span>Target</span>
        <button
          className={[
            "inline-flex items-center gap-1 rounded-md px-2 py-1",
            canCreateTarget ? "text-[#1d4ed8] hover:bg-[#cfe7f3]" : "cursor-not-allowed opacity-40",
          ].join(" ")}
          onClick={() => canCreateTarget && upsertTarget(activeSections[0]?.id, "")}
        >
          <Plus size={16} />
        </button>
      </div>

      <div className="h-40 overflow-y-auto pr-1">
        {showLists ? (
          <ul className="space-y-2">
            {activeSections.map((section) => {
              const targets = section.targets || [];
              return (
                <li key={section.id} className="space-y-2">
                  {targets.length ? (
                    targets.map((t) => (
                      <div key={t.id} className="flex items-center">
                        <button className="flex-1 rounded-md px-3 py-2 text-left text-sm">{t.name}</button>

                        <div className="ml-2 flex items-center gap-1 rounded-md bg-[#bfe0ff] px-2 py-1">
                          <button onClick={() => upsertTarget(section.id, t.name)} title="Edit">
                            <Pencil size={14} />
                          </button>
                          <button onClick={() => deleteTarget(section.id, t.id)} title="Delete">
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div>No Targets Available</div>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <div>No Targets Available</div>
        )}
      </div>
    </div>
  );
};

export default TargetColumn;