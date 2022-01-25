import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from '../store';
import { updateMenuAction } from '../manager';

export const user = createSlice({
  name: 'user',
  initialState: {
    newUserInfo: {
      account: '',
      email: '',
      password: '',
      passwordCheck: '',
      languageId: '',
      currencyId: '',
    },
  },
  reducers: {
    updateNewUserInfoAction: (state, action) => {
      state.newUserInfo = action.payload;
    },
  },
});

export const { updateNewUserInfoAction } = user.actions;

export const newUserInfo = state => state.user.newUserInfo;

export const saveNewUserFuction = () => {
  return (dispatch, getState) => {
    const userInfo = getState().user.newUserInfo;
    axios
      .post(`${URL}/user/signup`, userInfo, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .then(response => {
        // console.log(response);
        dispatch(updateMenuAction('signIn'));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export default user.reducer;
