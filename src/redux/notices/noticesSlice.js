import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllNotices,
  fetchAddNotice,
  fetchDeleteNotice,
  fetchNoticesByCategory,
  fetchNoticesByOwn,
  fetchAllFavoriteNotices,
} from './noticesOperations';

const initialState = {
  items: [],
  category: null,
  loading: false,
  error: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllNotices.pending, store => {
        store.loading = true;
      })
      .addCase(fetchAllNotices.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchAllNotices.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchAddNotice.pending, store => {
        store.loading = true;
      })
      .addCase(fetchAddNotice.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(fetchAddNotice.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchDeleteNotice.pending, store => {
        store.loading = true;
      })
      .addCase(fetchDeleteNotice.fulfilled, (store, { payload }) => {
        store.loading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(fetchDeleteNotice.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchNoticesByCategory.pending, store => {
        store.loading = true;
        store.items = [];
      })
      .addCase(fetchNoticesByCategory.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = [...payload.data];
        store.category = payload.category;
      })
      .addCase(fetchNoticesByCategory.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchNoticesByOwn.pending, store => {
        store.loading = true;
        store.items = [];
        store.category = null;
      })
      .addCase(fetchNoticesByOwn.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = [...payload];
      })
      .addCase(fetchNoticesByOwn.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchAllFavoriteNotices.pending, store => {
        store.loading = true;
        store.items = [];
        store.category = null;
      })
      .addCase(fetchAllFavoriteNotices.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = [...payload];
      })
      .addCase(fetchAllFavoriteNotices.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export default noticesSlice.reducer;
