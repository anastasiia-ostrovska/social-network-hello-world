import { useAppDispatch, useAppSelector } from '@shared/model';
import {
  generateFakeUsers,
  selectUsersListFilters,
  setCurrentPage,
  useUsersListQuery,
} from '@entities/user';
import { useErrorPopupNotification } from '@entities/notification';
import type { PageChangeHandler } from '@features/pagination';
import type { UseUsersListResult } from './types';
import { usePaginationSize } from '../lib/usePaginationSize';

export const useUsersList = (): UseUsersListResult => {
  const dispatch = useAppDispatch();
  const { count, page } = useAppSelector(selectUsersListFilters);
  const {
    data: usersResponse,
    isLoading: isUsersListLoading,
    isError,
    error,
  } = useUsersListQuery({
    count,
    page,
  });
  useErrorPopupNotification({ error });

  const paginationSize = usePaginationSize();
  const pagesCount = usersResponse?.data?.totalPages ?? 0;
  const currentPage = usersResponse?.data?.currentPage ?? 1;
  const users =
    isUsersListLoading || isError
      ? generateFakeUsers(count)
      : usersResponse?.data?.users || [];

  const handlePageChange: PageChangeHandler = (_, page) => {
    if (page !== currentPage) {
      dispatch(setCurrentPage(page));
    }
  };

  return {
    isLoading: isUsersListLoading,
    isError,
    users,
    currentPage,
    pagesCount,
    paginationSize,
    handlePageChange,
  };
};
