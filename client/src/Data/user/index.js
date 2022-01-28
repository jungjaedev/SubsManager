import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from '../store';
import { updateMenuAction } from '../manager';

export const user = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    newUserInfo: {
      account: '',
      email: '',
      password: '',
      passwordCheck: '',
      languageId: '',
      currencyId: '',
    },
    userInfo: {
      id: '',
      account: '',
      email: '',
      languageId: '',
      currencyId: '',
    },
  },
  reducers: {
    updateIsLoggedInAction: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    updateNewUserInfoAction: (state, action) => {
      state.newUserInfo = action.payload;
    },
    resetNewUserInfoAction: (initialState, state, action) => {
      state.newUserInfo = { ...initialState.newUserInfo };
    },
    updateUserInfoAction: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { updateNewUserInfoAction, updateUserInfoAction, updateIsLoggedInAction, resetNewUserInfoAction } = user.actions;

export const newUserInfo = state => state.user.newUserInfo;
export const userInfo = state => state.user.userInfo;
export const isLoggedIn = state => state.user.isLoggedIn;

export const saveNewUserFuction = () => {
  return (dispatch, getState) => {
    const userInfo = getState().user.newUserInfo;
    axios
      .post(`${URL}/user/signup`, userInfo, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .then(response => {
        dispatch(updateMenuAction('signIn'));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export default user.reducer;
