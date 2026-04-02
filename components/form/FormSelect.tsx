import type { FormSelectProps } from "@/app/types/Forms";

export function FormSelect({
  label,
  placeholder,
  options,
  error,
  disabled,
  watchValue,
  ...props
}: FormSelectProps) {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}
      <select
        disabled={disabled}
        className={`w-full border p-2 rounded bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed ${watchValue === "" ? "text-gray-400" : "text-white"
          }`}
        {...props}
      >
        <option className="text-gray-400" value="" disabled>
          {placeholder || "Sélectionnez une option"}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-500 text-xs mt-1 ml-1 transition-all duration-200 ease-in-out">
          {error.message}
        </p>
      )}
    </div>
  );
}