import { useAppDispatch } from '@shared/model';
import { removeAccessToken } from '@entities/session';

export const useLogout = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(removeAccessToken());
  };

  return { handleLogout };
};
