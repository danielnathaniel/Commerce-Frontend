import PropTypes from "prop-types";
import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementByAmount,
  decrementByAmount,
  deleteFromCart,
} from "../features/cart/cartSlice";

const QuantityButton = ({ id }) => {
  // const count = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(incrementByAmount(id))}>
        Increase quantity by 1
      </button>
      <button onClick={() => dispatch(decrementByAmount(id))}>
        Decrease quantity by 1
      </button>
      <button onClick={() => dispatch(deleteFromCart(id))}>
        Delete product from cart
      </button>
    </>
  );
};
// below is representing the object key which is a string
QuantityButton.propTypes = {
  id: PropTypes.string.isRequired,
};
export default QuantityButton;
