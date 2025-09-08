import {
  ApiSuccessResponse,
  baseAPI,
  ENDPOINTS,
  METHODS,
  TAGS,
} from '@shared/api';
import { AuthData, LoginData, LoginResponseData } from '../model/types';

type AuthMeResponse = ApiSuccessResponse<AuthData>;
type LoginResponse = ApiSuccessResponse<LoginResponseData>;

const authApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    authMe: builder.query<AuthMeResponse, void>({
      query: () => ({
        url: ENDPOINTS.AUTH_ME,
        headers: {
          // 'x-mock-response-code': '401',
        },
      }),
      providesTags: [TAGS.AUTH],
    }),
    login: builder.mutation<LoginResponse, LoginData>({
      query: (logInData) => ({
        method: METHODS.POST,
        url: ENDPOINTS.LOGIN,
        body: logInData,
      }),
      invalidatesTags: [TAGS.AUTH],
    }),
  }),
});

export const { useAuthMeQuery, useLoginMutation } = authApi;
