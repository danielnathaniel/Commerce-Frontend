import PropTypes from "prop-types";
import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decrementByAmount } from "../features/cart/cartSlice";

const CartButton = ({ id }) => {
  // const count = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(addToCart(id))}>Add to Cart</button>
    </>
  );
};
CartButton.propTypes = {
  id: PropTypes.number.isRequired,
};
export default CartButton;
