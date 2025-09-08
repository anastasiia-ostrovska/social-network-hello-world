import { memo } from 'react';
import { NavigationLink } from '@shared/ui';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavigationItemProps } from '../../model/types';

const SideNavItem = ({ label, icon, path }: NavigationItemProps) => {
  return (
    <ListItem disablePadding>
      <NavigationLink path={path} label={label}>
        <ListItemButton>
          <ListItemIcon sx={{ color: 'inherit' }}>{icon}</ListItemIcon>
          <ListItemText primary={label} />
        </ListItemButton>
      </NavigationLink>
    </ListItem>
  );
};

export default memo(SideNavItem);
