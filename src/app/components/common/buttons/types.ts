export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVariant = "default" | "black";

export interface ButtonBaseProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  fullWidth?: boolean;
  variant?: ButtonVariant;
}

export interface ButtonStyleConfig {
  size: ButtonSize;
  variant: ButtonVariant;
  fullWidth: boolean;
  className?: string;
}
