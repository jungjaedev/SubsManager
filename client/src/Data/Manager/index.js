import { createSlice } from '@reduxjs/toolkit';

export const Manager = createSlice({
  name: 'manager',
  initialState: {
    activeMenu: 'SavedList',
    previousMenu: '',
  },
  reducers: {
    selectMenu: (state, action) => {
      state.previousMenu = action.activeMenu;
      state.activeMenu = action.payload;
    },
  },
});

export const { selectMenu } = Manager.actions;

export default Manager.reducer;
