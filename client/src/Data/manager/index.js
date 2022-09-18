import { ContactsOutlined } from '@material-ui/icons';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from '../store';

export const manager = createSlice({
  name: 'manager',
  initialState: {
    activeMenu: 'main',
    previousMenu: '',
    currency: [],
    language: [],
    category: {},
    type: [],
    product: [],
    period: [],
    autoRenew: [
      { id: 1, name: 'yes', value: true, display_name: 'Yes' },
      { id: 2, name: 'no', value: false, display_name: 'No' },
    ],
    productFiltered: [],
    productSearchValue: '',
  },
  reducers: {
    updateMenuAction: (state, action) => {
      state.previousMenu = state.activeMenu;
      state.activeMenu = action.payload;
    },
    updateAllDataAction: (state, action) => {
      state[action.payload.type_name] = action.payload.data;
      state[`${action.payload.type_name}Filtered`] = action.payload.data;
    },
    updateFilteredListAction: (state, action) => {
      state[`${action.payload.type}Filtered`] = action.payload.payload;
    },
    updateSearchValueAction: (state, action) => {
      state[`${action.payload.type}SearchValue`] = action.payload.payload;
    }
  },
});

export const { updateMenuAction, updateAllDataAction, updateFilteredListAction, updateSearchValueAction } = manager.actions;

export const activeMenu = state => state.manager.activeMenu;
export const previousMenu = state => state.manager.previousMenu;

export const currency = state => state.manager.currency;
export const language = state => state.manager.language;
export const type = state => state.manager.type;
export const category = state => state.manager.category;
export const product = state => state.manager.product;
export const period = state => state.manager.period;
export const autoRenew = state => state.manager.autoRenew;

export const getAllFunction = type_name => {
  return async dispatch => {
    let newData = {};
    await axios
      .get(`${URL}/${type_name}`, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      .then(response => {
        newData = { type_name: type_name, data: response.data };
        return dispatch(updateAllDataAction(newData));
      });
  };
};

export const searchFunction = (name, searchValue) => {
  return (dispatch, getState) => {
    const list = getState().manager[name];
    const filteredList = list.filter(item => item.name.includes(searchValue) || item.display_name.includes(searchValue))
    dispatch(updateSearchValueAction({ type: name, payload: searchValue }));
    dispatch(updateFilteredListAction({ type: name, payload: filteredList }))
  }
}

export default manager.reducer;
