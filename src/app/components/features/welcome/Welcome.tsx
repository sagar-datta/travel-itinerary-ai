'use client';
import { Button } from '../../common/Button';
import { transitions, typography, getTransitionClasses } from '../../../styles/common';

interface WelcomeProps {
  isStarted: boolean;
  onBegin: () => void;
}

export function Welcome({ isStarted, onBegin }: WelcomeProps) {
  return (
    <div className={`
      text-center transform 
      ${transitions.fast}
      ${isStarted ? 'opacity-0 pointer-events-none scale-95 z-0' : 'opacity-100 transform-none z-10'}
    `}>
      <h1 className={`${typography.gradientText} ${typography.h1} mb-6`}>
        AI Travel Planner
      </h1>
      <p className={`
        ${typography.body} mb-12 
        ${transitions.fast}
        ${isStarted ? 'opacity-0 scale-95' : 'opacity-100 transform-none'}
      `}>
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