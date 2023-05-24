import * as App from '../../shared/services/App/notices';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllNotices = createAsyncThunk(
  'notice/fetch-all',
  async (_, thunkAPI) => {
    try {
      const data = await App.getAllNotices();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

// для отримання одного оголошення по id
export const fetchNoticeById = createAsyncThunk(
  'notices/fetchNoticeById',
  async (_id, { rejectWithValue }) => {
    try {
      const result = await App.getNoticesById(_id);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const fetchAddNotice = createAsyncThunk(
  'notice/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await App.addNotice(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchDeleteNotice = createAsyncThunk(
  'notice/delete',
  async (_id, { rejectWithValue }) => {
    try {
      await App.deleteNotice(_id);
      return _id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchNoticesByCategory = createAsyncThunk(
  'notices/category',
  async ({ categoryName, query, page }, { rejectWithValue }) => {
    try {
      const data = await App.getNoticesByCategory(categoryName, query, page);
      return { data, category: categoryName };
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
export const fetchNoticesByOwn = createAsyncThunk(
  'notices/own',
  async ({ query, page }, { rejectWithValue }) => {
    try {
      const data = await App.getNoticesByOwn(query, page);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchAllFavoriteNotices = createAsyncThunk(
  'notices/all-favorite',
  async ({ query, page }, { rejectWithValue }) => {
    try {
      const data = await App.getAllFavoriteNotices(query, page);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
// для додавання оголошення фаворита
export const fetchAddToFavorite = createAsyncThunk(
  'notices/add-favorite',
  async (_id, { rejectWithValue }) => {
    try {
      const data = await App.addToFavoriteNotices(_id);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
// для видалення оголошення фаворита
export const fetchRemoveFromFavorite = createAsyncThunk(
  'notices/remove-favorite',
  async (_id, { rejectWithValue }) => {
    try {
      const data = await App.removeFromFavoriteNotices(_id);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
