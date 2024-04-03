import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { postsApi } from '../api/postsApi';
import { profileApi } from '../api/profileApi';
import { authApi } from '../api/authApi';
import { authSlice } from './service/authSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [authSlice.name],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [postsApi.reducerPath]: postsApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [authSlice.name]: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(postsApi.middleware, profileApi.middleware, authApi.middleware),
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//gg
