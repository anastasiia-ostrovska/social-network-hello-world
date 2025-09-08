import { ReactElement } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import LogoFull from '@assets/logo-full.svg';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

interface AppInitLoaderLayoutProps {
  loader: ReactElement;
  logo: ReactElement;
}

const AppLoaderLayout = ({ loader, logo }: AppInitLoaderLayoutProps) => {
  return (
    <Stack component="main" sx={{ height: '100%' }}>
      {loader}
      <Stack
        sx={{
          height: 'inherit',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ minWidth: 200, width: '50vw' }}>{logo}</Box>
      </Stack>
    </Stack>
  );
};

const AppLoader = () => {
  return <AppLoaderLayout loader={<LinearProgress />} logo={<LogoFull />} />;
};

export default AppLoader;
