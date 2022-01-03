import { configureStore } from '@reduxjs/toolkit';
import Manager from './Manager';

export const store = configureStore({
  reducer: {
    manager: Manager,
  },
});
