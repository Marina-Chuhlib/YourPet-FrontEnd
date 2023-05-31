import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  current,
  fetchUser,
  fetchUpdateUser,
  fetchUpdateAvatar,
  fetchDeleteUserPet,
} from './auth-operations';

import {
  fetchAddToFavorite,
  fetchRemoveFromFavorite,
  fetchAllFavoriteNotices,
} from 'redux/notices/noticesOperations';
const initialState = {
  user: {
    name: null,
    email: null,
    birthday: '',
    phone: '',
    city: '',
    imageURL: '',
    favorite: [],
    itemsFavorite: [],
  },
  pets: [{}],
  registrationSuccessful: false,
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
        const { user, accessToken } = payload;
        state.isLoading = false;
        state.user = user;
        state.registrationSuccessful = true;
        state.token = accessToken;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(login.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        const { user, accessToken } = payload;
        state.isLoading = false;
        state.user = user;
        state.token = accessToken;
        state.isLoggedIn = true;
        state.user.favorite = user.favorite;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(current.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        const { favorite } = payload;
        state.isLoading = false;
        state.registrationSuccessful = false;
        state.user = payload;
        state.isLoggedIn = true;
        state.user.favorite = favorite;
      })
      .addCase(current.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.token = '';
        state.error = payload;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.user = {};
        state.registrationSuccessful = false;
        state.token = null;
        state.isLoggedIn = false;
        state.user.favorite = [];
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        const { user, pets } = payload;
        state.isLoading = false;
        state.user = user;
        state.pets = pets;
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
        state.registrationSuccessful = false;
        state.user = user;
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
        state.registrationSuccessful = false;
        state.user = user;
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
        state.registrationSuccessful = false;
        const index = state.pets.findIndex(pet => pet._id === payload);
        state.pets.splice(index, 1);
      })
      .addCase(fetchDeleteUserPet.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchAddToFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAddToFavorite.fulfilled, (state, { payload }) => {
        const { id } = payload;
        state.user.favorite.push(id);
        state.user.itemsFavorite = [id];
        // state.user.itemsFavorite = state.user.favorite;
      })
      .addCase(fetchAddToFavorite.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchAllFavoriteNotices.pending, state => {
        state.isLoading = true;
        state.user.itemsFavorite = [];
      })
      .addCase(fetchAllFavoriteNotices.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.itemsFavorite = payload.notices;
        // store.page = Number(payload.page);
        // store.totalPages = payload.totalPages;
      })
      .addCase(fetchAllFavoriteNotices.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchRemoveFromFavorite.pending, state => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(fetchRemoveFromFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const favoriteList = state.user.favorite;
        const itemsFavoriteList = state.user.itemsFavorite;

        if (favoriteList) {
          state.user.favorite = favoriteList.filter(id => id !== payload.id);
        }

        if (itemsFavoriteList) {
          const indexItemFavorite = itemsFavoriteList.findIndex(({ _id }) => {
            return _id === payload.id;
          });
          if (indexItemFavorite !== -1) {
            itemsFavoriteList.splice(indexItemFavorite, 1);
          }
        }
      })

      .addCase(fetchRemoveFromFavorite.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
