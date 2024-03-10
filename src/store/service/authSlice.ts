import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SignUpResUser } from '../../interfaces/interfaces';

interface AuthInt {
  user: SignUpResUser | null;
}

const initialState: AuthInt = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SignUpResUser>) => {
      state.user = {
        ...action.payload,
      };
    },
    logOutUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logOutUser } = authSlice.actions;
