"use client";

import { ButtonBase } from "./ButtonBase";
import type { ComponentProps } from "react";

export type ButtonProps = ComponentProps<typeof ButtonBase>;

export function Button(props: ButtonProps) {
  return <ButtonBase {...props} />;
}
