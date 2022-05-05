import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from '../store';

export const userProduct = createSlice({
  name: 'userProduct',
  initialState: {
    productInfo: {
      product: {},
      type: {},
      start_date: '',
      end_date: '',
      auto_renew: {},
      billing_cycle: 1,
      period: {},
      cost: '',
      currency: {},
    },
  },
  reducers: {
    updateUserProductInfoAction: (state, action) => {
      console.log(action.payload);
      state.productInfo = action.payload;
    },
  },
});

export const { updateUserProductInfoAction } = userProduct.actions;

export const productInfo = state => state.userProduct.productInfo;

export default userProduct.reducer;
