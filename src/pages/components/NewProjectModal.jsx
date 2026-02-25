import { useForm } from "react-hook-form";
import ModalShell from "./ModalShell";
import Input from "./Input";

export default function NewProjectModal({ open, onClose, onSubmit, initialValues, title }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues || {
      projectName: "",
      reference: "",
      frequency: "",
      instrumentation: "",

      warningEasting: "",
      warningNorthing: "",
      warningLevel: "",

      alertEasting: "",
      alertNorthing: "",
      alertLevel: "",
    },
    values: initialValues
      ? {
          projectName: initialValues.projectName || "",
          reference: initialValues.reference || "",
          frequency: initialValues.frequency || "",
          instrumentation: initialValues.instrumentation || "",
          warningEasting: initialValues.warningEasting || "",
          warningNorthing: initialValues.warningNorthing || "",
          warningLevel: initialValues.warningLevel || "",
          alertEasting: initialValues.alertEasting || "",
          alertNorthing: initialValues.alertNorthing || "",
          alertLevel: initialValues.alertLevel || "",
        }
      : undefined,
  });

  return (
    <ModalShell open={open} onClose={onClose} title={title} widthClass="w-[920px]">
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <div className="grid grid-cols-2 gap-6">
          {/* Left: Project Details */}
          <div>
            <div className="mb-3 text-xs font-semibold text-slate-300/80">Project Details</div>
            <div className="space-y-3">
              <Input
                placeholder="Project Name"
                error={errors.projectName?.message}
                {...register("projectName", { required: "Project Name is required" })}
              />
              <Input placeholder="Reference" {...register("reference")} />
              <Input placeholder="Frequency" {...register("frequency")} />
              <Input placeholder="Instrumentation" {...register("instrumentation")} />
            </div>
          </div>

          {/* Right: Warning & Alert */}
          <div className="space-y-5">
            <div>
              <div className="mb-2 text-xs font-semibold text-yellow-300">Warning</div>
              <div className="space-y-3">
                <Input placeholder="Easting (warning)" {...register("warningEasting")} />
                <Input placeholder="Northing (warning)" {...register("warningNorthing")} />
                <Input placeholder="Level (warning)" {...register("warningLevel")} />
              </div>
            </div>

            <div>
              <div className="mb-2 text-xs font-semibold text-red-400">Alert</div>
              <div className="space-y-3">
                <Input placeholder="Easting (Alert)" {...register("alertEasting")} />
                <Input placeholder="Northing (Alert)" {...register("alertNorthing")} />
                <Input placeholder="Level (Alert)" {...register("alertLevel")} />
              </div>
            </div>
          </div>
        </div>

        {/* Footer buttons (like screenshot: Cancel + Submit) */}
        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="h-10 rounded-md bg-white/10 px-6 text-sm font-semibold text-slate-200 hover:bg-white/15"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="h-10 rounded-md bg-[#2f6fed] px-7 text-sm font-semibold text-white hover:bg-[#2a63d6]"
          >
            Submit
          </button>
        </div>

        {/* Step rule note (optional) */}
        <div className="mt-3 text-xs text-slate-400">
          * Project must be submitted first. Then you can create Section, then Target.
        </div>
      </form>
    </ModalShell>
  );
}
