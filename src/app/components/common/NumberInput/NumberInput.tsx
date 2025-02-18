"use client";

import { useState, useRef, useEffect } from "react";
import { MinusIcon, PlusIcon } from "../icons/NumberControls";
import { shape } from "../../../styles/common";

interface NumberInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  numberType?: "nights" | "people";
  className?: string;
}

export function NumberInput({
  value,
  onChange,
  label,
  numberType,
  className = "",
}: NumberInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const optionsContainerRef = useRef<HTMLDivElement>(null);

  const maxValue =
    numberType === "nights" ? 28 : numberType === "people" ? 24 : 99;
  const minValue = 1;
  const currentValue = Number(value);

  const isAtMax = currentValue >= maxValue;
  const isAtMin = currentValue <= minValue;

  const options = Array.from(
    { length: maxValue - minValue + 1 },
    (_, i) => i + minValue
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !containerRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && optionsContainerRef.current) {
      const selectedButton = optionsContainerRef.current.querySelector(
        `button[data-value="${currentValue}"]`
      );

      if (selectedButton) {
        selectedButton.scrollIntoView({ block: "center" });
      }
    }
  }, [isOpen, currentValue]);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (num: number) => {
    onChange(num.toString());
    setIsOpen(false);
  };

  const handleIncrement = () => {
    if (!isAtMax) {
      onChange((currentValue + 1).toString());
    }
  };

  const handleDecrement = () => {
    if (!isAtMin) {
      onChange((currentValue - 1).toString());
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
        {numberType === "nights" ? "Nights" : label}
      </label>
      <div className="flex gap-2 items-stretch w-full">
        <div className="flex items-center gap-2 w-full">
          <button
            type="button"
            onClick={handleDecrement}
            disabled={isAtMin}
            className={`w-20 h-14 flex items-center justify-center
                    text-lg font-medium rounded-full
                    dark:bg-dark-base/50 bg-light-base/50
                    dark:text-dark-text-primary text-light-text-primary
                    dark:shadow-neu-dark-subtle shadow-neu-light-subtle
                    hover:not(:disabled):dark:shadow-neu-dark-subtle-pressed 
                    hover:not(:disabled):shadow-neu-light-subtle-pressed
                    transition-all duration-200 flex-shrink-0
                    disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <MinusIcon />
          </button>
          <div
            ref={containerRef}
            onClick={handleSelectClick}
            className={`relative flex-1 h-14 flex items-center justify-center
                    text-3xl font-bold rounded-full cursor-pointer
                    dark:bg-dark-base/50 bg-light-base/50
                    dark:text-dark-text-primary text-light-text-primary
                    dark:shadow-neu-dark-pressed shadow-neu-light-pressed
                    ${className}`}
          >
            {currentValue}
            {isOpen && (
              <div
                ref={dropdownRef}
                className={`
                  absolute w-full
                  dark:bg-dark-base bg-light-base
                  ${shape.borderRadius}
                  dark:shadow-neu-dark shadow-neu-light
                  max-h-[240px] overflow-y-auto
                  z-50
                `}
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                  maxHeight: "200px",
                  scrollBehavior: "auto",
                }}
              >
                <div
                  ref={optionsContainerRef}
                  className="w-full"
                  style={{
                    paddingTop: "40px",
                    paddingBottom: "40px",
                    scrollBehavior: "auto",
                  }}
                >
                  {options.map((num) => (
                    <button
                      key={num}
                      data-value={num}
                      onClick={() => handleOptionClick(num)}
                      className={`
                        w-full px-4 py-2 text-center text-3xl font-bold
                        dark:text-dark-text-primary text-light-text-primary
                        hover:bg-dark-accent-primary/10 dark:hover:bg-dark-accent-primary/10
                        ${
                          num === currentValue
                            ? "bg-dark-accent-primary/20"
                            : ""
                        }
                      `}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={handleIncrement}
            disabled={isAtMax}
            className={`w-20 h-14 flex items-center justify-center
                    text-lg font-medium rounded-full
                    dark:bg-dark-base/50 bg-light-base/50
                    dark:text-dark-text-primary text-light-text-primary
                    dark:shadow-neu-dark-subtle shadow-neu-light-subtle
                    hover:not(:disabled):dark:shadow-neu-dark-subtle-pressed 
                    hover:not(:disabled):shadow-neu-light-subtle-pressed
                    transition-all duration-200 flex-shrink-0
                    disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <PlusIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
