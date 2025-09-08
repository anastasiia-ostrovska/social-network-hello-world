import { ReactElement } from 'react';
import { LogoutButton } from '@features/login';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import { ProfileMenuButton } from '@features/user';
import { NavbarLayoutProps } from '../../model/types';
import { PROFILE_NAV_ITEMS } from '../../config/profile-items';
import { useProfileNavbar } from '../../model/useProfileNavbar';
import ProfileNavItem from './ProfileNavItem';

type MenuProps = Omit<
  ReturnType<typeof useProfileNavbar>,
  'handleMenuButtonClick'
>;

interface ProfileNavbarLayoutProps extends NavbarLayoutProps {
  menuID: string;
  menuLabeledBy: string;
  menuProps: MenuProps;
  profileButton: ReactElement;
  logoutButton: ReactElement;
}

const ProfileNavbarLayout = ({
  menuID,
  menuLabeledBy,
  profileButton,
  navItems,
  logoutButton,
  menuProps,
}: ProfileNavbarLayoutProps) => {
  const { anchorEl, isMenuOpen, handleMenuClose } = menuProps;
  return (
    <Box component="li">
      {profileButton}
      <Menu
        id={menuID}
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClick={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': menuLabeledBy,
        }}
        elevation={5}
        sx={{ mt: 2 }}
        disableScrollLock
      >
        {navItems}
        <Divider />
        {logoutButton}
      </Menu>
    </Box>
  );
};

const ProfileNavbar = ({ iconSize }: { iconSize: number }) => {
  const { anchorEl, isMenuOpen, handleMenuButtonClick, handleMenuClose } =
    useProfileNavbar();

  const menuID = 'profile-menu';
  const profileButtonID = 'profile-menu-button';

  return (
    <ProfileNavbarLayout
      menuID={menuID}
      menuLabeledBy={profileButtonID}
      menuProps={{ anchorEl, isMenuOpen, handleMenuClose }}
      profileButton={
        <ProfileMenuButton
          buttonId={profileButtonID}
          controlsId={menuID}
          size={iconSize}
          isMenuOpen={isMenuOpen}
          onClick={handleMenuButtonClick}
        />
      }
      navItems={PROFILE_NAV_ITEMS.map(({ id, ...itemProps }) => {
        return <ProfileNavItem key={id} {...itemProps} />;
      })}
      logoutButton={<LogoutButton iconSize={iconSize} />}
    />
  );
};

export default ProfileNavbar;
