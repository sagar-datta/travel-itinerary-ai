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
      before:absolute before:inset-0 ${shape.borderRadius} before:p-[1px]
      before:bg-gradient-to-br
      dark:before:from-neutral-400 dark:before:to-transparent
      before:from-white before:to-transparent
      before:-z-10
      dark:shadow-neu-dark shadow-neu-light
      hover:dark:shadow-neu-dark-hover hover:shadow-neu-light-hover
      transition-shadow duration-300
      ${className}
    `}>
      {children}
    </div>
  );
}