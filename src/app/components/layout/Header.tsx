'use client';
import { ThemeToggle } from '../common/ThemeToggle';

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
          className={`transition-all duration-700 ease-out flex items-center h-full ${
            isStarted ? 'transform-none opacity-100 cursor-pointer hover:opacity-80' : '-translate-x-full opacity-0 pointer-events-none'
          }`}
        >
          <h1 className="bg-gradient-to-r dark:from-dark-accent-primary dark:via-dark-text-primary dark:to-dark-accent-secondary from-light-accent-primary via-light-text-primary to-light-accent-secondary bg-clip-text text-3xl font-black tracking-tight text-transparent">
            AI Travel Planner
          </h1>
        </button>
        
        {/* Theme Toggle Button */}
        <div className="flex items-center h-full">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}