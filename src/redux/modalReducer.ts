import { createSlice } from '@reduxjs/toolkit';

const initialState = { active: false };

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state) => {
      state.active = !state.active;
    },
  },
})

export const { open } = modalSlice.actions;

export default modalSlice.reducer;