import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    toggler: false,
  },
  reducers: {
    toggleFilter: (state) => {
      state.toggler = true;
    },
    revertFilter: (state) => {
      state.toggler = false;
    },
  },
});

export const { toggleFilter, revertFilter } = toggleSlice.actions;
export const toggleReducer = toggleSlice.reducer;
