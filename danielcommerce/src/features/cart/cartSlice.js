import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/api";

const initialState = {};

// what should state look like after adding one product

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log("console", action.payload.token);
      // zero would be false so it would use the or operator to be 1
      // const newQuantity = state[action.payload] || 1;
      // state[action.payload] = newQuantity;
      // console.log(newQuantity);
      fetch(`${BASE_URL}/api/cart/product/${action.payload.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${action.payload.token}`,
        },
        body: JSON.stringify({ quantity: 1 }),
      }).then((response) => console.log("response", response.json()));
    },
    updateQuantity: (state, action) => {
      // state[action.payload] = (state[action.payload] || 1) - 1;
      // const newQuantity = state[action.payload] || 1;
      // state[action.payload] = newQuantity;
      fetch(`${BASE_URL}/api/cart/product/${action.payload.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${action.payload.token}`,
        },
        body: JSON.stringify({ quantity: action.payload.quantity }),
      }).then((response) => console.log(response.json()));
    },
    deleteFromCart: (state, action) => {
      // delete state[action.payload];
      fetch(`${BASE_URL}/api/cart/product/${action.payload.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${action.payload.token}`,
        },
      });
      // need to reload the page below because item deletes but page doesnt re render
      window.location.reload(false);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateQuantity, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
