import { MouseEvent, useState } from 'react';

type AnchorEl = HTMLElement | null;
type MenuBtnClickHandler = (event: MouseEvent<HTMLElement>) => void;
type MenuCloseHandler = () => void;

type UseProfileNavbarResult = {
  anchorEl: AnchorEl;
  isMenuOpen: boolean;
  handleMenuButtonClick: MenuBtnClickHandler;
  handleMenuClose: MenuCloseHandler;
};

export const useProfileNavbar = (): UseProfileNavbarResult => {
  const [anchorEl, setAnchorEl] = useState<AnchorEl>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuButtonClick: MenuBtnClickHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose: MenuCloseHandler = () => {
    setAnchorEl(null);
  };

  return {
    anchorEl,
    isMenuOpen,
    handleMenuButtonClick,
    handleMenuClose,
  };
};
