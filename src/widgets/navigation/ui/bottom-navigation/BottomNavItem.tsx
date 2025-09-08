import { memo } from 'react';
import ListItem from '@mui/material/ListItem';
import { NavigationLink } from '@shared/ui';
import { NavigationItemProps } from '../../model/types';

const BottomNavItem = ({ label, icon, path }: NavigationItemProps) => {
  return (
    <ListItem disablePadding>
      <NavigationLink
        path={path}
        label={label}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {icon}
      </NavigationLink>
    </ListItem>
  );
};

export default memo(BottomNavItem);
