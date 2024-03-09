import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SignUpReqUser, SignUpResUser } from '../interfaces/interfaces';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.realworld.io/api/',
  }),
  endpoints: (builder) => ({
    signUp: builder.query<SignUpResUser, SignUpReqUser>({
      query: (args) => ({
        url: '/users',
        method: 'post',
        body: {
          user: args,
        },
      }),
    }),
  }),
});

export const { useLazySignUpQuery } = authApi;
