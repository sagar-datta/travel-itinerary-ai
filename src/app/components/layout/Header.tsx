"use client";
import { ThemeToggle } from "@/app/components/common/ThemeToggle";
import {
  transitions,
  typography,
  getTransitionClasses,
} from "@/app/lib/styles";
import { BlackButton } from "@/app/components/common/buttons";

interface HeaderProps {
  isStarted: boolean;
  onTitleClick: () => void;
  showBackButton?: boolean;
  onBack?: () => void;
}

export function Header({
  isStarted,
  onTitleClick,
  showBackButton,
  onBack,
}: HeaderProps) {
  return (
    <header className="fixed md:relative top-0 left-0 right-0 z-50 backdrop-blur-xl md:backdrop-blur-none bg-light-base/10 dark:bg-dark-base/10 md:bg-transparent md:shadow-none after:absolute after:bottom-0 after:left-0 after:right-0 after:hidden sm:after:block">
      <div className="px-4 pt-4 pb-2 md:px-6 md:py-4">
        <div className="mx-auto max-w-7xl h-full">
          {/* Container for smaller screens - centered title with absolute positioned buttons */}
          <div className="lg:hidden relative flex justify-center items-center">
            {showBackButton && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 scale-75 md:scale-90 z-10">
                <BlackButton
                  onClick={onBack}
                  className="!p-4 !rounded-xl flex items-center gap-1.5"
                >
                  <span>←</span>
                  <span>Back</span>
                </BlackButton>
              </div>
            )}
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
                <span className={`${typography.gradientText} !text-3xl`}>
                  Itiner
                </span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent !text-3xl">
                  ai
                </span>
              </h1>
            </button>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 scale-75 md:scale-90 z-10">
              <ThemeToggle />
            </div>
          </div>

          {/* Container for large screens - original layout */}
          <div className="hidden lg:flex justify-between items-center relative">
            <div className="relative z-10">
              {showBackButton && (
                <BlackButton
                  onClick={onBack}
                  className="!p-4 !rounded-xl flex items-center gap-1.5"
                >
                  <span>←</span>
                  <span>Back</span>
                </BlackButton>
              )}
            </div>
            <div className="flex-1 pointer-events-none">
              <div
                className={`w-full transition-transform duration-500 ease-in-out flex ${
                  showBackButton
                    ? "justify-center translate-x-8"
                    : "justify-start"
                }`}
              >
                <button
                  onClick={onTitleClick}
                  className={`${
                    transitions.slow
                  } flex items-center h-full pointer-events-auto
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
              </div>
            </div>
            <div className="relative z-10">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
