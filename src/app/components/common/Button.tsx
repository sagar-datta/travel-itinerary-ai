'use client';
import { shape } from '../../styles/common';

type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

export function Button({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  size = 'lg',
  fullWidth = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative ${shape.borderRadius}
        transition-all duration-300 ease-in-out
        dark:bg-dark-base dark:text-dark-text-primary
        bg-light-base text-light-text-primary
        after:pointer-events-none
        dark:shadow-neu-dark shadow-neu-light
        hover:dark:shadow-neu-dark-hover hover:shadow-neu-light-hover
        hover:text-light-accent-primary dark:hover:text-dark-accent-primary
        disabled:opacity-50 disabled:cursor-not-allowed
        font-semibold
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      <span className={`absolute inset-0 ${shape.borderRadius} bg-black opacity-0 transition-opacity duration-300 ease-in-out [&:active]:opacity-10`}></span>
      <span className="relative z-10">{children}</span>
    </button>
  );
}