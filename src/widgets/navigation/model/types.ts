import { ReactElement, ReactNode } from 'react';

export interface NavigationItemProps {
  path: string;
  label: string;
  icon: ReactNode;
}

export interface NavigationItem extends NavigationItemProps {
  id: string;
}

export interface NavbarLayoutProps {
  navItems: ReactElement[];
}
