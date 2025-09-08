import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface RemoveNotificationIconButtonProps extends IconButtonProps {
  onClick: () => void;
}

export const RemoveNotificationIconButton = ({
  onClick,
  ...props
}: RemoveNotificationIconButtonProps) => {
  return (
    <IconButton
      aria-label="Close notification"
      size="small"
      color="inherit"
      onClick={onClick}
      {...props}
    >
      <CloseIcon fontSize="inherit" />
    </IconButton>
  );
};
