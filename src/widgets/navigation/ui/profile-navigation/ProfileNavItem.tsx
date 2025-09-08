import { NavigationLink } from '@shared/ui';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { NavigationItemProps } from '../../model/types';

const ProfileNavItem = ({ label, icon, path }: NavigationItemProps) => {
  return (
    <MenuItem>
      <NavigationLink path={path} label={label}>
        <ListItemIcon sx={{ color: 'inherit' }}>{icon}</ListItemIcon>
        {label}
      </NavigationLink>
    </MenuItem>
  );
};

export default ProfileNavItem;
