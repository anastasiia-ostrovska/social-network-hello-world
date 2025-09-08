import { ReactNode } from 'react';
import { Stack } from '@mui/material';
import { BasicTabs, SectionWrapper, TabItem } from '@shared/ui';
import { ProfileImagesEditorLayoutProps } from '../model/types';

const EDITOR_TABS = {
  AVATAR: {
    id: 1,
    label: 'Avatar',
    content: null,
  },
  COVER: {
    id: 2,
    label: 'Cover',
    content: null,
  },
};

const TabLayout = ({ children }: { children: ReactNode }) => (
  <Stack
    direction={{ sm: 'row' }}
    justifyContent="space-between"
    alignItems="end"
    spacing={{ xs: 3, sm: 4 }}
  >
    {children}
  </Stack>
);

const ProfilePhotosEditorLayout = ({
  imagesBlock,
  avatarInputActions,
  bgInputActions,
  applyButton,
}: ProfileImagesEditorLayoutProps) => {
  const tabs: TabItem[] = [
    {
      ...EDITOR_TABS.AVATAR,
      content: (
        <TabLayout>
          {avatarInputActions}
          {applyButton}
        </TabLayout>
      ),
    },
    {
      ...EDITOR_TABS.COVER,
      content: (
        <TabLayout>
          {bgInputActions}
          {applyButton}
        </TabLayout>
      ),
    },
  ];

  return (
    <Stack
      spacing={2}
      sx={{
        alignItems: 'end',
        width: { xs: '100%', sm: '80vw' },
        maxWidth: { sm: 500 },
      }}
    >
      <SectionWrapper>{imagesBlock}</SectionWrapper>
      <BasicTabs
        variant="fullWidth"
        tabsAriaLabel="Chose am image to edit"
        wrapperSx={{ gap: 3 }}
        tabs={tabs}
      />
    </Stack>
  );
};

export default ProfilePhotosEditorLayout;
