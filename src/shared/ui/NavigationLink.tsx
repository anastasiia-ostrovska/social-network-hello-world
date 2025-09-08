import { CSSProperties, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

interface NavLinkProps {
  path: string;
  label: string;
  children: ReactNode;
  color?: string;
  activeColor?: string;
  sx?: CSSProperties;
}

const NavigationLink = ({
  path,
  label,
  children,
  color = '',
  activeColor = '',
  sx = {},
}: NavLinkProps) => {
  const { palette } = useTheme();

  const itemColor = color || palette.text.secondary;
  const itemActiveColor = activeColor || palette.primary.main;

  return (
    <NavLink
      to={path}
      aria-label={label}
      style={({ isActive }) => ({
        display: 'flex',
        width: '100%',
        height: '100%',
        color: isActive ? itemActiveColor : itemColor,
        textDecoration: 'none',
        ...sx,
      })}
    >
      {children}
    </NavLink>
  );
};

export default NavigationLink;
