import { useAppSelector } from '@shared/model';
import {
  selectCurrentPage,
  selectPostListFilters,
  selectPostsPerPage,
} from './postsFilters';

/**
 * A custom selector hook that retrieves and returns the post-filters, the number of posts per page,
 * and the current page from the application state.
 *
 * @function usePostsFiltersSelector
 * @returns {Object} An object containing the following properties:
 * - postsFilters: The applied filters for the post-list.
 * - postsPerPage: The number of posts displayed per page.
 * - currentPage: The currently active page number.
 */

export const usePostsFiltersSelector = () => {
  const postsFilters = useAppSelector(selectPostListFilters);
  const postsPerPage = useAppSelector(selectPostsPerPage);
  const currentPage = useAppSelector(selectCurrentPage);

  return { postsFilters, postsPerPage, currentPage };
};
