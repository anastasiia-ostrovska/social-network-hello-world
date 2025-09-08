import { useAppDispatch, useAppSelector } from '@shared/model';
import { selectThemeMode } from '@entities/theme/model/themeSlice';
import { toggleThemeMode } from '@entities/theme/model/toggleThemeMode';
import { ThemeMode } from '@entities/theme/model/types';

interface ThemeModeProps {
  isDarkMode: boolean;
  nextMode: ThemeMode;
  handleToggleMode: () => void;
}

export const useModeSwitcher = (): ThemeModeProps => {
  const dispatch = useAppDispatch();
  const currentMode = useAppSelector(selectThemeMode);

  const isDarkMode = currentMode === ThemeMode.Dark;
  const nextMode =
    currentMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;

  const handleToggleMode = () => {
    dispatch(toggleThemeMode());
  };

  return { isDarkMode, nextMode, handleToggleMode };
};
