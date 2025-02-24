"use client";
import { Button } from "@/app/components/common/buttons";
import { useTheme } from "@/app/context/theme/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <Button
      onClick={toggleTheme}
      className={`p-4 touch-none
        /* Touch device pressed state */
        [@media(hover:none)]:touch-manipulation
        [@media(hover:none)]:active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)]
        [@media(hover:none)]:active:translate-y-[1px]
        [@media(hover:none)]:active:dark:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4)]`}
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
    >
      {isDarkMode ? (
        <svg
          className="relative z-10 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          className="relative z-10 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </Button>
  );
}
