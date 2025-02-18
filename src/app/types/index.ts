// Global type definitions
export type Theme = "light" | "dark";

// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Common response types
export interface BaseResponse<T> {
  data: T;
  status: number;
  error?: string;
}

// Common error types
export interface BaseError {
  message: string;
  code: string;
  details?: unknown;
}
