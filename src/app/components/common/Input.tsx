"use client";
import { shape } from "../../styles/common";
import { MinusIcon, PlusIcon } from "./icons/NumberControls";
import { useState, useRef, useEffect } from "react";

type BaseInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "type" | "value"
>;

interface InputProps extends BaseInputProps {
  label: string;
  type?: "text" | "date" | "number";
  value: string;
  onChange: (value: string) => void;
  className?: string;
  inputMode?: "numeric" | "text" | "none";
  numberType?: "nights" | "people";
}

export function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  numberType,
  ...inputProps
}: InputProps) {
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
      // Get the button element for the current value
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

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  const handleIncrement = () => {
    if (type === "number" && !isAtMax) {
      onChange((currentValue + 1).toString());
    }
  };

  const handleDecrement = () => {
    if (type === "number" && !isAtMin) {
      onChange((currentValue - 1).toString());
    }
  };

  const handleSelectFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
    const select = e.target;
    // Get the index of the current value
    const currentIndex = options.findIndex((num) => num.toString() === value);

    // Set size to show a reasonable number of options
    select.size = 7;

    // Calculate scroll position to center current value
    // Each option is approximately 32px high
    const optionHeight = 32;
    const scrollPosition = Math.max(
      0,
      currentIndex * optionHeight - 3 * optionHeight
    );

    // Set the scroll position after a brief delay to ensure the select is open
    setTimeout(() => {
      select.scrollTop = scrollPosition;
    }, 0);
  };

  const handleSelectBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    e.target.size = 1;
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
        {type === "number" ? (
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
            <div className="relative flex-1" ref={containerRef}>
              <button
                onClick={handleSelectClick}
                className={`
                  w-full h-14 text-center text-3xl font-bold
                  ${shape.borderRadius} outline-none
                  dark:bg-dark-base/50 bg-light-base/50
                  dark:text-dark-text-primary text-light-text-primary
                  dark:shadow-neu-dark-pressed shadow-neu-light-pressed
                  cursor-pointer relative
                `}
              >
                {value}
                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg
                    className="h-5 w-5 dark:text-dark-text-primary text-light-text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
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
        ) : (
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
              placeholder:text-placeholder/60
              ${className}
            `}
          />
        )}
      </div>
    </div>
  );
}
