import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: false,
  type: '',
  content: ''
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    close: (state) => {
      state.active = !state.active;
    },
    open: (state, action) => {
      state.active = !state.active;
      state.type = action.payload.type;
      state.content = action.payload.content;
    },
  },
})

export const { close, open } = modalSlice.actions;

export default modalSlice.reducer;