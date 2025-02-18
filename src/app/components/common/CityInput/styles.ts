import { StylesConfig } from "react-select";
import { shape } from "../../../styles/common";
import type { CityOption } from "./types";

export const inputClassName = `${shape.borderRadius} p-4 w-full outline-none font-semibold min-h-[3.5rem] cursor-text
  dark:bg-dark-base/50 bg-light-base/50
  dark:text-dark-text-primary text-light-text-primary
  dark:shadow-neu-dark-pressed shadow-neu-light-pressed`;

export const dropdownClassName = `
  dark:text-dark-text-primary text-light-text-primary
  dark:shadow-neu-dark shadow-neu-light
  rounded-2xl
`;

export const dropdownOptionClassName = `
  dark:hover:shadow-neu-dark-pressed hover:shadow-neu-light-pressed
  dark:text-dark-text-primary text-light-text-primary
  rounded-xl
`;

export const getCustomStyles = (
  isDarkMode: boolean
): StylesConfig<CityOption, false> => ({
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
      ? "6px 6px 12px rgba(34,34,34,0.8), -6px -6px 12px rgba(68,68,68,0.8)"
      : "6px 6px 12px rgba(208,208,208,0.8), -6px -6px 12px rgba(255,255,255,0.8)",
  }),
  menuList: (base) => ({
    ...base,
    padding: "0.5rem",
    backgroundColor: isDarkMode ? "#333333" : "#F0F0F0",
    "::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      background: isDarkMode ? "#DDDDDD" : "#555555",
      borderRadius: "999px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: isDarkMode ? "#BBBBBB" : "#777777",
    },
    scrollbarWidth: "thin",
    scrollbarColor: `${isDarkMode ? "#DDDDDD" : "#555555"} transparent`,
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
});
