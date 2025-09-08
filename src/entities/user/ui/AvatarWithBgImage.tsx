import { ReactElement } from 'react';
import { Styles } from '@shared/model';
import Box from '@mui/material/Box';
import Avatar from '@entities/user/ui/Avatar';
import {
  AvatarPosition,
  AvatarWithBgImageProps,
  BackgroundImageProps,
} from '../model/types';

interface AvatarWithBgImageLayoutProps {
  bgImageBlock: ReactElement;
  avatar: ReactElement;
  sx?: Styles;
}

const AvatarWithBgImageLayout = ({
  bgImageBlock,
  avatar,
  sx = {},
}: AvatarWithBgImageLayoutProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: 'inherit',
        borderRadius: 'inherit',
        ...sx,
      }}
    >
      {bgImageBlock}
      {avatar}
    </Box>
  );
};

const BackgroundImage = ({
  bgImageSrc,
  bgImageHeight,
}: BackgroundImageProps) => {
  return (
    <Box
      bgcolor="grey.300"
      sx={{
        height: bgImageHeight,
        width: '100%',
        backgroundImage: `url(${bgImageSrc || ''})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit',
      }}
    />
  );
};

const AvatarWithBgImage = ({
  name,
  avatarSrc,
  bgImageSrc,
  avatarSize,
  bgImageHeight,
  avatarBorderColor = '',
  avatarBorderWidth = '5px',
  avatarPosition = AvatarPosition.Center,
  sx = {},
}: AvatarWithBgImageProps) => {
  return (
    <AvatarWithBgImageLayout
      bgImageBlock={
        <BackgroundImage
          bgImageHeight={bgImageHeight}
          bgImageSrc={bgImageSrc}
        />
      }
      avatar={
        <Avatar
          name={name}
          avatarSrc={avatarSrc}
          avatarSize={avatarSize}
          sx={{
            position: 'absolute',
            transform: 'translateY(-50%)',
            left:
              avatarPosition === AvatarPosition.Center
                ? `calc(50% - ${avatarSize / 2}px)`
                : '2rem',
            border: avatarBorderColor
              ? `${avatarBorderWidth} solid ${avatarBorderColor}`
              : 'none',
          }}
        />
      }
      sx={sx}
    />
  );
};

export default AvatarWithBgImage;
