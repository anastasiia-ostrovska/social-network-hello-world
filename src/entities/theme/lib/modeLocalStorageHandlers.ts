import { getFromLocalStorage, setToLocalStorage } from '@shared/lib';
import { ThemeMode } from '../model/types';
import { MODE_STORAGE_KEY } from '../consts/mode-storage-key';

export const setModeToLocalStorage = setToLocalStorage(MODE_STORAGE_KEY);

export const getStoredThemeMode = (): null | ThemeMode => {
  const mode = getFromLocalStorage(MODE_STORAGE_KEY);

  if (mode && Object.values(ThemeMode).includes(mode as ThemeMode)) {
    return mode as ThemeMode;
  }

  return null;
};
