import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './clientSlice';
import cartReducer from './cartSlice'; 
import categoryReducer from '../store/reducers/categoryReducer';

export const store = configureStore({
  reducer: {
    client: clientReducer,
    cart: cartReducer,
    categories: categoryReducer,
  },
});