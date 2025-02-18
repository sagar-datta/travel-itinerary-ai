"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isHighContrast: boolean;
  toggleHighContrast: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("ai-travel-theme-preference");
    const savedContrast = localStorage.getItem("high-contrast") === "true";

    setIsHighContrast(savedContrast);
    document.documentElement.setAttribute(
      "data-high-contrast",
      String(savedContrast)
    );
    document.documentElement.setAttribute("data-theme", theme);

    if (savedTheme !== null) {
      setTheme(savedTheme as Theme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("ai-travel-theme-preference", newTheme);
  };

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    document.documentElement.setAttribute(
      "data-high-contrast",
      String(newValue)
    );
    localStorage.setItem("high-contrast", String(newValue));
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, isHighContrast, toggleHighContrast }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
