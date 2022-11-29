import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/api";

const initialState = {};
// https://www.bezkoder.com/redux-toolkit-example-crud/
//https://www.softkraft.co/how-to-setup-slices-with-redux-toolkit/
// comment
//// https://auth0.com/docs/quickstart/spa/react/01-login#install-the-auth0-react-sdk
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // endpoints
    addToCart: (state, action) => {
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
      fetch(`${BASE_URL}/api/cart/product/${action.payload.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${action.payload.token}`,
        },
      });
      // need to reload the page below because item deletes but page doesnt re render - react redux toolkit should help with this but had to stop because of limited time
      window.location.reload(false);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateQuantity, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
