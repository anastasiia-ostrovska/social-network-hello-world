import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavItem from './BottomNavItem';
import { NavbarLayoutProps } from '../../model/types';
import { SIDE_NAV_ITEMS } from '../../config/side-items';

const BottomNavbarLayout = ({ navItems }: NavbarLayoutProps) => {
  return (
    <Paper
      component="nav"
      square
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <BottomNavigation
        component="ul"
        sx={{ m: 0, p: 0, backgroundColor: 'transparent' }}
      >
        {navItems}
      </BottomNavigation>
    </Paper>
  );
};

const BottomNavbar = () => {
  return (
    <BottomNavbarLayout
      navItems={SIDE_NAV_ITEMS.map(({ id, ...itemProps }) => {
        return <BottomNavItem key={id} {...itemProps} />;
      })}
    />
  );
};

export default BottomNavbar;
