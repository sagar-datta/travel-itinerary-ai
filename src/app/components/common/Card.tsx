'use client';
import { shape } from '../../styles/common';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`
      relative p-6 ${shape.borderRadius}
      dark:bg-dark-base bg-light-base
      after:absolute after:inset-0
      after:[border-radius:inherit]
      after:border after:border-white/15
      dark:after:border-black/10
      after:pointer-events-none
      dark:shadow-neu-dark shadow-neu-light
      hover:dark:shadow-neu-dark-hover hover:shadow-neu-light-hover
      transition-shadow duration-300
      ${className}
    `}>
      {children}
    </div>
  );
}