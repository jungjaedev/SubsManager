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
    editMode: '',
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
    updateEditModeAction: (state, action) => {
      state.editMode = action.payload;
    },
  },
});

export const { updateNewUserInfoAction, updateUserInfoAction, updateIsLoggedInAction, resetNewUserInfoAction, updateEditModeAction } =
  user.actions;

export const newUserInfo = state => state.user.newUserInfo;
export const userInfo = state => state.user.userInfo;
export const isLoggedIn = state => state.user.isLoggedIn;
export const editMode = state => state.user.editMode;

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

export const updateUserFuction = () => {
  return (dispatch, getState) => {
    const userId = getState().user.userInfo.id;
    const userInfo = getState().user.newUserInfo;
    axios
      .put(`${URL}/user/${userId}`, userInfo, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .then(response => {
        dispatch(updateNewUserInfoAction(response.data));
        dispatch(updateUserInfoAction(response.data));
        dispatch(updateEditModeAction(''));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export default user.reducer;
