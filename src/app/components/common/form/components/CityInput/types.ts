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
  children?: React.ReactNode;
  innerProps?: React.HTMLProps<HTMLDivElement>;
  selectProps?: Record<string, unknown>;
  inputValue: string;
}
