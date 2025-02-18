"use client";

interface InputLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function InputLabel({ children, className = "" }: InputLabelProps) {
  return (
    <label
      className={`
        text-2xl font-black tracking-tight
        bg-gradient-to-r
        dark:from-dark-accent-primary dark:via-dark-text-primary dark:to-dark-accent-secondary
        from-light-accent-primary via-light-text-primary to-light-accent-secondary
        bg-clip-text text-transparent
        ${className}
      `}
    >
      {children}
    </label>
  );
}
