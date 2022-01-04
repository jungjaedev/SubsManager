import { createSlice } from '@reduxjs/toolkit';

export const savedList = createSlice({
  name: 'savedList',
  initialState: {
    activeMenu: 'hashtag',
  },
  reducers: {
    updateMenuAction: (state, action) => {
      console.log(action.payload);
      state.activeMenu = action.payload;
    },
  },
});

export const { updateMenuAction } = savedList.actions;

export const activeMenu = state => state.manager.activeMenu;

export default savedList.reducer;
