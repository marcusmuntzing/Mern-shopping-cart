import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers

import {cartReducer} from "./reducers/cartReducers"
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducers';


const rootReducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initialState = {
  cart: {
    cartItems: cartFromLocalStorage,
  },
};


const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: [...middleware],
  devTools: composeWithDevTools(),
});


export default store;
