"use client";

import { ButtonBase } from "./ButtonBase";
import type { ComponentProps } from "react";

type BlackButtonProps = Omit<ComponentProps<typeof ButtonBase>, "variant"> & {
  className?: string;
};

export function BlackButton({ className = "", ...props }: BlackButtonProps) {
  return <ButtonBase {...props} variant="black" className={className} />;
}
