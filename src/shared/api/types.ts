export interface ApiSuccessResponse<D = object> {
  data: D;
  message: string;
}
