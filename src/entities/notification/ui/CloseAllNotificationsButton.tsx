import Button from '@mui/material/Button';
import { ButtonProps } from '@mui/material';
import { forwardRef } from 'react';

interface CloseAllNotificationsButtonProps extends ButtonProps {
  onClick: () => void;
}

export const CloseAllNotificationsButton = forwardRef<
  HTMLButtonElement,
  CloseAllNotificationsButtonProps
>(({ onClick, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      color="inherit"
      variant="text"
      size="small"
      aria-label="Close all notifications"
      sx={{ width: 'max-content', justifySelf: 'end' }}
      onClick={onClick}
      {...props}
    >
      Close All
    </Button>
  );
});

CloseAllNotificationsButton.displayName = 'CloseAllNotificationsButton';
