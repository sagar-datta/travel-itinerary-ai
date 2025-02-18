'use client';
import { shape } from '../../styles/common';
import { MinusIcon, PlusIcon } from './icons/NumberControls';

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
      <label
        className="text-2xl font-black tracking-tight
        bg-gradient-to-r
        dark:from-dark-accent-primary dark:via-dark-text-primary dark:to-dark-accent-secondary
        from-light-accent-primary via-light-text-primary to-light-accent-secondary
        bg-clip-text text-transparent"
      >
        {label}
      </label>
      <div className="flex gap-2 items-stretch">
        <input
          {...inputProps}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`
            ${shape.borderRadius} p-4 w-full outline-none font-semibold
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
        {type === "number" && (
          <div
            className={`flex gap-1 min-h-[3.5rem] ${shape.borderRadius}
                      dark:text-dark-text-primary text-light-text-primary
                      dark:bg-dark-base/50 bg-light-base/50
                      dark:shadow-neu-dark-subtle shadow-neu-light-subtle`}
          >
            <button
              type="button"
              onClick={handleDecrement}
              className={`w-10 h-full px-2 flex items-center justify-center
                      text-sm font-medium
                      hover:dark:shadow-neu-dark-subtle-pressed hover:shadow-neu-light-subtle-pressed
                      ${shape.borderRadius} transition-all duration-200`}
            >
              <MinusIcon />
            </button>
            <button
              type="button"
              onClick={handleIncrement}
              className={`w-10 h-full px-2 flex items-center justify-center
                      text-sm font-medium
                      hover:dark:shadow-neu-dark-subtle-pressed hover:shadow-neu-light-subtle-pressed
                      ${shape.borderRadius} transition-all duration-200`}
            >
              <PlusIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}