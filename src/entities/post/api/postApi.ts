import {
  ApiSuccessResponse,
  baseAPI,
  ENDPOINTS,
  METHODS,
  TAGS,
} from '@shared/api';
import { Post, PostListData, PostsFilters, UserId } from '../model/types';

type PostResponse = ApiSuccessResponse<Post>;
type PostListResponse = ApiSuccessResponse<PostListData>;
type LikePostResponse = { massage: string };
type LikePostBody = {
  postId: string;
};

const postApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    postById: builder.query<PostResponse, UserId>({
      query: (userId) => ({
        url: `${ENDPOINTS.POSTS}/${userId}`,
      }),
      providesTags: [TAGS.POST_ID],
    }),

    postList: builder.query<PostListResponse, PostsFilters>({
      query: (filters) => {
        return {
          url: ENDPOINTS.POSTS,
          method: METHODS.POST,
          body: filters,
        };
      },
      providesTags: [TAGS.POSTS],
    }),

    toggleLikePost: builder.mutation<LikePostResponse, LikePostBody>({
      query: (postId) => ({
        method: METHODS.PUT,
        url: ENDPOINTS.POSTS_LIKE,
        body: postId,
      }),
      invalidatesTags: [TAGS.POST_ID, TAGS.POSTS],
    }),
  }),
});

export const { usePostByIdQuery, usePostListQuery, useToggleLikePostMutation } =
  postApi;
