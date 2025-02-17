'use client';

import { transitions, getTransitionClasses } from '../../styles/common';

interface TransitionContainerProps {
  children: React.ReactNode;
  show: boolean;
  type?: 'fade' | 'slide';
  duration?: keyof typeof transitions;
  className?: string;
  delay?: string;
}

export function TransitionContainer({
  children,
  show,
  type = 'fade',
  duration = 'fast',
  className = '',
  delay = '',
}: TransitionContainerProps) {
  return (
    <div className={`
      ${transitions[duration]} transform
      ${getTransitionClasses(show, type)}
      ${show ? '' : 'pointer-events-none'}
      ${delay}
      ${className}
    `}>
      {children}
    </div>
  );
}