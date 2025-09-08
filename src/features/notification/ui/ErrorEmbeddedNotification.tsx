import {
  DEFAULT_ERROR_MESSAGES,
  DEFAULT_EXCEPTIONS,
  ErrorNotificationParams,
} from '@shared/error-message';
import {
  EmbeddedNotification,
  useErrorEmbeddedNotification,
} from '@entities/notification';

interface ErrorEmbeddedNotificationProps extends ErrorNotificationParams {
  withCloseButton?: boolean;
}

const ErrorEmbeddedNotification = ({
  error,
  errorMessages = DEFAULT_ERROR_MESSAGES,
  exceptions = DEFAULT_EXCEPTIONS,
  withCloseButton = false,
}: ErrorEmbeddedNotificationProps) => {
  const { errorMessage, handleClose } = useErrorEmbeddedNotification({
    error,
    errorMessages,
    exceptions,
  });
  if (!errorMessage) return null;

  return (
    <EmbeddedNotification
      alertType="error"
      variant="outlined"
      message={errorMessage.message}
      title={errorMessage.title}
      {...(withCloseButton ? { onClose: handleClose } : {})}
    />
  );
};

export default ErrorEmbeddedNotification;
