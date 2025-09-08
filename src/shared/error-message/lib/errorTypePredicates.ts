import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Error } from '../model/types';

/**
 * Type predicate to narrow an unknown error-message to `FetchBaseQueryError`
 */
export const isFetchBaseQueryError = (
  error: unknown
): error is FetchBaseQueryError => {
  return typeof error === 'object' && error != null && 'status' in error;
};

/**
 * Type predicate to narrow an unknown error-message to an object with a string 'message' property
 */
export const isSerializedError = (
  error: unknown
): error is { message: string } => {
  return (
    typeof error === 'object' &&
    error != null &&
    'message' in error &&
    typeof (error as any).message === 'string'
  );
};

interface IsErrorTypeInErrorParams {
  error: unknown;
  errorType: Error;
}

export const isErrorTypeInError = ({
  error,
  errorType,
}: IsErrorTypeInErrorParams): boolean => {
  return (
    isFetchBaseQueryError(error) &&
    !!error.data &&
    typeof error.data === 'object' &&
    'errorType' in error.data &&
    error.data.errorType === errorType
  );
};
