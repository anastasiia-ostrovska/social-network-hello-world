import { useAppSelector } from '@shared/model';
import { NotificationActions } from '@features/notification';
import {
  PopupNotification,
  selectLastNotification,
} from '@entities/notification';

export const PopupNotificationWithControls = () => {
  const notification = useAppSelector(selectLastNotification);
  if (!notification) return null;

  return (
    <PopupNotification
      alertType={notification.alertType}
      message={notification.message}
      title={notification.title}
      action={<NotificationActions id={notification.id} />}
    />
  );
};
