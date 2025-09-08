import { MouseEvent } from 'react';
import { UserAvatar, useUserMeQuery } from '@entities/user';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

interface ProfileMenuButtonProps {
  buttonId: string;
  controlsId: string;
  size: number;
  isMenuOpen: boolean;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}

const ProfileMenuButton = ({
  buttonId,
  controlsId,
  size,
  isMenuOpen,
  onClick,
}: ProfileMenuButtonProps) => {
  const { data: userMeResponse } = useUserMeQuery();
  const { data } = userMeResponse || {};

  return (
    <Tooltip title="Profile menu">
      <IconButton
        id={buttonId}
        aria-label="Profile menu"
        aria-haspopup="true"
        aria-controls={isMenuOpen ? controlsId : undefined}
        aria-expanded={isMenuOpen ? 'true' : undefined}
        onClick={(event) => onClick(event)}
      >
        <UserAvatar
          name={data?.name || ''}
          avatarSrc={data?.photos?.avatar || null}
          avatarSize={size}
        />
      </IconButton>
    </Tooltip>
  );
};

export default ProfileMenuButton;
