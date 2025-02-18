"use client";

import {
  ButtonSize,
  ButtonVariant,
  getButtonClasses,
} from "@/app/components/common/buttons/styles";

interface ButtonBaseProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  fullWidth?: boolean;
  variant?: ButtonVariant;
}

export function ButtonBase({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  size = "lg",
  fullWidth = false,
  variant = "default",
}: ButtonBaseProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={getButtonClasses(size, variant, fullWidth, className)}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
