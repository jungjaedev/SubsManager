import { createSlice } from '@reduxjs/toolkit';

export const Manager = createSlice({
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
      console.log(state.previousMenu, state.activeMenu)
    },
  },
});

export const { selectMenu } = Manager.actions;

export default Manager.reducer;
