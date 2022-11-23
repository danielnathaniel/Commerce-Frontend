import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
// what should state look like after adding one product

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state[action.payload] = (state[action.payload] || 0) + 1;
    },
    decrementByAmount: (state, action) => {
      state[action.payload] = (state[action.payload] || 1) - 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount, decrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;
