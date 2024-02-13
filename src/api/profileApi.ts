import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProfileContentData } from '../interfaces/interfaces';

interface ProfileContentInt {
  username: string;
}

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.realworld.io/api/',
  }),
  endpoints: (builder) => ({
    getProfile: builder.query<ProfileContentData, ProfileContentInt>({
      query: ({ username }) => ({
        url: `/profiles/${username}`,
      }),
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;
