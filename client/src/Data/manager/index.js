import { createSlice } from '@reduxjs/toolkit';

export const manager = createSlice({
  name: 'manager',
  initialState: {
    activeMenu: 'main',
    previousMenu: '',
  },
  reducers: {
    updateMenuAction: (state, action) => {
      console.log(action.payload);
      state.previousMenu = state.activeMenu;
      state.activeMenu = action.payload;
    },
  },
});

export const { updateMenuAction } = manager.actions;

export const activeMenu = state => state.manager.activeMenu;
export const previousMenu = state => state.manager.previousMenu;

export default manager.reducer;
