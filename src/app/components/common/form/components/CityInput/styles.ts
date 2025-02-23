import { StylesConfig } from "react-select";
import type { CityOption } from "./types";

export const inputClassName = `p-4 w-full outline-none font-semibold min-h-[3.5rem] cursor-text rounded-2xl
  dark:bg-dark-base/50 bg-light-base/50
  dark:text-dark-text-primary text-light-text-primary
  dark:shadow-neu-dark-pressed shadow-neu-light-pressed`;

export const dropdownClassName = `
  dark:text-dark-text-primary text-light-text-primary
  dark:shadow-neu-dark shadow-neu-light
  rounded-2xl
`;

export const dropdownOptionClassName = `
  dark:text-dark-text-primary text-light-text-primary
  rounded-xl transition-all
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
    color: "#6B7280",
    opacity: 0.6,
  }),
  singleValue: (base) => ({
    ...base,
    margin: 0,
    color: "inherit",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "1rem",
    padding: "0.5rem",
    margin: "0.5rem 0",
    overflow: "hidden",
    boxShadow: isDarkMode
      ? "8px 8px 16px #222222, -8px -8px 16px #444444" // dark shadow
      : "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff", // light shadow
    backgroundColor: isDarkMode ? "#333333" : "#F0F0F0",
  }),
  menuList: (base) => ({
    ...base,
    padding: "0.5rem",
    backgroundColor: isDarkMode ? "#333333" : "#F0F0F0",
    boxShadow: "none",
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
  option: (base) => ({
    ...base,
    padding: "0.75rem 1rem",
    cursor: "pointer",
    transition: "all 0.2s ease",
    backgroundColor: "transparent",
    color: isDarkMode ? "#EEEEEE" : "#333333",
    borderRadius: "0.75rem",
    ":hover": {
      boxShadow: isDarkMode
        ? "inset 8px 8px 16px #222222, inset -8px -8px 16px #444444" // dark pressed shadow
        : "inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff", // light pressed shadow
    },
  }),
  noOptionsMessage: (base) => ({
    ...base,
    color: isDarkMode ? "#EEEEEE" : "#333333",
    padding: "0.75rem 1rem",
  }),
  menuPortal: (base) => ({
    ...base,
    zIndex: 9999,
  }),
});
