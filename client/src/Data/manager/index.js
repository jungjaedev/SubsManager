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
    // getAllAction: (state, action) => {
    //   console.log(`action.payload : `, action.payload);
    //   getAllFuction(action.payload);
    // },
    updateAllDataAction: (state, action) => {
      console.log(`action : `, action);
      // state[type_name] = data;
    },
  },
});

export const { updateMenuAction, getAllAction, updateAllDataAction } = manager.actions;

export const activeMenu = state => state.manager.activeMenu;
export const previousMenu = state => state.manager.previousMenu;

export const currency = state => state.manager.currency;
export const language = state => state.manager.language;
export const type = state => state.manager.type;
export const category = state => state.manager.category;
export const product = state => state.manager.product;
export const period = state => state.manager.period;

export const getAllFuction = type_name => {
  // console.log(' getAllFuction state : ', state);
  // console.log(' getAllFuction dispatch : ', dispatch);
  return axios.get(`${URL}/${type_name}`, { headers: { 'Content-Type': 'application/json' }, withCredentials: true }).then(response => {
    return response.data;
  });
};

export default manager.reducer;
