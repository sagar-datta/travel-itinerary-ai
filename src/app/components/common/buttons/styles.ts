import { shape } from "@/app/styles/common";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVariant = "default" | "black";

export const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const getButtonClasses = (
  size: ButtonSize,
  variant: ButtonVariant,
  fullWidth: boolean,
  className: string = ""
) => {
  const baseClasses = `
    relative ${shape.borderRadius}
    transition-all duration-200 ease-out
    outline-none focus:outline-none
    disabled:opacity-50 disabled:cursor-not-allowed
    font-semibold
    ${sizeClasses[size]}
    ${fullWidth ? "w-full" : ""}
  `;

  const variantClasses = {
    default: `
      dark:bg-dark-base dark:text-dark-text-primary
      bg-light-base text-light-text-primary
      dark:shadow-neu-dark shadow-neu-light
      enabled:hover:dark:shadow-neu-dark-hover enabled:hover:shadow-neu-light-hover
      enabled:hover:text-light-accent-primary enabled:dark:hover:text-dark-accent-primary
      enabled:[&:active]:dark:shadow-neu-dark-pressed enabled:[&:active]:shadow-neu-light-pressed
      enabled:[&:not(:active):not(:hover)]:dark:shadow-neu-dark enabled:[&:not(:active):not(:hover)]:shadow-neu-light
    `,
    black: `
      !bg-black !text-white 
      dark:shadow-neu-dark shadow-neu-light
      enabled:hover:dark:shadow-neu-dark-hover enabled:hover:shadow-neu-light-hover enabled:hover:!bg-black/80
      enabled:[&:active]:!bg-black/70 enabled:[&:active]:!text-white/80 enabled:[&:active]:!shadow-none
      enabled:[&:not(:active):not(:hover)]:dark:shadow-neu-dark enabled:[&:not(:active):not(:hover)]:shadow-neu-light
    `,
  };

  return `${baseClasses} ${variantClasses[variant]} ${className}`;
};
