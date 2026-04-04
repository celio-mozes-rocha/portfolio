
import type { FormInputProps } from "@/app/types/Forms";

export function FormInput({
  label,
  placeholder,
  error,
  disabled,
  ...props
}: FormInputProps) {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}
      <input
        placeholder={placeholder}
        disabled={disabled}
        className="w-full border p-2 rounded placeholder:gray-400 bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1 ml-1 transition-all duration-200 ease-in-out">
          {error.message}
        </p>
      )}
    </div>
  );
}