import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MainContentData, PopularTagsArr } from '../interfaces/interfaces';

interface BaseInt {
  page: number;
}

interface MainContentInt extends BaseInt {
  tag?: string | null;
}

interface UserProfileInt extends BaseInt {
  author?: string;
}

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.realworld.io/api/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<MainContentData, MainContentInt>({
      query: ({ page, tag }) => {
        return {
          url: 'articles',
          params: {
            limit: 10,
            offset: page * 10,
            tag,
          },
        };
      },
    }),
    getAuthorPosts: builder.query<MainContentData, UserProfileInt>({
      query: ({ page, author }) => {
        return {
          url: 'articles',
          params: {
            limit: 10,
            offset: page * 10,
            author,
          },
        };
      },
    }),
    getPopularTags: builder.query<PopularTagsArr, void>({
      query: () => {
        return {
          url: `tags`,
        };
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetAuthorPostsQuery,
  useGetPopularTagsQuery,
} = postsApi;
