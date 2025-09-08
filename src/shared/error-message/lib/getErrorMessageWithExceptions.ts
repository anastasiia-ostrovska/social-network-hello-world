import {
  DEFAULT_ERROR_MESSAGES,
  DEFAULT_EXCEPTIONS,
} from '@shared/error-message/consts/default-parameters';
import { ErrorMessage, ErrorNotificationParams } from '../model/types';
import { isErrorTypeInError } from './errorTypePredicates';
import { getErrorMessage } from './getErrorMessage';

export const getErrorMessageWithExceptions = ({
  error,
  errorMessages = DEFAULT_ERROR_MESSAGES,
  exceptions = DEFAULT_EXCEPTIONS,
}: ErrorNotificationParams): ErrorMessage | null => {
  if (!error) return null;

  const isExceptedErrorType = exceptions.some((errorType) =>
    isErrorTypeInError({ error, errorType })
  );
  if (isExceptedErrorType) return null;

  const resolveErrorMessage = getErrorMessage(errorMessages);
  return resolveErrorMessage(error);
};
