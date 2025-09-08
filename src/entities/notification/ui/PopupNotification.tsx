import Snackbar from '@mui/material/Snackbar';
import { ReactElement } from 'react';
import { useMediaQueryState } from '@shared/lib';
import { NotificationProps } from '../model/types';
import { EmbeddedNotification } from './EmbeddedNotification';

interface EmbeddedNotificationProps extends NotificationProps {
  action?: ReactElement | null;
}

export const PopupNotification = ({
  alertType,
  message,
  title = '',
  action = null,
}: EmbeddedNotificationProps) => {
  const { isUpSM } = useMediaQueryState();

  return (
    <Snackbar
      open
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      sx={{
        mb: {
          xs: 7,
          sm: 5,
          md: 0,
        },
      }}
    >
      <EmbeddedNotification
        alertType={alertType}
        message={message}
        title={title}
        action={action}
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: isUpSM ? '' : 'center',
          width: '100%',
          maxWidth: isUpSM ? 400 : 350,
        }}
      />
    </Snackbar>
  );
};

export default PopupNotification;
