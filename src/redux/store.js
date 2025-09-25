import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './clientSlice';
import cartReducer from './cartSlice'; 

export const store = configureStore({
  reducer: {
    client: clientReducer,
    cart: cartReducer,
  },
});