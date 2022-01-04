import { configureStore } from '@reduxjs/toolkit';
import manager from './manager';
import pages from './pages';

export const store = configureStore({
  reducer: {
    manager: manager,
    pages: pages,
  },
});
