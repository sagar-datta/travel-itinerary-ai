"use client";
import { shape } from "../../styles/common";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  size = "lg",
  fullWidth = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative ${shape.borderRadius}
        transition-all duration-200 ease-out
        dark:bg-dark-base dark:text-dark-text-primary
        bg-light-base text-light-text-primary
        dark:shadow-neu-dark shadow-neu-light
        enabled:hover:dark:shadow-neu-dark-hover enabled:hover:shadow-neu-light-hover
        enabled:hover:text-light-accent-primary enabled:dark:hover:text-dark-accent-primary
        enabled:[&:active]:dark:shadow-neu-dark-pressed enabled:[&:active]:shadow-neu-light-pressed
        enabled:[&:not(:active):not(:hover)]:dark:shadow-neu-dark enabled:[&:not(:active):not(:hover)]:shadow-neu-light
        outline-none focus:outline-none
        disabled:opacity-50 disabled:cursor-not-allowed
        font-semibold
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
