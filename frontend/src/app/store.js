// store.js

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import cartReducer from '../features/cart/cartSlice';
import productsReducer from '../features/product/productSlice';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import { persistStore, persistReducer } from 'redux-persist';
import {thunk} from 'redux-thunk'; // ✅ Fix: use correct import (no curly braces)

// Create persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'cart'], // Only auth and cart will be persisted
};

// Combine all reducers
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  products: productsReducer, // Not persisted
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // redux-persist requires this to be false
    }).concat(thunk), // ✅ Fix: use concat to add custom middleware
});

export const persistor = persistStore(store);
export default store;
