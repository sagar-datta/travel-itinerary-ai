"use client";
import { shape } from "../../styles/common";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
      relative p-6 ${shape.borderRadius}
      dark:bg-dark-base bg-light-base
      dark:shadow-neu-dark shadow-neu-light
      transition-property-neu duration-neu ease-neu
      ${className}
    `}
    >
      {children}
    </div>
  );
}
