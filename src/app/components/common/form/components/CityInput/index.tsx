"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import type { ActionMeta } from "react-select";
import { useTheme } from "@/app/context/theme/ThemeContext";
import { loadCityOptions } from "./api";
import {
  inputClassName,
  dropdownClassName,
  dropdownOptionClassName,
  getCustomStyles,
} from "./styles";
import type { CityOption, CityInputProps } from "./types";
import { InputLabel } from "../InputLabel";

// Dynamically import AsyncSelect with no SSR
const AsyncSelect: typeof import("react-select/async").default = dynamic(
  () => import("react-select/async").then((mod) => mod.default),
  { ssr: false }
) as typeof AsyncSelect;

export function CityInput({
  label,
  value,
  initialLabel,
  onChange,
  className = "",
}: CityInputProps) {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [selectedOption, setSelectedOption] = useState<CityOption | null>(
    value ? { value, label: initialLabel || value } : null
  );
  const selectRef = useRef<typeof AsyncSelect<CityOption>>(null);

  // Sync internal state with incoming props
  useEffect(() => {
    if (value && initialLabel) {
      setSelectedOption({ value, label: initialLabel });
    }
  }, [value, initialLabel]);

  const handleContainerClick = () => {
    if (selectedOption) {
      setSelectedOption(null);
      onChange("", "");
    }
    (selectRef.current as any)?.select?.focus();
  };

  const handleChange = (newValue: CityOption | null) => {
    setSelectedOption(newValue);
    onChange(newValue?.value || "", newValue?.label);
  };

  return (
    <div className="flex flex-col gap-4">
      <InputLabel>{label}</InputLabel>
      <div className="flex gap-2 items-stretch">
        <div
          className={`${inputClassName} cursor-text`}
          onClick={handleContainerClick}
        >
          <AsyncSelect
            key={isDarkMode ? "dark" : "light"}
            ref={(el) => {
              selectRef.current = el as any;
            }}
            cacheOptions
            defaultOptions
            value={selectedOption}
            onChange={handleChange}
            loadOptions={loadCityOptions}
            className={`w-full h-full ${className}`}
            styles={getCustomStyles(isDarkMode)}
            placeholder="Start typing a city name..."
            noOptionsMessage={({ inputValue }: { inputValue: string }) =>
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
