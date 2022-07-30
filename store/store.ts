import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import productReducer from './productListSlice';
import productDetailReducer from './productDetailSlice';
import { Action } from 'redux';
// import productReducer from './productListSlice

const makeStore = () => configureStore({
  reducer: {
    product: productReducer,
    detail: productDetailReducer
  },
  devTools: true,
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
