import { createSlice } from '@reduxjs/toolkit';
import { MenuStateType } from '../types/ReducerStateType';

const initialState: MenuStateType = { active: false };

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