import { DEFAULT_ERROR_MESSAGES } from '@shared/error-message/consts/default-error-messages';
import { isFetchBaseQueryError } from './errorTypePredicates';
import { Error, ErrorMessage, ErrorMessages } from '../model/types';

export const getErrorMessage =
  (specificErrorMessages?: ErrorMessages) =>
  (error: unknown): ErrorMessage => {
    const generalErrorMessages = {
      ...DEFAULT_ERROR_MESSAGES,
      ...(specificErrorMessages || {}),
    };

    if (isFetchBaseQueryError(error)) {
      const { data } = error;

      if (
        data &&
        typeof data === 'object' &&
        'errorType' in data &&
        typeof data.errorType === 'string'
      ) {
        const errorType = data.errorType as Error;

        const message =
          generalErrorMessages[errorType] ||
          generalErrorMessages[Error.UnexpectedError];

        return {
          ...message,
          errorType,
        };
      }
    }

    return {
      ...generalErrorMessages[Error.UnexpectedError],
      errorType: Error.UnexpectedError,
    };
  };
