import { createSlice } from '@reduxjs/toolkit';

export const savedList = createSlice({
  name: 'savedList',
  initialState: {
    activeMenu: 'hashtag',
  },
  reducers: {
    updateMenuAction: (state, action) => {
      state.activeMenu = action.payload;
    },
  },
});

export const { updateMenuAction } = savedList.actions;

export const activeMenu = state => state.pages.savedList.activeMenu;

export default savedList.reducer;
