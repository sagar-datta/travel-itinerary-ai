"use client";

import { shape } from "@/app/lib/styles";
import { NumberInput } from "../NumberInput";
import { InputLabel } from "../InputLabel";

type BaseInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "type" | "value"
>;

export interface InputProps extends BaseInputProps {
  label: string;
  type?: "text" | "date" | "number";
  value: string;
  onChange: (value: string) => void;
  className?: string;
  inputMode?: "numeric" | "text" | "none";
  numberType?: "nights" | "people";
}

export function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  numberType,
  ...inputProps
}: InputProps) {
  if (type === "number") {
    return (
      <NumberInput
        label={label}
        value={value}
        onChange={onChange}
        numberType={numberType}
        className={className}
      />
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <InputLabel>{label}</InputLabel>
      <div className="flex gap-2 items-stretch">
        <input
          {...inputProps}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`
            ${shape.borderRadius} p-4 w-full outline-none font-semibold
            dark:bg-dark-base/50 bg-light-base/50
            dark:text-dark-text-primary text-light-text-primary
            dark:shadow-neu-dark-pressed shadow-neu-light-pressed
            placeholder:text-placeholder/60
            ${className}
          `}
        />
      </div>
    </div>
  );
}
