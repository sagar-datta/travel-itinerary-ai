"use client";
import { ThemeToggle } from "@/app/components/common/ThemeToggle";
import {
  transitions,
  typography,
  getTransitionClasses,
} from "@/app/lib/styles";

interface HeaderProps {
  isStarted: boolean;
  onTitleClick: () => void;
}

export function Header({ isStarted, onTitleClick }: HeaderProps) {
  return (
    <header className="relative z-10 px-4 py-2 md:px-6 md:py-4">
      <div className="mx-auto max-w-7xl h-full flex justify-between items-center">
        {/* Title in header - starts hidden and slides in when isStarted */}
        <button
          onClick={onTitleClick}
          className={`${transitions.slow} flex items-center h-full 
            ${getTransitionClasses(isStarted, "slide")}
            ${
              isStarted
                ? "cursor-pointer hover:opacity-80"
                : "pointer-events-none"
            }
          `}
        >
          <h1
            className={`
            ${typography.h2}
          `}
          >
            <span className={typography.gradientText}>Itiner</span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              ai
            </span>
          </h1>
        </button>

        {/* Theme and Accessibility Toggles */}
        <div className="flex items-center gap-2 h-full">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
