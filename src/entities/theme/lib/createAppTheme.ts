import { createTheme } from '@mui/material';
import type { ThemeMode } from '../model/types';
import getPalette from './getPalette';
import components from '../config/components';

export const createAppTheme = (mode: ThemeMode) => {
  return createTheme({
    components,
    palette: getPalette(mode),
  });
};
