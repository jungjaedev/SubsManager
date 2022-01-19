import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const URL = 'http://localhost:8080';

export const user = createSlice({
  name: 'user',
  initialState: {
    newUserInfo: {
      account: '',
      email: '',
      password: '',
      passwordCheck: '',
    },
  },
  reducers: {
    updateNewUserInfoAction: (state, action) => {
      state.newUserInfo = action.payload;
      // console.log('action.payload: ', action.payload);
    },
    saveNewUserInfoAction: (state, action) => {
      saveNewUserFuction(state.newUserInfo);
    },
  },
});

export const { updateNewUserInfoAction, saveNewUserInfoAction } = user.actions;

export const newUserInfo = state => state.user.newUserInfo;

export const saveNewUserFuction = info => {
  return dispatch => {
    return axios
      .post(`${URL}/user/signup`, info, { headers: { 'Content-Type': 'application/json' }, withCredentials: true })
      .then(response => {
        console.log('1111111', response.data);
        return response.data;
      })
      .then(data => {
        console.log('22222222', data);
        dispatch({
          // type: ADD_FETCHED_DATA,
          payload: data,
        });
      })
      .catch(error => {
        throw error;
      });
  };
};

export default user.reducer;
