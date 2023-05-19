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
  async (id, { rejectWithValue }) => {
    try {
      await App.deleteNotice(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchNoticesByCategory = createAsyncThunk(
  'notices/category',
  async ({ categoryName, query }, { rejectWithValue }) => {
    try {
      const data = await App.getNoticesByCategory(categoryName, query);
      return { data, category: categoryName };
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
export const fetchNoticesByOwn = createAsyncThunk(
  'notices/own',
  async (query, { rejectWithValue }) => {
    try {
      const data = await App.getNoticesByOwn(query);
      console.log(data);
      return data.notices;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchAllFavoriteNotices = createAsyncThunk(
  'notices/all-favorite',
  async (query, { rejectWithValue }) => {
    try {
      const data = await App.getAllFavoriteNotices(query);
      return data.notices;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
