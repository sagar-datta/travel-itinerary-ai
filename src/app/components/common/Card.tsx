'use client';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`
      p-6 rounded-3xl
      dark:bg-dark-base bg-light-base
      dark:shadow-[8px_8px_16px_#1A1A1A,-8px_-8px_16px_#333333] 
      shadow-[8px_8px_16px_#D0D0D0,-8px_-8px_16px_#FFFFFF]
      hover:dark:shadow-[12px_12px_24px_#1A1A1A,-12px_-12px_24px_#333333] 
      hover:shadow-[12px_12px_24px_#D0D0D0,-12px_-12px_24px_#FFFFFF]
      transition-shadow duration-300
      ${className}
    `}>
      {children}
    </div>
  );
}