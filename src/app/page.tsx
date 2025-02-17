'use client';
import { useState, useEffect } from 'react';

const THEME_KEY = 'ai-travel-theme-preference';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme !== null) {
      const isDark = savedTheme === 'dark';
      setIsDarkMode(isDark);
      document.documentElement.classList.toggle('dark', isDark);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem(THEME_KEY, newDarkMode ? 'dark' : 'light');
  };

  return (
    <main className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Theme Toggle */}
        <div className="mb-16 flex justify-end">
          <button
            onClick={toggleDarkMode}
            className="relative rounded-xl p-4 transition-all duration-300 ease-in-out
              dark:bg-dark-base dark:text-dark-text-primary bg-light-base text-light-text-primary
              shadow-[8px_8px_16px_#c0cbbc,-8px_-8px_16px_#ffffff] 
              dark:shadow-[8px_8px_16px_#272C35,-8px_-8px_16px_#353B46]
              hover:shadow-[4px_4px_8px_#c0cbbc,-4px_-4px_8px_#ffffff] 
              dark:hover:shadow-[4px_4px_8px_#272C35,-4px_-4px_8px_#353B46]
              [&:active]:after:opacity-100"
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {/* Overlay for active state */}
            <span className="absolute inset-0 rounded-xl bg-black opacity-0 transition-opacity duration-300 ease-in-out [&:active]:opacity-10"></span>
            
            {isDarkMode ? (
              <svg className="relative z-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="relative z-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>

        {/* Header Section */}
        <div className="mb-16 text-center">
          <h1 className="bg-gradient-to-r dark:from-dark-accent-primary dark:via-dark-text-primary dark:to-dark-accent-secondary from-light-accent-primary via-light-text-primary to-light-accent-secondary bg-clip-text text-7xl font-black tracking-tight text-transparent">
            AI Travel Planner
          </h1>
          <p className="mt-6 text-xl font-medium dark:text-dark-text-secondary text-light-text-secondary">
            Your intelligent companion for creating perfect travel experiences
          </p>
        </div>

        {/* AI Assistant Indicator */}
        <div className="mb-8 flex items-center justify-center">
          <div className="group flex items-center gap-3 rounded-xl px-8 py-4 transition-shadow duration-300 dark:bg-dark-base dark:shadow-neu-dark-flat bg-light-base shadow-neu-light-flat hover:dark:shadow-neu-dark hover:shadow-neu-light">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-full dark:bg-dark-accent-primary/20 bg-light-accent-primary/20 blur"></div>
              <div className="relative h-3 w-3 animate-pulse rounded-full dark:bg-dark-accent-primary bg-light-accent-primary"></div>
            </div>
            <span className="text-lg font-medium dark:text-dark-text-secondary text-light-text-secondary">
              AI Assistant Ready
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}