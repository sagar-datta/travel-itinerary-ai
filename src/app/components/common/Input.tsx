'use client';
import { shape } from '../../styles/common';

interface InputProps {
  label: string;
  type?: 'text' | 'date' | 'number';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
}: InputProps) {
  return (
    <div className="flex flex-col gap-4">
      <label className="text-2xl font-black tracking-tight
        bg-gradient-to-r
        dark:from-dark-accent-primary dark:via-dark-text-primary dark:to-dark-accent-secondary
        from-light-accent-primary via-light-text-primary to-light-accent-secondary
        bg-clip-text text-transparent">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`
          ${shape.borderRadius} p-4 w-full outline-none
          dark:bg-dark-base/50 bg-light-base/50
          dark:text-dark-text-primary text-light-text-primary
          dark:shadow-neu-dark-pressed shadow-neu-light-pressed
          ${className}
        `}
      />
    </div>
  );
}