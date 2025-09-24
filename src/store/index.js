import { createStore, applyMiddleware, combineReducers } from 'redux';

import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import clientReducer from './reducers/clientReducer';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;