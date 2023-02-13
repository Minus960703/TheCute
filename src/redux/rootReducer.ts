import { createWrapper } from 'next-redux-wrapper'
import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import modalReducer from './modalReducer';

// const rootReducer = combineReducers({
//   modalReducer,
// });

// export default rootReducer;

const rootStore = () => (
  configureStore({
    reducer: {
      modal: modalReducer,
    },
  })
)

export type Appstore = ReturnType<typeof rootStore>;
export type Appstate = ReturnType<Appstore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  Appstate,
  unknown,
  Action
>;

export const wrapper = createWrapper<Appstore>(rootStore);