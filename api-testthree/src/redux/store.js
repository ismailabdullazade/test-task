import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './ProductSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
