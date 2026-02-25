import { useForm } from "react-hook-form";
import ModalShell from "./ModalShell";
import Input from "./Input";

export function NameModal({
    open,
    onClose,
    onSubmit,
    title,
    label,
    placeholder,
    disabled,
    initialValue,
}) {
    const { register, handleSubmit, formState, reset } = useForm({
        defaultValues: { name: initialValue || "" },
        values: { name: initialValue || "" },
    });

    function close() {
        reset({ name: "" });
        onClose();
    }

    return (
        <ModalShell open={open} onClose={close} title={title} widthClass="w-[560px]">
            <form
                onSubmit={handleSubmit((data) => {
                    if (disabled) return;
                    onSubmit(data.name.trim());
                    reset({ name: "" });
                })}
            >
                <div className="space-y-3">
                    <div className="text-xs font-semibold text-slate-300/80">{label}</div>
                    <Input
                        placeholder={placeholder}
                        disabled={disabled}
                        error={formState.errors.name?.message}
                        {...register("name", { required: `${label} is required` })}
                    />
                </div>

                <div className="mt-6 flex items-center justify-end gap-3">
                    <button
                        type="button"
                        onClick={close}
                        className="h-10 rounded-md bg-white/10 px-6 text-sm font-semibold text-slate-200 hover:bg-white/15"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={disabled}
                        className={[
                            "h-10 rounded-md px-7 text-sm font-semibold text-white",
                            disabled
                                ? "cursor-not-allowed bg-[#2f6fed]/40"
                                : "bg-[#2f6fed] hover:bg-[#2a63d6]",
                        ].join(" ")}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </ModalShell>
    );
}
