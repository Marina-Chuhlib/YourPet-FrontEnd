import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/services/App/app';

export const register = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.register(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
