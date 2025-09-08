import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { useLogout } from '../model/useLogout';

const LogoutIcon = ({ iconSize }: { iconSize: number }) => {
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        height: iconSize,
        width: iconSize,
        borderRadius: '50%',
      }}
    >
      <AccountCircleRoundedIcon />
    </Stack>
  );
};

const LogoutButton = ({ iconSize }: { iconSize: number }) => {
  const { handleLogout } = useLogout();

  return (
    <Chip
      component="button"
      clickable
      variant="outlined"
      label="Log out"
      aria-label="Log out"
      color="error"
      avatar={<LogoutIcon iconSize={iconSize} />}
      onClick={handleLogout}
      sx={{ display: 'flex', justifySelf: 'center', pl: '3px' }}
    />
  );
};

export default LogoutButton;
