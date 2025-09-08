import { createSlice } from '@reduxjs/toolkit';
import { getStoredThemeMode } from '../lib/modeLocalStorageHandlers';
import { ThemeMode } from './types';

interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode: getStoredThemeMode() ?? ThemeMode.Dark,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  selectors: {
    selectThemeMode: (state) => state.mode,
  },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    toggleMode: (state) => {
      state.mode =
        state.mode === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark;
    },
  },
});

export const { setMode } = themeSlice.actions;
export const { selectThemeMode } = themeSlice.selectors;
