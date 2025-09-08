import { useEffect, useMemo, useState } from 'react';
import {
  DEFAULT_ERROR_MESSAGES,
  DEFAULT_EXCEPTIONS,
  ErrorMessage,
  ErrorNotificationParams,
  getErrorMessageWithExceptions,
} from '@shared/error-message';

interface UseErrorEmbeddedNotificationResult {
  errorMessage: ErrorMessage | null;
  handleClose: () => void;
}

export const useErrorEmbeddedNotification = ({
  error,
  errorMessages = DEFAULT_ERROR_MESSAGES,
  exceptions = DEFAULT_EXCEPTIONS,
}: ErrorNotificationParams): UseErrorEmbeddedNotificationResult => {
  const [errorMessage, setErrorMessage] = useState<ErrorMessage | null>(null);
  const processedError = useMemo(() => {
    return getErrorMessageWithExceptions({
      error,
      errorMessages,
      exceptions,
    });
  }, [error, errorMessages, exceptions]);

  const handleClose = () => {
    setErrorMessage(null);
  };

  useEffect(() => {
    if (processedError) {
      setErrorMessage(processedError);
    }
  }, [processedError]);

  return { errorMessage, handleClose };
};
