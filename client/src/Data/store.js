import { configureStore } from '@reduxjs/toolkit';
import manager from './manager';
import pages from './pages';
import user from './user';
import authentication from './authentication';
import userProduct from './userProduct';

export const URL = 'http://localhost:8080';

export const store = configureStore({
  reducer: {
    manager: manager,
    pages: pages,
    user: user,
    authentication: authentication,
    userProduct: userProduct,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
