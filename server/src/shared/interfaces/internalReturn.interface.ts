// NOTE: used to return data to my custom middleware. E.g. getSectionsByUserIdMiddleware()
export interface InternalReturn {
  statusCode: number;
  data: any;
  message: string;
}
