import * as App from '../../shared/services/App/news';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllNews = createAsyncThunk(
  'news/fetch-all',
  async (page, thunkAPI) => {
    try {
      const data = await App.getAllNews(page);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
export const fetchFilteredNews = createAsyncThunk(
  'news/filteredNews',
  async ({ query, page }, thunkAPI) => {
    try {
      const data = await App.getFilteredNews(query, page);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
