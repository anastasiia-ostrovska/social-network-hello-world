import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Filters, PostsFilters } from './types';

export const initialPostsFilters: PostsFilters = {
  page: 1,
  count: 10,
  search: '',
  filters: [],
};

export const postsFilters = createSlice({
  name: 'postsFilters',
  initialState: initialPostsFilters,
  selectors: {
    selectPostListFilters: (state) => state,
    selectPostsPerPage: (state) => state.count,
    selectCurrentPage: (state) => state.page,
  },
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSearchedUser: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setFilters: (state, action: PayloadAction<Filters[]>) => {
      state.filters = action.payload;
    },
  },
});

export const { selectPostListFilters, selectPostsPerPage, selectCurrentPage } =
  postsFilters.selectors;
export const { setCurrentPage, setSearchedUser, setFilters } =
  postsFilters.actions;
