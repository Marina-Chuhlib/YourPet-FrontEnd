import * as App from '../../shared/services/App/news';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllNews = createAsyncThunk(
  'news/fetch-all',
  async (_, thunkAPI) => {
    try {
      const data = await App.getAllNews();
      //   console.log('news', data);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
