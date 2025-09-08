export enum Error {
  InvalidCredentials = 'INVALID_CREDENTIALS',
  InvalidRequest = 'INVALID_REQUEST',
  Unauthorized = 'UNAUTHORIZED',
  Forbidden = 'FORBIDDEN',
  NotFound = 'NOT_FOUND',
  Conflict = 'CONFLICT',
  ServerError = 'SERVER_ERROR',
  UnexpectedError = 'UNEXPECTED_ERROR',
  SerializedError = 'SERIALIZED_ERROR',
}

export type ErrorMessages = Record<
  string,
  {
    message: string;
    title?: string;
  }
>;

export interface ErrorMessage {
  message: string;
  errorType: Error;
  title?: string;
}

export interface ErrorNotificationParams {
  error: unknown;
  errorMessages?: ErrorMessages;
  exceptions?: Error[];
}
