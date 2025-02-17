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
      <label className="text-sm font-medium dark:text-dark-text-secondary text-light-text-secondary">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`
          rounded-xl p-4 w-full outline-none
          dark:bg-dark-base bg-light-base
          dark:text-dark-text-primary text-light-text-primary
          dark:shadow-[inset_8px_8px_16px_#1A1A1A,inset_-8px_-8px_16px_#333333] 
          shadow-[inset_8px_8px_16px_#D0D0D0,inset_-8px_-8px_16px_#FFFFFF]
          ${className}
        `}
      />
    </div>
  );
}