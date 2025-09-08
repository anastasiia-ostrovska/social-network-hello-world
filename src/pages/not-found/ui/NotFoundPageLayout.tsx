import { ReactElement } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface NotFoundPageLayoutProps {
  helperText: string;
  icon: ReactElement;
  goHomeButton: ReactElement;
}

const NotFoundPageLayout = ({
  icon,
  helperText,
  goHomeButton,
}: NotFoundPageLayoutProps) => {
  return (
    <Stack
      sx={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack
        spacing={5}
        sx={{
          minWidth: '250px',
          width: '35vw',
          fontSize: { xs: '14px', md: '18px', xl: '24px' },
        }}
      >
        {icon}
        <Typography component="p" variant="inherit">
          {helperText}
        </Typography>
        {goHomeButton}
      </Stack>
    </Stack>
  );
};

export default NotFoundPageLayout;
