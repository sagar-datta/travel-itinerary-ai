import type { ActionMeta } from "react-select";

export interface CityOption {
  value: string;
  label: string;
}

export interface CityInputProps {
  label: string;
  value: string;
  initialLabel?: string;
  onChange: (value: string, label?: string) => void;
  className?: string;
}

export interface NoOptionsMessageProps {
  inputValue: string;
}

export interface GeonamesResult {
  toponymName: string;
  name: string;
  adminName1: string;
  countryName: string;
  population: number;
}
