import { useTheme } from '@mui/material/styles';
import { EditButton } from '@shared/ui';
import { AvatarPosition, AvatarWithBgImage } from '@entities/user';
import {
  FollowButton,
  NetworkInfoNavigation,
  ShowContactInfoButton,
  UserInfo,
} from '@features/user';
import { MessageNavButton } from '@features/message-nav-button';
import { useUserProfileInfo } from '../modal/useUserProfileInfo';
import ProfileAvatarSectionLayout from './ProfileInfoSectionLayout';

interface ProfileAvatarSectionProps {
  userId: string;
  onEditPhotosClick: () => void;
  onShowContactsClick: () => void;
  onEditDetailsClick: () => void;
}

const ProfileInfoSection = ({
  userId,
  onEditPhotosClick,
  onShowContactsClick,
  onEditDetailsClick,
}: ProfileAvatarSectionProps) => {
  const { palette } = useTheme();
  const { user, isLoading, isError, isMyProfile, networkCount, imageSize } =
    useUserProfileInfo({ userId });
  const isDisabled = isLoading || isError;

  return (
    <ProfileAvatarSectionLayout
      isLoading={isDisabled}
      isMyProfile={isMyProfile}
      photosBlock={
        <AvatarWithBgImage
          name={user.name}
          avatarSrc={user.photos.avatar}
          bgImageSrc={user.photos.background}
          avatarSize={imageSize}
          bgImageHeight={imageSize}
          avatarPosition={AvatarPosition.Left}
          avatarBorderColor={palette.customBackground.sectionWrapper}
          avatarBorderWidth="4px"
          sx={{ mb: `${imageSize / 2}px` }}
        />
      }
      editImagesButton={
        <EditButton
          tooltipTitle="Change profile images"
          isDisabled={isDisabled}
          onClick={onEditPhotosClick}
          sx={{
            position: 'absolute',
            right: { xs: 4, sm: 8, md: 12 },
            top: { xs: 4, sm: 8, md: 12 },
            backgroundColor: 'customBackground.sectionWrapperTransparent',
            borderRadius: '50%',
          }}
        />
      }
      editProfileInfoButton={
        <EditButton
          tooltipTitle="Edit profile details"
          isDisabled={isDisabled}
          onClick={onEditDetailsClick}
          sx={{
            position: 'absolute',
            right: { xs: 4, sm: 8, md: 12 },
            top: imageSize + 10,
          }}
        />
      }
      userDescription={
        <UserInfo
          isLoading={isDisabled}
          name={user.name}
          jobTitle={user.job}
          country={user.country}
          noWrap={false}
        />
      }
      showContactsButton={
        <ShowContactInfoButton
          isLoading={isDisabled}
          onClick={onShowContactsClick}
          sx={{ width: 'fit-content' }}
        />
      }
      networkInfoNavigation={
        <NetworkInfoNavigation
          userId={userId}
          followingCount={networkCount.following}
          followersCount={networkCount.followedBy}
          isLoading={isDisabled}
          sx={{ ml: '-8px', mt: '-8px' }}
        />
      }
      followButton={
        <FollowButton
          userId={userId}
          isLoading={isDisabled}
          sx={{ width: '100%' }}
        />
      }
      messageNavButton={
        <MessageNavButton
          userId={userId}
          name={user.name}
          sx={{ width: '100%' }}
        />
      }
    />
  );
};

export default ProfileInfoSection;
