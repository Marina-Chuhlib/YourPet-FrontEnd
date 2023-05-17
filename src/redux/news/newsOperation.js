import * as App from '../../shared/services/App/news';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllNews = createAsyncThunk(
  'news/fetch-all',
  async (_, thunkAPI) => {
    try {
      const data = await App.getAllNews();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
export const fetchFilteredNews = createAsyncThunk(
  'news/filteredNews',
  async (query, thunkAPI) => {
    try {
      const data = await App.getFilteredNews(query);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
