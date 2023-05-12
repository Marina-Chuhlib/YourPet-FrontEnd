import { createSlice } from '@reduxjs/toolkit';
import { register } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  isLoading: false,
  token: null,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.user.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(register.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const authReducer = authSlice.reducer;
