export type BudgetTier = "$" | "$$" | "$$$";

export interface InputLabelProps {
  children: React.ReactNode;
  className?: string;
}

export interface BaseInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "type" | "value"
  > {
  label: string;
  type?: "text" | "date" | "number";
  value: string;
  onChange: (value: string) => void;
  className?: string;
  inputMode?: "numeric" | "text" | "none";
  numberType?: "nights" | "people";
}

export interface CityOption {
  value: string;
  label: string;
}

export interface CityInputProps {
  label: string;
  value: string;
  initialLabel?: string;
  onChange: (value: string, label?: string) => void;
  className?: string;
}

export interface BudgetSelectorProps {
  label: string;
  value: BudgetTier;
  onChange: (value: BudgetTier) => void;
  className?: string;
}
