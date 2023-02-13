import { createSlice } from '@reduxjs/toolkit';

const initialState = { active: false };

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    open: (state) => {
      state.active = !state.active;
    },
  },
})

export const { open } = menuSlice.actions;

export default menuSlice.reducer;