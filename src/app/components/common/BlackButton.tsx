import { Button } from "./Button";
import type { ComponentProps } from "react";

type BlackButtonProps = Omit<ComponentProps<typeof Button>, "className"> & {
  className?: string;
};

export function BlackButton({ className = "", ...props }: BlackButtonProps) {
  return (
    <Button
      {...props}
      className={`!bg-black !text-white 
        dark:shadow-neu-dark shadow-neu-light
        enabled:hover:dark:shadow-neu-dark-hover enabled:hover:shadow-neu-light-hover enabled:hover:!bg-black/80
        enabled:[&:active]:!bg-black/70 enabled:[&:active]:!text-white/80 enabled:[&:active]:!shadow-none
        enabled:[&:not(:active):not(:hover)]:dark:shadow-neu-dark enabled:[&:not(:active):not(:hover)]:shadow-neu-light
        ${className}`}
    />
  );
}
