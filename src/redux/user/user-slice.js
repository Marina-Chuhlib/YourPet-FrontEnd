import { createSlice } from '@reduxjs/toolkit';

import {
  fetchUser,
  fetchUpdateUser,
  fetchUpdateAvatar,
  fetchDeleteUserPet,
} from './user-operations';

const initialState = {
  pets: [{}],
  user: {
    name: '',
    email: '',
    birthday: '',
    phone: '',
    city: '',
    imageURL: '',
  },

  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchUpdateUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUpdateUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user.user = user;
        state.error = null;
      })
      .addCase(fetchUpdateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchUpdateAvatar.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUpdateAvatar.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user.user = user;
        state.error = null;
      })
      .addCase(fetchUpdateAvatar.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchDeleteUserPet.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchDeleteUserPet.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const index = state.user.pets.findIndex(pet => pet._id === payload);
        state.user.pets.splice(index, 1);
      })
      .addCase(fetchDeleteUserPet.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default userSlice.reducer;
