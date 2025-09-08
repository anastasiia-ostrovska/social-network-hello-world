import { useEffect, useMemo } from 'react';
import { useAppDispatch } from '@shared/model';
import {
  DEFAULT_ERROR_MESSAGES,
  DEFAULT_EXCEPTIONS,
  ErrorNotificationParams,
  getErrorMessageWithExceptions,
} from '@shared/error-message';
import { createErrorNotificationElement } from '../lib/createNotificationElement';
import { addNotification } from './notificationSlice';

export const useErrorPopupNotification = ({
  error,
  errorMessages = DEFAULT_ERROR_MESSAGES,
  exceptions = DEFAULT_EXCEPTIONS,
}: ErrorNotificationParams) => {
  const dispatch = useAppDispatch();
  const processedError = useMemo(
    () =>
      getErrorMessageWithExceptions({
        error,
        errorMessages,
        exceptions,
      }),
    [error, errorMessages, exceptions]
  );

  useEffect(() => {
    if (processedError) {
      const errorNotification = createErrorNotificationElement(processedError);
      dispatch(addNotification(errorNotification));
    }
  }, [dispatch, processedError]);
};
