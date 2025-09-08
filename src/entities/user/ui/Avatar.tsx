import MUIAvatar from '@mui/material/Avatar';
import { UserAvatarProps } from '../model/types';
import { useAvatar } from '../lib/useAvatar';

const Avatar = ({ name, avatarSrc, avatarSize, sx = {} }: UserAvatarProps) => {
  const { bgColor, initials } = useAvatar(name);

  return (
    <MUIAvatar
      alt={name || 'Avatar is loading...'}
      aria-label={name || 'Avatar'}
      src={avatarSrc || ''}
      sx={{
        width: avatarSize,
        height: avatarSize,
        fontSize: avatarSize * 0.5,
        backgroundColor: name ? bgColor : 'default',
        ...sx,
      }}
    >
      {!!name && initials}
    </MUIAvatar>
  );
};

export default Avatar;
