import { createSlice } from '@reduxjs/toolkit';

export const manager = createSlice({
  name: 'manager',
  initialState: {
    activeMenu: 'main',
    previousMenu: '',
  },
  reducers: {
    selectMenu: (state, action) => {
      console.log(action.payload)
      state.previousMenu = state.activeMenu;
      state.activeMenu = action.payload;
    },
  },
});

export const { selectMenu } = manager.actions;

export const selectActiveMenu = (state) => state.manager.activeMenu;
export const selectPreviousMenu = (state) => state.manager.previousMenu;


export default manager.reducer;
