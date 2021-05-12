export type RestResponse<T> = {
  code: number;
  data: T;
  message: string;
};
