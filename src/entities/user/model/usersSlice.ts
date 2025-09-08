import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UsersListFilters } from './types';

export const initialUsersListFilters: UsersListFilters = {
  count: 12,
  page: 1,
  search: '',
  following: false,
};

export const usersSlice = createSlice({
  name: 'usersListFilters',
  initialState: initialUsersListFilters,
  selectors: {
    selectUsersListFilters: (state) => state,
    selectUsersPerPage: (state) => state.count,
    selectCurrentPage: (state) => state.page,
  },
  reducers: {
    setUsersPerPage: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSearchedUser: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setIsFollowedByMe: (state, action: PayloadAction<boolean>) => {
      state.following = action.payload;
    },
  },
});

export const { selectUsersListFilters, selectUsersPerPage, selectCurrentPage } =
  usersSlice.selectors;
export const {
  setUsersPerPage,
  setCurrentPage,
  setSearchedUser,
  setIsFollowedByMe,
} = usersSlice.actions;
