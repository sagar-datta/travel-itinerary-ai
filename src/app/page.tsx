'use client';
import { useState, useEffect } from 'react';

const THEME_KEY = 'ai-travel-theme-preference';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

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
    <div className="min-h-screen grid grid-rows-[80px_1fr] dark:bg-dark-base bg-light-base">
      {/* Fixed Header */}
      <header className="relative z-10 px-6">
        <div className="mx-auto max-w-7xl h-full flex justify-between items-center">
          {/* Title in header - starts hidden and slides in when isStarted */}
          <button
            onClick={() => setIsStarted(false)}
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
            <button
              onClick={toggleDarkMode}
              className="relative rounded-lg p-2.5 transition-all duration-300 ease-in-out
                dark:bg-dark-base dark:text-dark-text-primary bg-light-base text-light-text-primary
                shadow-[6px_6px_12px_#c0cbbc,-6px_-6px_12px_#ffffff] 
                dark:shadow-[6px_6px_12px_#272C35,-6px_-6px_12px_#353B46]
                hover:shadow-[3px_3px_6px_#c0cbbc,-3px_-3px_6px_#ffffff] 
                dark:hover:shadow-[3px_3px_6px_#272C35,-3px_-3px_6px_#353B46]"
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              <span className="absolute inset-0 rounded-lg bg-black opacity-0 transition-opacity duration-300 ease-in-out [&:active]:opacity-10"></span>
              {isDarkMode ? (
                <svg className="relative z-10 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="relative z-10 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative flex items-center justify-center px-4">
        {/* Welcome Screen - fades out when isStarted */}
        <div className={`text-center transition-all duration-700 ease-out ${
          isStarted ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100 transform-none'
        }`}>
          <h1 className="bg-gradient-to-r dark:from-dark-accent-primary dark:via-dark-text-primary dark:to-dark-accent-secondary from-light-accent-primary via-light-text-primary to-light-accent-secondary bg-clip-text text-7xl font-black tracking-tight text-transparent mb-6">
            AI Travel Planner
          </h1>
          <p className={`text-xl font-medium dark:text-dark-text-secondary text-light-text-secondary mb-12 transition-all duration-500 ease-out ${
            isStarted ? 'opacity-0 scale-95' : 'opacity-100 transform-none'
          }`}>
            Your intelligent companion for creating perfect travel experiences
          </p>
          
          {/* Begin Button */}
          <button
            onClick={() => setIsStarted(true)}
            className="group relative rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 ease-in-out
              dark:bg-dark-base dark:text-dark-text-primary bg-light-base text-light-text-primary
              shadow-[8px_8px_16px_#c0cbbc,-8px_-8px_16px_#ffffff] 
              dark:shadow-[8px_8px_16px_#272C35,-8px_-8px_16px_#353B46]
              hover:shadow-[4px_4px_8px_#c0cbbc,-4px_-4px_8px_#ffffff] 
              dark:hover:shadow-[4px_4px_8px_#272C35,-4px_-4px_8px_#353B46]"
          >
            <span className="absolute inset-0 rounded-xl bg-black opacity-0 transition-opacity duration-300 ease-in-out [&:active]:opacity-10"></span>
            <span className="relative z-10">Begin Your Journey</span>
          </button>
        </div>
      </main>
    </div>
  );
}