'use client';
import { useEffect, useState } from 'react';

const THEME_KEY = 'ai-travel-theme-preference';

export function ThemeToggle() {
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
    <button
      onClick={toggleDarkMode}
      className="relative rounded-xl p-4 transition-all duration-300 ease-in-out
        dark:bg-dark-base dark:text-dark-text-primary bg-light-base text-light-text-primary
        shadow-[8px_8px_16px_#c0cbbc,-8px_-8px_16px_#ffffff] 
        dark:shadow-[8px_8px_16px_#272C35,-8px_-8px_16px_#353B46]
        hover:shadow-[4px_4px_8px_#c0cbbc,-4px_-4px_8px_#ffffff] 
        dark:hover:shadow-[4px_4px_8px_#272C35,-4px_-4px_8px_#353B46]"
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
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
  );
}