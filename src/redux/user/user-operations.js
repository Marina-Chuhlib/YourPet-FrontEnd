import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/services/App/User/user';

export const fetchUser = createAsyncThunk(
  'user/fetch',
  async (token, thunkAPI) => {
    try {
      const data = await api.getUser(token);
      console.log(data.user);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchUpdateUser = createAsyncThunk(
  'user/update',
  async ({ token, fieldToUpdate, newValue }, { rejectWithValue }) => {
    try {
      const result = await api.updateUserInf(fieldToUpdate, newValue, token);
      console.log(token, 'operations');
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

{
  //      condition: (userId, { getState, extra }) => {
  //   const { users } = getState()
  //   const fetchStatus = users.requests[userId]
  //   if (fetchStatus === 'fulfilled' || fetchStatus === 'loading') {
  //     // Already fetched or in progress, don't need to re-fetch
  //     return false
  //   }
  // ===========
  // condition: ({}, { getState }) => {
  //   const { user } = getState();
  // //   const normalizedTitle = title.toLowerCase();
  // //   const normalizedAuthor = author.toLowerCase();
  //   const result = books.items.find(({ title, author }) => {
  //     return (
  //       title.toLowerCase() === normalizedTitle &&
  //       author.toLowerCase() === normalizedAuthor
  //     );
  //   });
  //   if (result) {
  //     alert(`${title}. Author: ${author} is already ixist`);
  //     return false;
  //   }
  // },
}
