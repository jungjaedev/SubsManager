import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from '../store';

export const userProduct = createSlice({
  name: 'userProduct',
  initialState: {
    productInfo: {
      product: {},
      type: {},
      start_date: new Date(),
      // end_date: '',
      auto_renew: {},
      billing_cycle: 1,
      period: {},
      cost: '',
      currency: {},
    },
    userProductList: [],
  },
  reducers: {
    updateUserProductInfoAction: (state, action) => {
      console.log(action.payload);
      state.productInfo[action.payload.key] = action.payload.value;
    },
    updateAllDataAction: (state, action) => {
      state.userProductList = action.payload;
    },
  },
});

export const { updateUserProductInfoAction, updateAllDataAction } = userProduct.actions;

export const productInfo = state => state.userProduct.productInfo;
export const userProductList = state => state.userProduct.userProductList;

export const updateUserFuction = () => {
  return (dispatch, getState) => {
    const newProductInfo = getState().userProduct.productInfo;
    axios
      .post(`${URL}/userProduct/`, newProductInfo, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getUserProductFuction = () => {
  return (dispatch, getState) => {
    axios
      .get(`${URL}/userProduct/`, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .then(response => {
        const newData = response.data;
        dispatch(updateAllDataAction(newData));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export default userProduct.reducer;
