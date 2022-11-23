import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
// what should state look like after adding one product

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state[action.payload] = state[action.payload] || 1;
    },
    decrementByAmount: (state, action) => {
      state[action.payload] = (state[action.payload] || 1) - 1;
    },
    incrementByAmount: (state, action) => {
      state[action.payload] = (state[action.payload] || 0) + 1;
    },
    deleteFromCart: (state, action) => {
      delete state[action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  decrementByAmount,
  incrementByAmount,
  deleteFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
