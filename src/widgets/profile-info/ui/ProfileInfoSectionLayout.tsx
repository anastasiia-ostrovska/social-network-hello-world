import { ReactElement } from 'react';
import { SectionWrapper } from '@shared/ui';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

interface LayoutProps {
  isLoading: boolean;
  isMyProfile: boolean;
  photosBlock: ReactElement;
  editImagesButton: ReactElement;
  editProfileInfoButton: ReactElement;
  userDescription: ReactElement;
  showContactsButton: ReactElement;
  networkInfoNavigation: ReactElement;
  followButton: ReactElement;
  messageNavButton: ReactElement;
}

const ProfileAvatarSectionLayout = ({
  isLoading,
  isMyProfile,
  photosBlock,
  editImagesButton,
  editProfileInfoButton,
  userDescription,
  showContactsButton,
  networkInfoNavigation,
  followButton,
  messageNavButton,
}: LayoutProps) => {
  return (
    <SectionWrapper sx={{ p: 0 }}>
      <Box sx={{ position: 'relative', borderRadius: 'inherit' }}>
        {photosBlock}
        {isMyProfile && editImagesButton}
        {isMyProfile && editProfileInfoButton}
        <Stack spacing={{ xs: 2, sm: 3 }} sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
          <Stack direction={{ sm: 'row' }} spacing={{ sm: 5, md: 9 }}>
            <Stack
              sx={{
                mb: 1,
                width: isLoading ? 220 : 'auto',
                minWidth: 220,
                maxWidth: 500,
              }}
            >
              {userDescription}
            </Stack>
            <Stack justifyContent="space-between">
              {networkInfoNavigation}
              {showContactsButton}
            </Stack>
          </Stack>
          {!isMyProfile && !isLoading && (
            <Stack direction="row" spacing={2} sx={{ maxWidth: 220 }}>
              {followButton}
              {messageNavButton}
            </Stack>
          )}
        </Stack>
      </Box>
    </SectionWrapper>
  );
};

export default ProfileAvatarSectionLayout;
