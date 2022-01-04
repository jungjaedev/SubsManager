import { configureStore } from '@reduxjs/toolkit';
import manager from './manager';

export const store = configureStore({
  reducer: {
    manager: manager,
  },
});
