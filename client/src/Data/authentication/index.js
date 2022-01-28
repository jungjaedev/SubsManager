import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from '../store';
import { updateMenuAction } from '../manager';
import { updateUserInfoAction, updateIsLoggedInAction } from '../user';
import { getAllFunction } from '../manager';

export const authentication = createSlice({
  name: 'authentication',
  initialState: {
    loginInfo: {
      account: '',
      password: '',
    },
  },
  reducers: {
    updateloginInfoAction: (state, action) => {
      state.loginInfo = action.payload;
    },
  },
});

export const { updateloginInfoAction } = authentication.actions;

export const loginInfo = state => state.authentication.loginInfo;

export const loginUserFuction = () => {
  return (dispatch, getState) => {
    const userInfo = getState().authentication.loginInfo;
    axios
      .post(`${URL}/auth/login`, userInfo, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .then(response => {
        dispatch(updateUserInfoAction(response.data.user));
        dispatch(updateIsLoggedInAction(true));
        dispatch(updateMenuAction('main'));
        dispatch(getAllFunction('currency'));
        dispatch(getAllFunction('language'));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export default authentication.reducer;
