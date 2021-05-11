export interface RestResponse<T> {
  code: number;
  data: T;
  message: string;
}
