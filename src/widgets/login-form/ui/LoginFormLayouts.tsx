import { ReactElement } from 'react';
import { SectionWrapper } from '@shared/ui';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface LogInFormLayoutProps {
  header: ReactElement;
  form: ReactElement;
  guestDataHelper: ReactElement;
  errorNotification: ReactElement;
}

export const LoginFormBlockLayout = ({
  header,
  guestDataHelper,
  errorNotification,
  form,
}: LogInFormLayoutProps) => {
  return (
    <Stack spacing={1} sx={{ maxWidth: 300, width: '100%' }}>
      {header}
      <SectionWrapper
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        {guestDataHelper}
      </SectionWrapper>
      {errorNotification}
      <SectionWrapper>{form}</SectionWrapper>
    </Stack>
  );
};

export const FormHeaderLayout = ({ heading }: { heading: string }) => {
  return (
    <Typography variant="h5" component="h1" sx={{ alignSelf: 'center' }}>
      {heading}
    </Typography>
  );
};

interface GuestDataLayoutProps {
  text: string;
  button: ReactElement;
}

export const FormGuestDataLayout = ({ text, button }: GuestDataLayoutProps) => {
  return (
    <>
      <Typography
        variant="caption"
        color="success"
        sx={{ textAlign: 'center' }}
      >
        {text}
      </Typography>
      {button}
    </>
  );
};

interface InputsLayoutProps {
  email: ReactElement;
  password: ReactElement;
}

export const FormInputsLayout = ({ email, password }: InputsLayoutProps) => {
  return (
    <Stack spacing={2}>
      {email}
      {password}
    </Stack>
  );
};
