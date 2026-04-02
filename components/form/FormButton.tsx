import type { FormButtonProps } from "@/app/types/Forms";

export function FormButton({
  label,
  loading = false,
  disabled = false,
  loadingLabel = "Envoi...",
  type = "submit",
}: FormButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`relative px-4 py-2 rounded text-white flex items-center justify-center gap-2 transition-colors ${isDisabled
        ? "bg-sky-300 cursor-not-allowed"
        : "bg-sky-500 hover:bg-sky-600"
        }`}
    >
      <span className={loading ? "opacity-0" : "opacity-100"}>{label}</span>
      {loading && (
        <span className="absolute flex items-center gap-2">
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          {loadingLabel}
        </span>
      )}
    </button>
  );
}