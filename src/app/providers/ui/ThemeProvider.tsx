import { ReactNode } from 'react';
import { CssBaseline, ThemeProvider as MUIThemeProvider } from '@mui/material';
import { useAppTheme } from '@entities/theme';

interface ThemeWrapperProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeWrapperProps) => {
  const theme = useAppTheme();

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
