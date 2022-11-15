import PropTypes from "prop-types";
import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount } from "../features/cart/cartSlice";

const CartButton = ({ id }) => {
  // const count = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(incrementByAmount(id))}>Add to Cart</button>
  );
};
CartButton.propTypes = {
  id: PropTypes.string.isRequired,
};
export default CartButton;
