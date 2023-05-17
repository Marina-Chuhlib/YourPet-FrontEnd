import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    keyword: "",
  },
  reducers: {
    setKeyword: (state, { payload }) => {
      state.keyword = payload;
    },
  },
});

export const { setKeyword } = searchSlice.actions;
export default searchSlice.reducer;
