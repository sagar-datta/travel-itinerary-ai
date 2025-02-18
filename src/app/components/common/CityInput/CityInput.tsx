"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import type { ActionMeta } from "react-select";
import { THEME_KEY } from "./constants";
import { loadCityOptions } from "./api";
import {
  inputClassName,
  dropdownClassName,
  dropdownOptionClassName,
  getCustomStyles,
} from "./styles";
import type {
  CityOption,
  CityInputProps,
  NoOptionsMessageProps,
} from "./types";

// Dynamically import AsyncSelect with no SSR
const AsyncSelect = dynamic(
  () => import("react-select/async").then((mod) => mod.default),
  { ssr: false }
) as any;

export function CityInput({
  label,
  value,
  onChange,
  className = "",
}: CityInputProps) {
  const [selectedOption, setSelectedOption] = useState<CityOption | null>(
    value ? { value, label: value } : null
  );
  const [isDarkMode, setIsDarkMode] = useState(false);
  const selectRef = useRef<any>(null);

  useEffect(() => {
    // Initial theme setup
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme !== null) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      setIsDarkMode(false);
    }

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark");
          setIsDarkMode(isDark);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  const handleContainerClick = () => {
    // Only clear if there's a selected value
    if (selectedOption) {
      setSelectedOption(null);
      onChange("");
    }
    selectRef.current?.focus();
  };

  const handleChange = (
    newValue: CityOption | null,
    actionMeta: ActionMeta<CityOption>
  ) => {
    setSelectedOption(newValue);
    onChange(newValue?.value || "");
  };

  const customStyles = getCustomStyles(isDarkMode);

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
        <div
          className={`${inputClassName} cursor-text`}
          onClick={handleContainerClick}
        >
          <AsyncSelect
            key={isDarkMode ? "dark" : "light"}
            ref={selectRef}
            cacheOptions
            defaultOptions
            value={selectedOption}
            onChange={handleChange}
            loadOptions={loadCityOptions}
            className={`w-full h-full ${className}`}
            styles={customStyles}
            placeholder="Start typing a city name..."
            noOptionsMessage={({ inputValue }: NoOptionsMessageProps) =>
              inputValue.length < 2
                ? "Type at least 2 characters to search..."
                : "No cities found"
            }
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            menuPortalTarget={
              typeof document !== "undefined" ? document.body : null
            }
            classNames={{
              menu: () => dropdownClassName,
              option: () => dropdownOptionClassName,
            }}
          />
        </div>
      </div>
    </div>
  );
}
