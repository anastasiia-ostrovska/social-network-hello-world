import type { AppThunk } from '@app/store';
import { setModeToLocalStorage } from '../lib/modeLocalStorageHandlers';
import { themeSlice } from './themeSlice';

const { toggleMode } = themeSlice.actions;

export const toggleThemeMode = (): AppThunk => (dispatch, getState) => {
  dispatch(toggleMode());
  const newMode = getState().theme.mode;
  setModeToLocalStorage(newMode);
};
