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
    <header className="relative z-10 px-4 pt-4 pb-2 md:px-6 md:py-4">
      <div className="mx-auto max-w-7xl h-full">
        {/* Container for smaller screens - centered title with absolute positioned toggle */}
        <div className="lg:hidden relative flex justify-center items-center">
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
            <h1 className={`text-3xl font-bold tracking-tight`}>
              <span className={`${typography.gradientText} !text-3xl`}>Itiner</span>
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent !text-3xl">
                ai
              </span>
            </h1>
          </button>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 scale-75 md:scale-90">
            <ThemeToggle />
          </div>
        </div>

        {/* Container for large screens - original layout */}
        <div className="hidden lg:flex justify-between items-center">
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
            <h1 className={typography.h2}>
              <span className={typography.gradientText}>Itiner</span>
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                ai
              </span>
            </h1>
          </button>
          <div className="flex items-center gap-2 h-full">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
