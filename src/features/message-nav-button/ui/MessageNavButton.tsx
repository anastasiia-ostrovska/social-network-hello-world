import { Link } from 'react-router-dom';
import { ButtonProps } from '@mui/material';
import { ROUTES } from '@shared/consts';
import Button from '@mui/material/Button';

interface MessageNavButtonProps extends ButtonProps {
  userId: string;
  name?: string;
}

const MessageNavButton = ({
  userId,
  name = '',
  ...buttonProps
}: MessageNavButtonProps) => {
  return (
    <Button
      component={Link}
      to={`${ROUTES.DIALOGS}/${userId}`}
      aria-label={name ? `Write a message to ${name}` : 'Write a message'}
      variant="outlined"
      {...buttonProps}
    >
      Message
    </Button>
  );
};

export default MessageNavButton;
