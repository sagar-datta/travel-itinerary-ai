'use client';

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
    <div className="flex flex-col gap-2">
      <label className="text-xl font-bold tracking-tight
        dark:text-dark-text-primary text-light-text-primary">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`
          rounded-xl p-4 w-full outline-none
          dark:bg-dark-base/50 bg-light-base/50
          dark:text-dark-text-primary text-light-text-primary
          dark:shadow-neu-dark-pressed shadow-neu-light-pressed
          ${className}
        `}
      />
    </div>
  );
}