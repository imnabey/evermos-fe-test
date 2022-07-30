import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState, AppThunk } from './store';

export const ProductDetailSlice = createSlice({
  name: 'detail',

  initialState: {
    data: {},
  },

  reducers: {
    setProductDetailData: (state: any, action: any) => {
      state.data = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state: any, action: any) => {
      if (!action.payload.detail.data) {
        return state;
      }

      state.data = action.payload.detail.data;
    },
  },
});

export const { setProductDetailData } = ProductDetailSlice.actions;

export const selectProduct = (state: AppState) => state.detail;

export const fetchProductDetail = (param: any): AppThunk => async (dispatch: any) => {
  const timeoutPromise = (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout));
  const response = await fetch(`https://cors-anywhere.herokuapp.com/http://makeup-api.herokuapp.com/api/v1/products/${param}.json`);
  const data = await response.json();

  await timeoutPromise(1000);

  dispatch(
    setProductDetailData(data),
  );
};

export default ProductDetailSlice.reducer;
