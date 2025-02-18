"use client";

import { useEffect, useState } from "react";

export function HighContrastToggle() {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const savedContrast = localStorage.getItem("high-contrast") === "true";
    setIsHighContrast(savedContrast);
    root.setAttribute("data-high-contrast", String(savedContrast));
  }, []);

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
    <button
      onClick={toggleHighContrast}
      className="p-2 rounded-lg transition-colors hover:bg-accent-primary/10 focus:outline-none focus:ring-2 focus:ring-accent-primary"
      aria-pressed={isHighContrast}
      title="Toggle high contrast mode"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="5" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="19" />
        <line x1="5" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="19" y2="12" />
        <line x1="7.05" y1="7.05" x2="5.636" y2="5.636" />
        <line x1="18.364" y1="18.364" x2="16.95" y2="16.95" />
        <line x1="16.95" y1="7.05" x2="18.364" y2="5.636" />
        <line x1="5.636" y1="18.364" x2="7.05" y2="16.95" />
      </svg>
    </button>
  );
}
