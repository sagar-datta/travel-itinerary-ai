"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { shape } from "../../styles/common";
import axios from "axios";
import type { ActionMeta, StylesConfig } from "react-select";

// Dynamically import AsyncSelect with no SSR
const AsyncSelect = dynamic(
  () => import("react-select/async").then((mod) => mod.default),
  { ssr: false }
) as any;

interface CityOption {
  value: string;
  label: string;
}

interface CityInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

interface NoOptionsMessageProps {
  inputValue: string;
}

interface GeonamesResult {
  toponymName: string;
  name: string;
  adminName1: string;
  countryName: string;
  population: number;
}

const USERNAME = "sagardatta";
const THEME_KEY = "ai-travel-theme-preference";

const inputClassName = `${shape.borderRadius} p-4 w-full outline-none font-semibold min-h-[3.5rem] cursor-text
  dark:bg-dark-base/50 bg-light-base/50
  dark:text-dark-text-primary text-light-text-primary
  dark:shadow-neu-dark-pressed shadow-neu-light-pressed`;

const dropdownClassName = `
  dark:text-dark-text-primary text-light-text-primary
  dark:shadow-neu-dark shadow-neu-light
  rounded-2xl
`;

const dropdownOptionClassName = `
  dark:hover:shadow-neu-dark-pressed hover:shadow-neu-light-pressed
  dark:text-dark-text-primary text-light-text-primary
  rounded-xl
`;

const style = {
  "--background-light": "rgb(240, 240, 240, 0.5)",
  "--background-dark": "rgb(51, 51, 51, 0.5)",
} as React.CSSProperties;

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

  // Add ref for the AsyncSelect component
  const selectRef = useRef<any>(null);

  // Add click handler for the container
  const handleContainerClick = () => {
    selectRef.current?.focus();
  };

  const loadOptions = async (inputValue: string) => {
    if (inputValue.length < 2) return [];

    try {
      const [exactMatches, similarMatches] = await Promise.all([
        axios.get("http://api.geonames.org/searchJSON", {
          params: {
            name_equals: inputValue,
            maxRows: 3,
            username: USERNAME,
            featureClass: "P",
            orderby: "population",
          },
        }),
        axios.get("http://api.geonames.org/searchJSON", {
          params: {
            name_startsWith: inputValue,
            maxRows: 10,
            username: USERNAME,
            featureClass: "P",
            orderby: "population",
          },
        }),
      ]);

      const allResults = [
        ...(exactMatches.data?.geonames || []),
        ...(similarMatches.data?.geonames || []),
      ];

      const uniqueResults = Array.from(
        new Map(
          allResults.map((item) => [
            item.name + item.adminName1 + item.countryName,
            item,
          ])
        ).values()
      ).sort((a, b) => (b.population || 0) - (a.population || 0));

      return uniqueResults
        .slice(0, 5)
        .filter(
          (place: GeonamesResult) =>
            place.name && place.adminName1 && place.countryName
        )
        .map((place: GeonamesResult) => {
          const locationString = `${place.name}, ${place.adminName1}, ${place.countryName}`;
          return {
            value: locationString,
            label: locationString,
          };
        });
    } catch (error) {
      console.error("Error fetching cities:", error);
      return [];
    }
  };

  const handleChange = (
    newValue: CityOption | null,
    actionMeta: ActionMeta<CityOption>
  ) => {
    setSelectedOption(newValue);
    onChange(newValue?.value || "");
  };

  const customStyles: StylesConfig<CityOption, false> = {
    control: (base) => ({
      ...base,
      border: "none",
      boxShadow: "none",
      background: "none",
      height: "100%",
      minHeight: "unset",
      cursor: "text",
    }),
    valueContainer: (base) => ({
      ...base,
      height: "100%",
      padding: 0,
    }),
    input: (base) => ({
      ...base,
      margin: 0,
      padding: 0,
      color: "inherit",
    }),
    placeholder: (base) => ({
      ...base,
      margin: 0,
      color: "rgb(var(--placeholder-color))",
      opacity: 0.6,
    }),
    singleValue: (base) => ({
      ...base,
      margin: 0,
      color: "inherit",
    }),
    menu: (base) => ({
      ...base,
      border: "none",
      borderRadius: "1rem",
      padding: "0.5rem",
      margin: "0.5rem 0",
      overflow: "hidden",
      backgroundColor: isDarkMode ? "#333333" : "#F0F0F0",
      boxShadow: isDarkMode
        ? "6px 6px 12px rgba(34,34,34,0.8), -6px -6px 12px rgba(68,68,68,0.8)" // neu-dark
        : "6px 6px 12px rgba(208,208,208,0.8), -6px -6px 12px rgba(255,255,255,0.8)", // neu-light
    }),
    menuList: (base) => ({
      ...base,
      padding: "0.5rem",
      backgroundColor: isDarkMode ? "#333333" : "#F0F0F0",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused
        ? "var(--background-color-pressed)"
        : "transparent",
      color: "rgb(var(--text-color-primary))",
      padding: "0.75rem 1rem",
      borderRadius: "0.75rem",
      cursor: "pointer",
      transition: "all 0.2s ease",
      ":hover": {
        backgroundColor: "var(--background-color-pressed)",
      },
    }),
    noOptionsMessage: (base) => ({
      ...base,
      color: "rgb(var(--text-color-primary))",
      padding: "0.75rem 1rem",
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 9999,
    }),
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
            loadOptions={loadOptions}
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
