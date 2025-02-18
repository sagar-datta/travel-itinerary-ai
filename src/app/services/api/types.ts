import type { BaseError, BaseResponse } from "@/app/types";

export interface APIError extends BaseError {
  status?: number;
}

export type APIResponse<T> = BaseResponse<T> & {
  headers?: Record<string, string>;
};

export interface CitySearchResponse {
  cities: Array<{
    id: string;
    name: string;
    country: string;
    countryCode: string;
  }>;
}

export class APIRequestError extends Error implements APIError {
  code: string;
  status?: number;
  details?: unknown;

  constructor(
    message: string,
    code: string,
    status?: number,
    details?: unknown
  ) {
    super(message);
    this.name = "APIRequestError";
    this.code = code;
    this.status = status;
    this.details = details;
  }
}
