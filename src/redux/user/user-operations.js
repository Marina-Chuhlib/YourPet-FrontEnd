import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/services/App/User/user';

export const fetchUser = createAsyncThunk('user/fetch', async (_, thunkAPI) => {
  try {
    const state = await thunkAPI.getState();
    const persistedToken = state.auth.token;
    const data = await api.getUser(persistedToken);
    return data;
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(response.data);
  }
});

export const fetchUpdateUser = createAsyncThunk(
  'user/update',
  async ({ token, fieldToUpdate, newValue }, { rejectWithValue }) => {
    try {
      const result = await api.updateUserInf(fieldToUpdate, newValue, token);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUpdateAvatar = createAsyncThunk(
  'user/updateAvatar',
  async ({ token, formData }, { rejectWithValue }) => {
    try {
      const result = await api.updateAvatar(token, formData);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteUserPet = createAsyncThunk(
  'user/deleteUserPet',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteUserPet(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
