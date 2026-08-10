export interface IApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: Record<string, string[]>;
  statusCode?: number;
   $values?: T[];
}

export interface IPaginationResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface IApiError {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}