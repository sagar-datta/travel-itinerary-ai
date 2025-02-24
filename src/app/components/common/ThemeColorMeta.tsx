"use client";
import { useTheme } from "@/app/context/theme/ThemeContext";

export function ThemeColorMeta() {
  const { theme } = useTheme();
  const themeColor = theme === "dark" ? "#363636" : "#F0F0F0";

  return (
    <meta
      name="theme-color"
      content={themeColor}
    />
  );
}