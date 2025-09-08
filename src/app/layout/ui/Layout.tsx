import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

interface LayoutProps {
  logo: ReactElement;
  topNavigation: ReactElement;
  sideNavigation: ReactElement;
  modeSwitcher: ReactElement;
}

const Layout = ({
  logo,
  topNavigation,
  sideNavigation,
  modeSwitcher,
}: LayoutProps) => {
  return (
    <Stack
      sx={{
        px: { xs: 1, sm: 8, lg: '10%', xl: '15%' },
        pt: { xs: 8, md: 9 },
        pb: { xs: 8, md: 2 },
        minHeight: 'inherit',
      }}
    >
      <Paper
        component="header"
        square
        sx={{
          position: 'fixed',
          zIndex: 1,
          top: 0,
          right: 0,
          left: 0,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 56,
          px: 'inherit',
        }}
      >
        <Box sx={{ height: '100%', py: { xs: 2.2, sm: 2 } }}>{logo}</Box>
        <Stack direction="row">
          {modeSwitcher}
          {topNavigation}
        </Stack>
      </Paper>
      <Stack
        component="main"
        spacing={{ xs: 1, md: 2 }}
        sx={{ flexGrow: 1, ml: { md: '204px' } }}
      >
        <Outlet />
      </Stack>
      {sideNavigation}
    </Stack>
  );
};

export default Layout;
