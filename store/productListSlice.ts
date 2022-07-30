import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState, AppThunk } from './store';

export const ProductSlice = createSlice({
  name: 'product',

  initialState: {
    data: []
  },

  reducers: {
    setProductData: (state: any, action: any) => {
      state.data = action.payload;
    }
  },

  extraReducers: {
    [HYDRATE]: (state: any, action: any) => {
      // console.log('HYDRATE', action.payload);

      if (!action.payload.product.data) {
        return state;
      }

      state.data = action.payload.product.data;
    }
  }
});

export const { setProductData } = ProductSlice.actions;

export const selectProduct = (state: AppState) => state.product;

export const fetchProduct =
  (param: any): AppThunk =>
    async (dispatch: any) => {
      const timeoutPromise = (timeout: number) => new Promise(resolve => setTimeout(resolve, timeout));
      const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`);
      console.log(param, "lop");
      const data = await response.json();
      console.log(response, "fecth product");

      await timeoutPromise(1000);

      dispatch(
        setProductData(data)
      );
    };


export default ProductSlice.reducer;