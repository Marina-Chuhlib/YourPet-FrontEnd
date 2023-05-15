import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './auth-operations';

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
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        const { user, token } = payload;
        state.isLoading = false;
        state.user = user;
        state.token = token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(login.pending, state => {
        state.isLoading  = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        const { user, token } = payload;
        state.isLoading  = false;
        state.user = user;
        state.token = token;
        state.isLogin = true;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading  = false;
        state.error = payload;
      })
      .addCase(logout.pending, (state) => {
          state.isLoading = true;
          state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
          state.isLoading = false;
          state.user = {};
          state.token = "";
          state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state, {payload}) => {
          state.isLoading = false;
          state.error = payload;
      })   
  },
});

export default authSlice.reducer;
