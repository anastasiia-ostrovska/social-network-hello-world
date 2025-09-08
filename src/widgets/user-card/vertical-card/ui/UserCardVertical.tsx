import { memo } from 'react';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { CardActionArea } from '@mui/material';
import { ROUTES } from '@shared/consts';
import { AvatarWithBgImage, AvatarWithBgImageProps } from '@entities/user';
import { FollowButton, UserInfoProps } from '@features/user';
import { CardInfoLayout, UserCardLayout } from './UserCardLayout';

interface UserCardProps extends AvatarWithBgImageProps, UserInfoProps {
  userId: string;
}

const UserCardVertical = ({
  isLoading,
  userId,
  name,
  jobTitle,
  country,
  avatarSrc,
  bgImageSrc,
  avatarSize,
  bgImageHeight,
}: UserCardProps) => {
  const { palette } = useTheme();

  return (
    <UserCardLayout
      isLoading={isLoading}
      content={
        <RouterLink
          to={`${ROUTES.PROFILE}/${userId}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <CardActionArea
            aria-label={isLoading ? 'Loading profile' : `Visit ${name} profile`}
          >
            <AvatarWithBgImage
              name={name}
              avatarSrc={avatarSrc}
              bgImageSrc={bgImageSrc}
              avatarSize={avatarSize}
              bgImageHeight={bgImageHeight}
              avatarBorderColor={palette.customBackground.userCard}
              avatarBorderWidth="3px"
              sx={{ mb: avatarSize / 16 }}
            />
            <CardInfoLayout
              isLoading={isLoading}
              name={name}
              jobTitle={jobTitle}
              country={country}
            />
          </CardActionArea>
        </RouterLink>
      }
      button={
        <FollowButton
          userId={userId}
          isLoading={isLoading}
          sx={{ width: '100%', height: 36 }}
        />
      }
    />
  );
};

export default memo(UserCardVertical);
