import { AlertProps } from '@mui/material';
import { NotificationProps, NotificationTypes } from '../model/types';

const createNotificationElement =
  (alertType: AlertProps['severity']) =>
  ({
    message,
    title = '',
  }: {
    message: string;
    title?: string;
  }): NotificationProps => ({ alertType, message, title });

export const createInfoNotificationElement = createNotificationElement(
  NotificationTypes.Info
);
export const createSuccessNotificationElement = createNotificationElement(
  NotificationTypes.Success
);
export const createWarningNotificationElement = createNotificationElement(
  NotificationTypes.Warning
);
export const createErrorNotificationElement = createNotificationElement(
  NotificationTypes.Error
);
