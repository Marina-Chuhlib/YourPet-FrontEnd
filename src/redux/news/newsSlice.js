import { createSlice } from '@reduxjs/toolkit';

import { fetchAllNews } from './newsOperation';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllNews.pending, state => {
        state.loading = true;
      })
      .addCase(fetchAllNews.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload.news;
      })
      .addCase(fetchAllNews.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});
export default newsSlice.reducer;
