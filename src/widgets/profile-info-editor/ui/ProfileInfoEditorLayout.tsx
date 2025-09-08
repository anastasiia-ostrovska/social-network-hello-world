import { ReactElement } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface ProfileInfoEditorLayoutProps {
  contactsHeading: string;
  infoInputs: ReactElement[];
  contactInputs: ReactElement[];
}

const INPUTS_SPACING = 3;

const ProfileInfoEditorLayout = ({
  contactsHeading,
  infoInputs,
  contactInputs,
}: ProfileInfoEditorLayoutProps) => {
  return (
    <Stack spacing={6} sx={{ width: '100%', minWidth: { sm: 450 } }}>
      <Stack spacing={INPUTS_SPACING}>{infoInputs}</Stack>
      <Stack spacing={INPUTS_SPACING}>
        <Typography variant="h6">{contactsHeading}</Typography>
        <Stack spacing={INPUTS_SPACING}>{contactInputs}</Stack>
      </Stack>
    </Stack>
  );
};

export default ProfileInfoEditorLayout;
