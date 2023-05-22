import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllNotices,
  fetchNoticeById,
  fetchAddNotice,
  fetchDeleteNotice,
  fetchNoticesByCategory,
  fetchNoticesByOwn,
  fetchAllFavoriteNotices,
  fetchRemoveFromFavorite,
} from './noticesOperations';

const initialState = {
  items: [],
  category: '',
  loading: false,
  error: null,
  item: {},
  owner: {},
  page: 1,
  totalPages: 1,
  keyword: '',
  itemsFavorite: [],
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
  },
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
        store.item = {};
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
        store.keyword = '';
      })
      .addCase(fetchNoticesByCategory.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchNoticesByOwn.pending, store => {
        store.loading = true;
        store.items = [];
        store.category = '';
      })
      .addCase(fetchNoticesByOwn.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = [...payload.notices];
        store.page = Number(payload.page);
        store.totalPages = payload.totalPages;
      })
      .addCase(fetchNoticesByOwn.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload.notices;
      })
      .addCase(fetchAllFavoriteNotices.pending, store => {
        store.loading = true;
        store.itemsFavorite = [];
        store.category = '';
      })
      .addCase(fetchAllFavoriteNotices.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.itemsFavorite = [...payload.notices];
        store.page = Number(payload.page);
        store.totalPages = payload.totalPages;
      })
      .addCase(fetchAllFavoriteNotices.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchRemoveFromFavorite.pending, store => {
        store.loading = true;
      })
      .addCase(fetchRemoveFromFavorite.fulfilled, (store, { payload }) => {
        // const { user } = payload;
        store.loading = false;
        const index = store.itemsFavorite.findIndex(({ _id }) => {
          return _id === payload.id;
        });
        console.log('index', index);
        if (index !== -1) {
          store.itemsFavorite.splice(index, 1);
        }
      })
      .addCase(fetchRemoveFromFavorite.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export default noticesSlice.reducer;
export const { setKeyword } = noticesSlice.actions;
