"use client";

import { shape } from "@/app/lib/styles";
import { InputLabel } from "../InputLabel";

export type BudgetTier = "$" | "$$" | "$$$";

interface BudgetSelectorProps {
  label: string;
  value: BudgetTier;
  onChange: (value: BudgetTier) => void;
  className?: string;
}

const budgetTiers: { value: BudgetTier; label: string; description: string }[] =
  [
    {
      value: "$",
      label: "Backpacker",
      description: "Budget-conscious, hostels, local spots, student-friendly",
    },
    {
      value: "$$",
      label: "Comfort",
      description: "Family-friendly hotels, balanced experiences, good value",
    },
    {
      value: "$$$",
      label: "Premium",
      description: "Luxury resorts, exclusive experiences, finest options",
    },
  ];

export function BudgetSelector({
  label,
  value,
  onChange,
  className = "",
}: BudgetSelectorProps) {
  const activeIndex = budgetTiers.findIndex((tier) => tier.value === value);

  return (
    <div className="flex flex-col gap-4">
      <InputLabel>{label}</InputLabel>
      <div
        className={`relative p-2.5 ${shape.borderRadius} 
          dark:bg-dark-base/50 bg-light-base/50
          dark:shadow-neu-dark-pressed shadow-neu-light-pressed
          transition-all duration-200
          ${className}`}
      >
        {/* Sliding highlight */}
        <div
          className={`absolute top-2.5 left-2.5 h-[calc(100%-1.25rem)] w-[calc((100%-1.25rem)/3)] 
            ${shape.borderRadius} 
            transition-all duration-200
            dark:bg-dark-base bg-light-base
            dark:shadow-neu-dark shadow-neu-light
          `}
          style={{
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        />

        {/* Tab buttons */}
        <div className="relative grid grid-cols-3 gap-3">
          {budgetTiers.map((tier) => (
            <button
              key={tier.value}
              type="button"
              onClick={() => onChange(tier.value)}
              className={`
                relative z-10 flex items-center justify-center py-3
                transition-all duration-200 text-xl font-bold
                ${
                  value === tier.value
                    ? "dark:text-dark-accent-primary text-light-accent-primary"
                    : "dark:text-dark-text-primary text-light-text-primary"
                }
                hover:dark:text-dark-accent-secondary hover:text-light-accent-secondary
              `}
            >
              {tier.value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
