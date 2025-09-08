import type { PaginationProps } from '@mui/material';
import type { PageChangeHandler } from '@features/pagination';
import type { UserWithInfo } from '@entities/user';

export interface UseUsersListResult {
  isLoading: boolean;
  isError: boolean;
  users: UserWithInfo[];
  currentPage: number;
  pagesCount: number;
  paginationSize: PaginationProps['size'];
  handlePageChange: PageChangeHandler;
}
