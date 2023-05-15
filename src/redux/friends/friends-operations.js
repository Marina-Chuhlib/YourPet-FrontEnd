import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/services/App/friends';

export const fetchFriends = createAsyncThunk(
  'friends/fetchFriends',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.getFriends();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
