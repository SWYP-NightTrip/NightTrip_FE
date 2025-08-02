export interface GenericAPIResponse<T> {
  message: string;
  data: T;
  timestamp: string;
}
