import { AlertProps } from '@mui/material';

export enum NotificationTypes {
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

export interface NotificationProps {
  alertType: AlertProps['severity'];
  message: string;
  title?: string;
}

export interface NotificationItem extends NotificationProps {
  id: string;
}
