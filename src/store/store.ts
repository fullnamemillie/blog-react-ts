import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { postsApi } from '../api/postsApi';
import { profileApi } from '../api/profileApi';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware, profileApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
