import MUIPagination from '@mui/material/Pagination';
import { SkeletonWrapper } from '@shared/ui';
import { PaginationProps } from '../model/types';

const Pagination = ({
  size,
  pagesCount,
  currentPage,
  onChange,
  isLoading = false,
}: PaginationProps) => {
  return (
    <SkeletonWrapper
      isLoading={isLoading}
      element={
        <MUIPagination
          size={size}
          count={pagesCount}
          page={currentPage}
          onChange={onChange}
        />
      }
      sx={{ borderRadius: '0.5rem' }}
    />
  );
};

export default Pagination;
