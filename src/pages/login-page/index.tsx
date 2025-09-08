import Stack from '@mui/material/Stack';
import { LoginForm } from '@widgets/login-form';

const LoginPage = () => {
  return (
    <Stack
      sx={{
        minHeight: 'inherit',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4,
      }}
    >
      <LoginForm />
    </Stack>
  );
};

export default LoginPage;
