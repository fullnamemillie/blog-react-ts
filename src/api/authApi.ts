import { SignInReqUser } from './../interfaces/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  SignInResUser,
  SignUpReqUser,
  SignUpResUser,
} from '../interfaces/interfaces';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.realworld.io/api/',
  }),
  endpoints: (builder) => ({
    signUp: builder.query<SignUpResUser, SignUpReqUser>({
      query: (args) => ({
        url: `/users`,
        method: 'post',
        body: {
          user: args,
        },
      }),
    }),
    signIn: builder.query<SignInResUser, SignInReqUser>({
      query: (args) => ({
        url: `/users/login`,
        method: 'post',
        body: {
          user: args,
        },
      }),
    }),
  }),
});

export const { useLazySignUpQuery, useLazySignInQuery } = authApi;
