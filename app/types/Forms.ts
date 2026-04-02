import { FieldError } from "react-hook-form";

export type FormInputProps = {
  label?: string;
  placeholder?: string;
  error?: FieldError;
  disabled?: boolean;
  [key: string]: any;
};

type Option = {
  value: string;
  label: string;
};

export type FormSelectProps = {
  label?: string;
  placeholder?: string;
  options: Option[];
  error?: FieldError;
  disabled?: boolean;
  watchValue?: string;
  [key: string]: any;
};

export type FormTextareaProps = {
  label?: string;
  placeholder?: string;
  rows?: number;
  error?: FieldError;
  disabled?: boolean;
  [key: string]: any;
};

export type FormButtonProps = {
  label: string;
  loading?: boolean;
  disabled?: boolean;
  loadingLabel?: string;
  type?: "submit" | "button" | "reset";
};
