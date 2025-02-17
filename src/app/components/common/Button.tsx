'use client';

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
        relative rounded-xl p-4
        transition-all duration-300 ease-in-out
        dark:bg-dark-base dark:text-dark-text-primary 
        bg-light-base text-light-text-primary
        shadow-[8px_8px_16px_#D0D0D0,-8px_-8px_16px_#FFFFFF] 
        dark:shadow-[8px_8px_16px_#222222,-8px_-8px_16px_#444444]
        hover:shadow-[4px_4px_8px_#D0D0D0,-4px_-4px_8px_#FFFFFF] 
        dark:hover:shadow-[4px_4px_8px_#222222,-4px_-4px_8px_#444444]
        hover:text-light-accent-primary dark:hover:text-dark-accent-primary
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      <span className="absolute inset-0 rounded-xl bg-black opacity-0 transition-opacity duration-300 ease-in-out [&:active]:opacity-10"></span>
      {children}
    </button>
  );
}