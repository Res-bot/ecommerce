import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const uniqueId = `${action.payload._id}-${Date.now()}`;
      const newItem = { ...action.payload, cartId: uniqueId };
      state.items.push(newItem);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(
        (p) => p.cartId !== action.payload && p._id !== action.payload
      );
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
