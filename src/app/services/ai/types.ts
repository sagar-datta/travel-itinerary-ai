import type { BaseError } from "@/app/types";

export interface ItineraryGenerationParams {
  destination: string;
  days: string;
  people: string;
  interests?: string;
  budget?: "$" | "$$" | "$$$";
}

export interface AIServiceError extends BaseError {
  code: string;
  message: string;
  details?: unknown;
}

export class ItineraryGenerationError extends Error implements AIServiceError {
  code: string;
  details?: unknown;

  constructor(message: string, code: string, details?: unknown) {
    super(message);
    this.name = "ItineraryGenerationError";
    this.code = code;
    this.details = details;
  }
}
