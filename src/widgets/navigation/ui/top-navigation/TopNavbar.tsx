import { ReactElement } from 'react';
import Stack from '@mui/material/Stack';
import { NavbarLayoutProps } from '../../model/types';
import { TOP_NAV_ITEMS } from '../../config/top-items';
import ProfileNavbar from '../profile-navigation/ProfileNavbar';
import TopNavItem from './TopNavItem';

interface TopNavbarLayoutProps extends NavbarLayoutProps {
  profileNavbar: ReactElement;
}

const TopNavbarLayout = ({ navItems, profileNavbar }: TopNavbarLayoutProps) => {
  return (
    <Stack component="nav">
      <Stack
        component="ul"
        direction="row"
        spacing={{ sm: 1 }}
        sx={{ p: 0, mr: '-8px', my: 0 }}
      >
        {navItems}
        {profileNavbar}
      </Stack>
    </Stack>
  );
};

const TopNavbar = () => {
  return (
    <TopNavbarLayout
      navItems={TOP_NAV_ITEMS.map(({ id, ...itemProps }) => {
        return <TopNavItem key={id} {...itemProps} />;
      })}
      profileNavbar={<ProfileNavbar iconSize={24} />}
    />
  );
};

export default TopNavbar;
