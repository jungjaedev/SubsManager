import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from '../store';

export const manager = createSlice({
  name: 'manager',
  initialState: {
    activeMenu: 'main',
    previousMenu: '',
    currency: {},
    language: {},
    category: {},
    type: {},
    product: {},
    period: {},
  },
  reducers: {
    updateMenuAction: (state, action) => {
      console.log(action.payload);
      state.previousMenu = state.activeMenu;
      state.activeMenu = action.payload;
    },
    updateAllDataAction: (state, action) => {
      state[action.payload.type_name] = action.payload.data;
    },
  },
});

export const { updateMenuAction, updateAllDataAction } = manager.actions;

export const activeMenu = state => state.manager.activeMenu;
export const previousMenu = state => state.manager.previousMenu;

export const currency = state => state.manager.currency;
export const language = state => state.manager.language;
export const type = state => state.manager.type;
export const category = state => state.manager.category;
export const product = state => state.manager.product;
export const period = state => state.manager.period;

export const getAllFunction = type_name => {
  return async dispatch => {
    let newData = {};
    await axios
      .get(`${URL}/${type_name}`, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .then(response => {
        newData = { type_name: type_name, data: response.data };
      });
    return dispatch(updateAllDataAction(newData));
  };
};

export default manager.reducer;
