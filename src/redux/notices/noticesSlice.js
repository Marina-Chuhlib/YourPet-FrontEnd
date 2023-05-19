import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllNotices,
  fetchNoticeById,
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
  item: {},
  owner: {},
  page: 0,
  totalPages: 0,
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
        store.items = payload.data.notices;
      })
      .addCase(fetchAllNotices.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchNoticeById.pending, store => {
        store.loading = true;
      })
      .addCase(fetchNoticeById.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.item = payload;
        store.owner = payload.owner;
      })
      .addCase(fetchNoticeById.rejected, (store, { payload }) => {
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
        store.items = [...payload.data.notices];
        store.category = payload.category;
        store.page = Number(payload.data.page);
        store.totalPages = payload.data.totalPages;
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
        store.items = [...payload.notices];
        store.page = Number(payload.notices.page);
        store.totalPages = payload.notices.totalPages;
      })
      .addCase(fetchNoticesByOwn.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload.notices;
      })
      .addCase(fetchAllFavoriteNotices.pending, store => {
        store.loading = true;
        store.items = [];
        store.category = null;
      })
      .addCase(fetchAllFavoriteNotices.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = [...payload.notices];
        store.page = Number(payload.notices.page);
        store.totalPages = payload.notices.totalPages;
      })
      .addCase(fetchAllFavoriteNotices.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export default noticesSlice.reducer;
