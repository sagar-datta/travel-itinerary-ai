'use client';

interface WelcomeProps {
  isStarted: boolean;
  onBegin: () => void;
}

export function Welcome({ isStarted, onBegin }: WelcomeProps) {
  return (
    <div className={`text-center transition-all duration-500 ease-out ${
      isStarted ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100 transform-none'
    }`}>
      <h1 className="bg-gradient-to-r dark:from-dark-accent-primary dark:via-dark-text-primary dark:to-dark-accent-secondary from-light-accent-primary via-light-text-primary to-light-accent-secondary bg-clip-text text-7xl font-black tracking-tight text-transparent mb-6">
        AI Travel Planner
      </h1>
      <p className={`text-xl font-medium dark:text-dark-text-secondary text-light-text-secondary mb-12 transition-all duration-300 ease-out ${
        isStarted ? 'opacity-0 scale-95' : 'opacity-100 transform-none'
      }`}>
        Your intelligent companion for creating perfect travel experiences
      </p>
      
      <button
        onClick={onBegin}
        className="group relative rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 ease-in-out
          dark:bg-dark-base dark:text-dark-text-primary bg-light-base text-light-text-primary
          shadow-[8px_8px_16px_#D0D0D0,-8px_-8px_16px_#FFFFFF] 
          dark:shadow-[8px_8px_16px_#222222,-8px_-8px_16px_#444444]
          hover:shadow-[4px_4px_8px_#D0D0D0,-4px_-4px_8px_#FFFFFF] 
          dark:hover:shadow-[4px_4px_8px_#222222,-4px_-4px_8px_#444444]
          hover:text-light-accent-primary dark:hover:text-dark-accent-primary"
      >
        <span className="absolute inset-0 rounded-xl bg-black opacity-0 transition-opacity duration-300 ease-in-out [&:active]:opacity-10"></span>
        <span className="relative z-10">Begin Your Journey</span>
      </button>
    </div>
  );
}