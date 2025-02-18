"use client";
import { ThemeToggle } from "../common/ThemeToggle";
import {
  transitions,
  typography,
  getTransitionClasses,
} from "../../styles/common";

interface HeaderProps {
  isStarted: boolean;
  onTitleClick: () => void;
}

export function Header({ isStarted, onTitleClick }: HeaderProps) {
  return (
    <header className="relative z-10 px-6">
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
            ${typography.gradientText} ${typography.h2}
            hover:text-light-accent-primary dark:hover:text-dark-accent-primary
          `}
          >
            AI Travel Planner
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
