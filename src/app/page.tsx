'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check system preference for dark mode and set initial theme
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl">
        {/* Theme Toggle */}
        <div className="mb-8 flex justify-end">
          <button
            onClick={toggleDarkMode}
            className="rounded-xl p-3 transition-shadow dark:bg-dark-base dark:text-dark-text-primary dark:shadow-neu-dark dark:hover:shadow-neu-dark-flat dark:active:shadow-neu-dark-pressed bg-light-base text-light-text-primary shadow-neu-light hover:shadow-neu-light-flat active:shadow-neu-light-pressed"
          >
            {isDarkMode ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>

        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="inline-block rounded-2xl p-8 transition-shadow dark:bg-dark-base dark:shadow-neu-dark bg-light-base shadow-neu-light">
            <h1 className="text-6xl font-extrabold dark:text-dark-text-primary text-light-text-primary">
              AI Travel Planner
            </h1>
            <p className="mt-4 text-lg dark:text-dark-text-secondary text-light-text-secondary">
              Your intelligent companion for creating perfect travel experiences
            </p>
          </div>
        </div>

        {/* AI Assistant Indicator */}
        <div className="mb-8 flex items-center justify-center">
          <div className="flex items-center rounded-xl px-6 py-3 transition-shadow dark:bg-dark-base dark:shadow-neu-dark-flat bg-light-base shadow-neu-light-flat">
            <div className="mr-3 h-3 w-3 animate-pulse rounded-full dark:bg-dark-accent-primary bg-light-accent-primary"></div>
            <span className="dark:text-dark-text-secondary text-light-text-secondary">AI Assistant Ready</span>
          </div>
        </div>
      </div>
    </main>
  );
}