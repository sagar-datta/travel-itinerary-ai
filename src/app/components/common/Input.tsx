'use client';
import { shape } from '../../styles/common';

type BaseInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type' | 'value'>;

interface InputProps extends BaseInputProps {
  label: string;
  type?: 'text' | 'date' | 'number';
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
  min,
  max,
  ...inputProps
}: InputProps) {
  const handleIncrement = () => {
    if (type === 'number') {
      const newValue = Number(value) + 1;
      if (!max || newValue <= Number(max)) {
        onChange(newValue.toString());
      }
    }
  };

  const handleDecrement = () => {
    if (type === 'number') {
      const newValue = Number(value) - 1;
      if (!min || newValue >= Number(min)) {
        onChange(newValue.toString());
      }
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="text-2xl font-black tracking-tight
        bg-gradient-to-r
        dark:from-dark-accent-primary dark:via-dark-text-primary dark:to-dark-accent-secondary
        from-light-accent-primary via-light-text-primary to-light-accent-secondary
        bg-clip-text text-transparent">
        {label}
      </label>
      <div className="relative">
        <input
          {...inputProps}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`
            ${shape.borderRadius} p-4 pr-14 w-full outline-none
            dark:bg-dark-base/50 bg-light-base/50
            dark:text-dark-text-primary text-light-text-primary
            dark:shadow-neu-dark-pressed shadow-neu-light-pressed
            [appearance:textfield]
            [&::-webkit-outer-spin-button]:m-0
            [&::-webkit-inner-spin-button]:m-0
            [&::-webkit-outer-spin-button]:appearance-none
            [&::-webkit-inner-spin-button]:appearance-none
            [&::-webkit-outer-spin-button]:ring-0
            [&::-webkit-inner-spin-button]:ring-0
            [&::-webkit-outer-spin-button]:shadow-none
            [&::-webkit-inner-spin-button]:shadow-none
            [&::-webkit-outer-spin-button]:outline-none
            [&::-webkit-inner-spin-button]:outline-none
            ${className}
          `}
        />
        {type === 'number' && (
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2">
            <div className="flex flex-col gap-0.5 p-1 rounded-md
                          dark:bg-dark-base/80 bg-light-base/80
                          dark:shadow-neu-dark-pressed shadow-neu-light-pressed">
              <button
                type="button"
                onClick={handleIncrement}
                className="w-7 h-5 flex items-center justify-center
                         text-sm font-medium
                         dark:text-dark-text-primary text-light-text-primary
                         dark:bg-dark-base/50 bg-light-base/50
                         dark:shadow-neu-dark shadow-neu-light
                         hover:dark:shadow-neu-dark-pressed hover:shadow-neu-light-pressed
                         active:dark:shadow-neu-dark-pressed active:shadow-neu-light-pressed
                         rounded transition-all duration-200"
              >
                +
              </button>
              <button
                type="button"
                onClick={handleDecrement}
                className="w-7 h-5 flex items-center justify-center
                         text-sm font-medium
                         dark:text-dark-text-primary text-light-text-primary
                         dark:bg-dark-base/50 bg-light-base/50
                         dark:shadow-neu-dark shadow-neu-light
                         hover:dark:shadow-neu-dark-pressed hover:shadow-neu-light-pressed
                         active:dark:shadow-neu-dark-pressed active:shadow-neu-light-pressed
                         rounded transition-all duration-200"
              >
                -
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}