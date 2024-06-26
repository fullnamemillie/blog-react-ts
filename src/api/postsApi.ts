import { CommentsData, SpecificArticleData } from './../interfaces/interfaces';
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

interface SpecificArticleInt {
  slug: string;
}

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.realworld.io/api/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<MainContentData, MainContentInt>({
      query: ({ page, tag }) => {
        return {
          url: `/articles/feed`,
          params: {
            limit: 10,
            offset: page * 10,
            tag,
          },
        };
      },
    }),
    getYourPosts: builder.query<MainContentData, MainContentInt>({
      query: ({ page, tag }) => {
        return {
          url: `/articles`,
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
          url: `/articles`,
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
          url: `/tags`,
        };
      },
    }),
    getSpecificArticle: builder.query<SpecificArticleData, SpecificArticleInt>({
      query: ({ slug }) => {
        return {
          url: `/articles/${slug}`,
        };
      },
    }),
    getComments: builder.query<CommentsData, SpecificArticleInt>({
      query: ({ slug }) => {
        return {
          url: `/articles/${slug}/comments`,
        };
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetYourPostsQuery,
  useGetAuthorPostsQuery,
  useGetPopularTagsQuery,
  useGetSpecificArticleQuery,
  useGetCommentsQuery,
} = postsApi;
