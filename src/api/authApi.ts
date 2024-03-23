import {
  SignInReqUser,
  SignInRes,
  SignUpRes,
} from './../interfaces/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SignUpReqUser } from '../interfaces/interfaces';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.realworld.io/api/',
  }),
  endpoints: (builder) => ({
    signUp: builder.query<SignUpRes, SignUpReqUser>({
      query: (args) => ({
        url: `/users`,
        method: 'post',
        body: {
          user: args,
        },
      }),
    }),
    signIn: builder.query<SignInRes, SignInReqUser>({
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
