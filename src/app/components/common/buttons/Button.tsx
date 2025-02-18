"use client";

import { ButtonBase } from "./ButtonBase";
import type { ButtonBaseProps } from "./types";

export type ButtonProps = ButtonBaseProps;

export function Button(props: ButtonProps) {
  return <ButtonBase {...props} />;
}
