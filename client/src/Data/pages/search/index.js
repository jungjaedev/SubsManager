import { createSlice } from '@reduxjs/toolkit';

export const search = createSlice({
  name: 'search',
  initialState: {
    searchWord: 'instagram'
  },
  reducers: {
    updateSearchWordAction: (state, action) => {
      state.searchWord = action.payload;
    },
  },
});

export const { updateSearchWordAction } = search.actions;
export const searchActions = search.actions;

export const searchState = state => state.pages.search;

export default search.reducer;
