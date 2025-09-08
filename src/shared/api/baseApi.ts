import type { RootState } from '@app/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { unauthorizedHandler } from '@entities/session/lib/unauthorizedHandler';
import { logError, logSuccess } from './responseLoggers';
import * as TAGS from './invalidation-tags';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    headers.set('mode', 'no-cors');
    const { token } = (getState() as RootState).session;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithInterceptor: typeof baseQuery = async (
  args,
  api,
  extraOptions
) => {
  const result = await baseQuery(args, api, extraOptions);
  const { data, error } = result;

  if (data) logSuccess(data);
  if (error) {
    logError(error);
    unauthorizedHandler(error, api.dispatch);
  }
  return result;
};

const tagTypes = Object.values(TAGS);

export const baseAPI = createApi({
  baseQuery: baseQueryWithInterceptor,
  tagTypes,
  keepUnusedDataFor: 5,
  endpoints: () => ({}),
});
