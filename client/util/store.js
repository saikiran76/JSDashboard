import { configureStore } from '@reduxjs/toolkit';
import { toggleReducer } from '../util/toggleSlice';

const store = configureStore({
  reducer: {
    toggle: toggleReducer,
  },
});

export default store;
