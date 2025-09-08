import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { useAppDispatch } from '@shared/model';
import {
  clearAllNotifications,
  CloseAllNotificationsButton,
  removeNotification,
  RemoveNotificationIconButton,
} from '@entities/notification';

const NotificationActions = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();

  const handleRemoveNotification = () => {
    dispatch(removeNotification(id));
  };

  const handleClearAllNotification = () => {
    dispatch(clearAllNotifications());
  };

  return (
    <Stack direction="row" sx={{ alignSelf: 'end' }}>
      <Tooltip title="Dismiss all notifications">
        <CloseAllNotificationsButton onClick={handleClearAllNotification} />
      </Tooltip>
      <RemoveNotificationIconButton onClick={handleRemoveNotification} />
    </Stack>
  );
};

export default NotificationActions;
