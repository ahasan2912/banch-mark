import { useMemo, useState } from "react";
import { ProjectSelect } from "./components/ProjectSelect";
import IconButton from "./components/IconButton";
import { Pencil, Plus, Trash2 } from "lucide-react";
import NewProjectModal from "./components/NewProjectModal";
import { NameModal } from "./components/NameModal";


export default function Testing() {
  const [projects, setProjects] = useState([]);
  const [activeProjectId, setActiveProjectId] = useState("");
  const [sectionsByProject, setSectionsByProject] = useState({});
  const [targetsBySection, setTargetsBySection] = useState({}); 

  // UI state
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isSectionModalOpen, setIsSectionModalOpen] = useState(false);
  const [isTargetModalOpen, setIsTargetModalOpen] = useState(false);

  // editing
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [editingSection, setEditingSection] = useState(null);
  const [editingTarget, setEditingTarget] = useState(null);

  const activeSections = useMemo(() => {
    if (!activeProjectId) return [];
    return sectionsByProject[activeProjectId] || [];
  }, [activeProjectId, sectionsByProject]);

  const canCreateSection = !!activeProjectId;
  const canCreateTarget = !!activeProjectId && activeSections.length > 0;

  const showLists = !!activeProjectId && activeSections.length > 0;

  function uid() {
    return Math.random().toString(36).slice(2, 10);
  }

  function upsertProject(data) {
    if (editingProjectId) {
      setProjects((prev) =>
        prev.map((p) => (p.id === editingProjectId ? { ...p, ...data } : p))
      );
      setEditingProjectId(null);
      return;
    }
    const id = uid();
    const newProject = { id, ...data };
    setProjects((prev) => [newProject, ...prev]);
    setActiveProjectId(id);
  }

  function deleteProject(projectId) {
    setProjects((prev) => prev.filter((p) => p.id !== projectId));
    setSectionsByProject((prev) => {
      const copy = { ...prev };
      const secs = copy[projectId] || [];
      delete copy[projectId];

      setTargetsBySection((tprev) => {
        const tcopy = { ...tprev };
        secs.forEach((s) => delete tcopy[s.id]);
        return tcopy;
      });

      return copy;
    });

    if (activeProjectId === projectId) setActiveProjectId("");
  }

  function upsertSection(sectionName) {
    if (!activeProjectId) return;

    if (editingSection?.sectionId) {
      setSectionsByProject((prev) => {
        const list = prev[activeProjectId] || [];
        return {
          ...prev,
          [activeProjectId]: list.map((s) =>
            s.id === editingSection.sectionId ? { ...s, name: sectionName } : s
          ),
        };
      });
      setEditingSection(null);
      return;
    }

    const id = uid();
    setSectionsByProject((prev) => {
      const list = prev[activeProjectId] || [];
      return { ...prev, [activeProjectId]: [...list, { id, name: sectionName }] };
    });
  }

  function deleteSection(sectionId) {
    if (!activeProjectId) return;
    setSectionsByProject((prev) => {
      const list = prev[activeProjectId] || [];
      const next = list.filter((s) => s.id !== sectionId);
      return { ...prev, [activeProjectId]: next };
    });

    setTargetsBySection((prev) => {
      const copy = { ...prev };
      delete copy[sectionId];
      return copy;
    });
  }

  function upsertTarget(sectionId, targetName) {
    if (!sectionId) return;

    if (editingTarget?.targetId) {
      setTargetsBySection((prev) => {
        const list = prev[sectionId] || [];
        return {
          ...prev,
          [sectionId]: list.map((t) =>
            t.id === editingTarget.targetId ? { ...t, name: targetName } : t
          ),
        };
      });
      setEditingTarget(null);
      return;
    }

    const id = uid();
    setTargetsBySection((prev) => {
      const list = prev[sectionId] || [];
      return { ...prev, [sectionId]: [...list, { id, name: targetName }] };
    });
  }

  function deleteTarget(sectionId, targetId) {
    setTargetsBySection((prev) => {
      const list = prev[sectionId] || [];
      return { ...prev, [sectionId]: list.filter((t) => t.id !== targetId) };
    });
  }

  return (
    <div className="min-h-screen w-full bg-[#0b1220] p-6 text-slate-100 pt-40">
      <div className="mx-auto w-full max-w-275 rounded-xl bg-[#0f1b2f] p-4 shadow-[0_20px_60px_rgba(0,0,0,.45)]">
        <div className="flex items-center gap-3">
          <div className="rounded-md bg-[#14264a] px-3 py-2 text-sm font-semibold text-slate-200">
            Live Projects
          </div>

          <ProjectSelect
            value={activeProjectId}
            setValue={setActiveProjectId}
            projects={projects}
            disabled={projects.length === 0}
          />

          <div className="ml-auto flex items-center gap-2">
            <IconButton
              title="New Project"
              onClick={() => {
                setEditingProjectId(null);
                setIsProjectModalOpen(true);
              }}
              icon={<Plus size={18} />}
            />
            <IconButton
              title="Edit Project"
              disabled={!activeProjectId}
              onClick={() => {
                setEditingProjectId(activeProjectId);
                setIsProjectModalOpen(true);
              }}
              icon={<Pencil size={18} />}
            />
            <IconButton
              title="Delete Project"
              disabled={!activeProjectId}
              danger
              onClick={() => deleteProject(activeProjectId)}
              icon={<Trash2 size={18} />}
            />
          </div>
        </div>

        {/* Body */}
        <div className="mt-4 rounded-lg bg-[#d9edf6] p-3">
          <div className="grid grid-cols-2 gap-0 rounded-md bg-[#d9edf6]">
            {/* Section column */}
            <div className="border-r border-[#b9d7e6] pr-3">
              <div className="flex items-center gap-2 px-1 py-2 text-sm font-semibold text-[#1b3652]">
                <span>Section</span>
                <button
                  className={[
                    "inline-flex items-center gap-1 rounded-md px-2 py-1",
                    canCreateSection
                      ? "text-[#1d4ed8] hover:bg-[#cfe7f3]"
                      : "cursor-not-allowed opacity-40",
                  ].join(" ")}
                  onClick={() => {
                    if (!canCreateSection) return;
                    setEditingSection(null);
                    setIsSectionModalOpen(true);
                  }}
                >
                  <Plus size={16} />
                </button>
              </div>

              <div className="h-40 overflow-y-auto pr-1">
                {showLists ? (
                  <ul className="space-y-2">
                    {activeSections.map((s, idx) => (
                      <li key={s.id} className="flex items-center">
                        <button
                          className={[
                            "flex-1 rounded-md px-3 py-2 text-left text-sm",
                            idx === 0
                              ? "bg-[#bfe0ff] text-[#183a63]"
                              : "bg-transparent text-[#183a63] hover:bg-[#cfe7f3]",
                          ].join(" ")}
                          onClick={() => {
                            // In screenshot, it just highlights; keep simple.
                          }}
                        >
                          {s.name}
                        </button>

                        {/* actions (same row like screenshot) */}
                        <div className="ml-2 flex items-center gap-1 rounded-md bg-[#bfe0ff] px-2 py-1">
                          <button
                            className="rounded p-1 text-[#1d4ed8] hover:bg-white/30"
                            onClick={() => {
                              setEditingSection({ projectId: activeProjectId, sectionId: s.id });
                              setIsSectionModalOpen(true);
                            }}
                            title="Edit"
                          >
                            <Pencil size={14} />
                          </button>
                          <button
                            className="rounded p-1 text-[#ef4444] hover:bg-white/30"
                            onClick={() => deleteSection(s.id)}
                            title="Delete"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <EmptyLikeScreenshot />
                )}
              </div>
            </div>

            {/* Target column */}
            <div className="pl-3">
              <div className="flex items-center gap-2 px-1 py-2 text-sm font-semibold text-[#1b3652]">
                <span>Target</span>
                <button
                  className={[
                    "inline-flex items-center gap-1 rounded-md px-2 py-1",
                    canCreateTarget
                      ? "text-[#1d4ed8] hover:bg-[#cfe7f3]"
                      : "cursor-not-allowed opacity-40",
                  ].join(" ")}
                  onClick={() => {
                    if (!canCreateTarget) return;
                    setEditingTarget(null);
                    setIsTargetModalOpen(true);
                  }}
                >
                  <Plus size={16} />
                </button>
              </div>

              <div className="h-40 overflow-y-auto pr-1">
                {showLists ? (
                  <ul className="space-y-2">
                    {activeSections.map((section, idx) => {
                      const targets = targetsBySection[section.id] || [];
                      return (
                        <li key={section.id} className="space-y-2">
                          {idx === 0 ? (
                            targets.length ? (
                              targets.map((t, tIdx) => (
                                <div key={t.id} className="flex items-center">
                                  <button
                                    className={[
                                      "flex-1 rounded-md px-3 py-2 text-left text-sm",
                                      tIdx === 0
                                        ? "bg-[#bfe0ff] text-[#183a63]"
                                        : "bg-transparent text-[#183a63] hover:bg-[#cfe7f3]",
                                    ].join(" ")}
                                  >
                                    {t.name}
                                  </button>

                                  <div className="ml-2 flex items-center gap-1 rounded-md bg-[#bfe0ff] px-2 py-1">
                                    <button
                                      className="rounded p-1 text-[#1d4ed8] hover:bg-white/30"
                                      onClick={() => {
                                        setEditingTarget({ sectionId: section.id, targetId: t.id });
                                        setIsTargetModalOpen(true);
                                      }}
                                      title="Edit"
                                    >
                                      <Pencil size={14} />
                                    </button>
                                    <button
                                      className="rounded p-1 text-[#ef4444] hover:bg-white/30"
                                      onClick={() => deleteTarget(section.id, t.id)}
                                      title="Delete"
                                    >
                                      <Trash2 size={14} />
                                    </button>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <EmptyLikeScreenshot />
                            )
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <EmptyLikeScreenshot />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewProjectModal
        open={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        onSubmit={(data) => {
          upsertProject(data);
          setIsProjectModalOpen(false);
        }}
        initialValues={editingProjectId ? projects.find((p) => p.id === editingProjectId) : null}
        title="New Project"
      />

      <NameModal
        open={isSectionModalOpen}
        onClose={() => setIsSectionModalOpen(false)}
        title="Section"
        label="Section Name"
        placeholder="Enter Section Name"
        disabled={!canCreateSection}
        initialValue={
          editingSection?.sectionId
            ? (sectionsByProject[activeProjectId] || []).find((s) => s.id === editingSection.sectionId)?.name || ""
            : ""
        }
        onSubmit={(name) => {
          upsertSection(name);
          setIsSectionModalOpen(false);
        }}
      />

      <NameModal
        open={isTargetModalOpen}
        onClose={() => setIsTargetModalOpen(false)}
        title="New Target"
        label="Target Name"
        placeholder="Enter Target Name"
        disabled={!canCreateTarget}
        initialValue={
          editingTarget?.targetId
            ? (targetsBySection[editingTarget.sectionId] || []).find((t) => t.id === editingTarget.targetId)?.name || ""
            : ""
        }
        onSubmit={(name) => {
          // To match screenshot behavior: put targets under FIRST section (Front)
          const firstSectionId = activeSections?.[0]?.id;
          const sectionIdForTarget = editingTarget?.sectionId || firstSectionId;

          upsertTarget(sectionIdForTarget, name);
          setIsTargetModalOpen(false);
        }}
      />
    </div>
  );
}

function EmptyLikeScreenshot() {
  return (
    <div className="h-full w-full rounded-md border border-transparent" />
  );
}