import { ErrorMessage } from '@shared/error-message';
import { EmbeddedNotification } from '@entities/notification';

interface LoginErrorNotificationProps {
  error: ErrorMessage | null;
}

const LoginErrorNotification = ({ error }: LoginErrorNotificationProps) => {
  if (!error) return null;

  const { message, title } = error;

  return (
    <EmbeddedNotification
      alertType="error"
      variant="outlined"
      message={message}
      title={title}
    />
  );
};

export default LoginErrorNotification;
