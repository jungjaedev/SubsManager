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
    modalIsOpen: false,
  },
  reducers: {
    updateUserProductInfoAction: (state, action) => {
      console.log(action.payload);
      state.productInfo[action.payload.key] = action.payload.value;
    },
    updateAllDataAction: (state, action) => {
      state.userProductList = action.payload;
    },
    updateModalIsOpenAction: (state, action) => {
      state.modalIsOpen = action.payload;
    },
  },
});

export const { updateUserProductInfoAction, updateAllDataAction, updateModalIsOpenAction } = userProduct.actions;

export const productInfo = state => state.userProduct.productInfo;
export const userProductList = state => state.userProduct.userProductList;
export const modalIsOpen = state => state.userProduct.modalIsOpen;

export const updateUserProductFuction = () => {
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
        dispatch(updateModalIsOpenAction(false));
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
