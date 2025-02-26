import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.cart.push(action.payload);
    },
    remove: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clear: (state) => {
      state.cart = [];
    },
  },
});

export const { add, remove, clear } = CartSlice.actions;
export default CartSlice.reducer;
