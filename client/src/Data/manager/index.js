import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from '../store';

export const manager = createSlice({
  name: 'manager',
  initialState: {
    activeMenu: 'main',
    previousMenu: '',
    currency: '',
    language: '',
    type: '',
    category: '',
    product: '',
    period: '',
  },
  reducers: {
    updateMenuAction: (state, action) => {
      console.log(action.payload);
      state.previousMenu = state.activeMenu;
      state.activeMenu = action.payload;
    },
    getAllLanguageAction: (state, action) => {
      getAllLanguageFuction();
    },
    getAllCurrencyAction: (state, action) => {
      getAllCurrencyFuction();
    },
  },
});

export const { updateMenuAction, getAllLanguageAction, getAllCurrencyAction } = manager.actions;

export const activeMenu = state => state.manager.activeMenu;
export const previousMenu = state => state.manager.previousMenu;

export const currency = state => state.manager.currency;
export const language = state => state.manager.language;
export const type = state => state.manager.type;
export const category = state => state.manager.category;
export const product = state => state.manager.product;
export const period = state => state.manager.period;

export const getAllLanguageFuction = () => {
  return axios.get(`${URL}/language`, { headers: { 'Content-Type': 'application/json' }, withCredentials: true }).then(response => {
    console.log(11111231231232, response);
  });
};

export const getAllCurrencyFuction = () => {
  return axios.get(`${URL}/currency`, { headers: { 'Content-Type': 'application/json' }, withCredentials: true }).then(response => {
    console.log('123123CurrencyFuction', response);
  });
};

export default manager.reducer;
