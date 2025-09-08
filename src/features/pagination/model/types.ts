import { ChangeEvent } from 'react';
import { PaginationProps as MUIPaginationProps } from '@mui/material/Pagination/Pagination';

export type PageChangeHandler = (
  event: ChangeEvent<unknown>,
  page: number
) => void;

export interface PaginationProps {
  size: MUIPaginationProps['size'];
  pagesCount: number;
  currentPage: number;
  onChange: PageChangeHandler;
  isLoading?: boolean;
}
