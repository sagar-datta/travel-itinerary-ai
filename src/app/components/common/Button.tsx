'use client';
import { shape } from '../../styles/common';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative ${shape.borderRadius} p-4
        transition-all duration-300 ease-in-out
        dark:bg-dark-base dark:text-dark-text-primary 
        bg-light-base text-light-text-primary
        before:absolute before:inset-0 ${shape.borderRadius} before:p-[1px]
        before:bg-gradient-to-br
        dark:before:from-neutral-400 dark:before:to-transparent
        before:from-white before:to-transparent
        before:-z-10
        dark:shadow-neu-dark shadow-neu-light
        hover:dark:shadow-neu-dark-hover hover:shadow-neu-light-hover
        hover:text-light-accent-primary dark:hover:text-dark-accent-primary
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      <span className={`absolute inset-0 ${shape.borderRadius} bg-black opacity-0 transition-opacity duration-300 ease-in-out [&:active]:opacity-10`}></span>
      {children}
    </button>
  );
}