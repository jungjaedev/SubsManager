import { configureStore } from '@reduxjs/toolkit';
import manager from './manager';
import pages from './pages';
import user from './user';

export const URL = 'http://localhost:8080';

export const store = configureStore({
  reducer: {
    manager: manager,
    pages: pages,
    user: user,
  },
});
