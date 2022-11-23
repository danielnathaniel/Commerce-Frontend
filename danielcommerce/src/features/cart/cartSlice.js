import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/api";
const initialState = {};
// what should state look like after adding one product

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // zero would be false so it would use the or operator to be 1
      const newQuantity = state[action.payload] || 1
      state[action.payload] = newQuantity;
      fetch(`${BASE_URL}/product/${action.payload}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: newQuantity }),
      })
        .then((response) => console.log(response.json()));
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
