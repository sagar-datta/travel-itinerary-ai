import type { StylesConfig } from "react-select";
import type { CityOption } from "./types";

export const inputClassName = `p-4 w-full outline-none font-semibold min-h-[3.5rem] cursor-text rounded-2xl
  bg-light-base/50
  text-light-text-primary
  shadow-[inset_8px_8px_16px_#d1d9e6,_inset_-8px_-8px_16px_#ffffff]
  [-webkit-tap-highlight-color:transparent]`;

export const dropdownClassName = `
  text-light-text-primary
  shadow-neu-light
  rounded-2xl
`;

export const dropdownOptionClassName = `
  text-light-text-primary
  rounded-xl transition-all
  [-webkit-tap-highlight-color:transparent]
`;

export const getCustomStyles = (): StylesConfig<CityOption, false> => ({
  control: (base) => ({
    ...base,
    border: "none",
    boxShadow: "none",
    background: "none",
    height: "100%",
    minHeight: "unset",
    cursor: "text",
    WebkitTapHighlightColor: "transparent",
    "&:hover": {
      border: "none",
      boxShadow: "none",
    },
    "&:focus-within": {
      border: "none",
      boxShadow: "none",
    },
  }),
  container: (base) => ({
    ...base,
    border: "none",
    boxShadow: "none",
  }),
  valueContainer: (base) => ({
    ...base,
    height: "100%",
    padding: 0,
    border: "none",
    boxShadow: "none",
  }),
  input: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
    color: "inherit",
    border: "none",
    boxShadow: "none",
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
    boxShadow: "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff",
    backgroundColor: "#F0F0F0",
  }),
  menuList: (base) => ({
    ...base,
    padding: "0.5rem",
    backgroundColor: "#F0F0F0",
    boxShadow: "none",
    "::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#555555",
      borderRadius: "999px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#777777",
    },
    scrollbarWidth: "thin",
    scrollbarColor: "#555555 transparent",
  }),
  option: (base) => ({
    ...base,
    padding: "0.75rem 1rem",
    cursor: "pointer",
    transition: "all 0.2s ease",
    backgroundColor: "transparent",
    color: "#333333",
    borderRadius: "0.75rem",
    WebkitTapHighlightColor: "transparent",
    ":hover": {
      boxShadow: "inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff",
    },
    ":active": {
      boxShadow: "inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff",
    },
    "@media (hover: none)": {
      ":active": {
        boxShadow: "inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff",
      },
    },
  }),
  noOptionsMessage: (base) => ({
    ...base,
    color: "#333333",
    padding: "0.75rem 1rem",
  }),
  menuPortal: (base) => ({
    ...base,
    zIndex: 9999,
  }),
});
