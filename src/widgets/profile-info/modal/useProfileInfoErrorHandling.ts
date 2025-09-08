import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@shared/consts';
import { Error, isErrorTypeInError } from '@shared/error-message';
import { useErrorPopupNotification } from '@entities/notification';
import { USER_INFO_ERROR_MESSAGES } from '../consts/error-messages';

export const useProfileInfoErrorHandling = ({ error }: { error: unknown }) => {
  useErrorPopupNotification({
    error,
    errorMessages: USER_INFO_ERROR_MESSAGES,
    exceptions: [Error.NotFound],
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!!error && isErrorTypeInError({ error, errorType: Error.NotFound })) {
      navigate(ROUTES.NOT_FOUND);
    }
  }, [error, navigate]);
};
