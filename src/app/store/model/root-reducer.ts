import { combineSlices } from '@reduxjs/toolkit';
import { baseAPI } from '@shared/api';
import { sessionSlice } from '@entities/session';
import { themeSlice } from '@entities/theme';
import { notificationSlice } from '@entities/notification';
import { usersSlice } from '@entities/user';
import { postsFilters } from '@entities/post';
import { modalSlice } from '@entities/modal';

const rootReducer = combineSlices(
  baseAPI,
  sessionSlice,
  themeSlice,
  notificationSlice,
  modalSlice,
  usersSlice,
  postsFilters
);

export default rootReducer;
