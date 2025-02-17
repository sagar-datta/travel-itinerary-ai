'use client';
import { Button } from '../../common/Button';

interface WelcomeProps {
  isStarted: boolean;
  onBegin: () => void;
}

export function Welcome({ isStarted, onBegin }: WelcomeProps) {
  return (
    <div className={`text-center transition-all duration-300 ease-out transform 
      ${isStarted ? 'opacity-0 pointer-events-none scale-95 z-0' : 'opacity-100 transform-none z-10'}`}
    >
      <h1 className="bg-gradient-to-r dark:from-dark-accent-primary dark:via-dark-text-primary dark:to-dark-accent-secondary from-light-accent-primary via-light-text-primary to-light-accent-secondary bg-clip-text text-7xl font-black tracking-tight text-transparent mb-6">
        AI Travel Planner
      </h1>
      <p className={`text-xl font-medium dark:text-dark-text-secondary text-light-text-secondary mb-12 transition-all duration-200 ease-out ${
        isStarted ? 'opacity-0 scale-95' : 'opacity-100 transform-none'
      }`}>
        Your intelligent companion for creating perfect travel experiences
      </p>
      
      <Button
        onClick={onBegin}
        className="px-8 py-4 text-lg font-semibold"
      >
        <span className="relative z-10">Begin Your Journey</span>
      </Button>
    </div>
  );
}