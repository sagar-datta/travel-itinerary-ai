"use client";
import { useTheme } from "@/app/context/theme/ThemeContext";

export function ThemeColorMeta() {
  const { theme } = useTheme();
  const themeColor = theme === "dark" ? "#363636" : "#E8F0F7";

  return (
    <meta
      name="theme-color"
      content={themeColor}
    />
  );
}