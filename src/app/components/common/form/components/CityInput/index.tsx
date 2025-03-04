"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { loadCityOptions } from "./api";
import { inputClassName, dropdownClassName, getCustomStyles } from "./styles";
import type { CityOption, CityInputProps } from "./types";
import { InputLabel } from "../InputLabel";
import type { AsyncProps } from "react-select/async";
import type { GroupBase } from "react-select";

// Dynamically import AsyncSelect with no SSR
const AsyncSelect = dynamic<
  AsyncProps<CityOption, false, GroupBase<CityOption>>
>(() => import("react-select/async").then((mod) => mod.default), {
  ssr: false,
});

export function CityInput({
  label,
  value,
  initialLabel,
  onChange,
  className = "",
}: CityInputProps) {
  const [selectedOption, setSelectedOption] = useState<CityOption | null>(
    value ? { value, label: initialLabel || value } : null
  );
  const selectRef = useRef<HTMLDivElement>(null);

  // Sync internal state with incoming props
  useEffect(() => {
    if (!value) {
      setSelectedOption(null);
    } else if (value && initialLabel) {
      setSelectedOption({ value, label: initialLabel });
    }
  }, [value, initialLabel]);

  const handleContainerClick = () => {
    if (selectedOption) {
      setSelectedOption(null);
      onChange("", "");
    }
    selectRef.current?.querySelector("input")?.focus();
  };

  const handleChange = (newValue: CityOption | null): void => {
    setSelectedOption(newValue);
    onChange(newValue?.value || "", newValue?.label || "");
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex flex-col gap-4">
        <InputLabel>{label}</InputLabel>
        <div
          ref={selectRef}
          className={inputClassName}
          onClick={handleContainerClick}
        >
          <AsyncSelect
            value={selectedOption}
            onChange={handleChange}
            loadOptions={loadCityOptions}
            placeholder="Enter a city..."
            className={dropdownClassName}
            classNamePrefix="react-select"
            styles={getCustomStyles()}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            noOptionsMessage={({ inputValue }) =>
              inputValue.length > 0
                ? "No cities found"
                : "Start typing to search for cities..."
            }
          />
        </div>
      </div>
    </div>
  );
}
