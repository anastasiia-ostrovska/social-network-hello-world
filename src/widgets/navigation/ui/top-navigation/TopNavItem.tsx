import { memo } from 'react';
import { NavigationLink } from '@shared/ui';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { NavigationItemProps } from '../../model/types';

const TopNavItem = ({ label, icon, path }: NavigationItemProps) => {
  return (
    <Box component="li">
      <NavigationLink
        path={path}
        label={label}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconButton sx={{ color: 'inherit' }}>{icon}</IconButton>
      </NavigationLink>
    </Box>
  );
};

export default memo(TopNavItem);
