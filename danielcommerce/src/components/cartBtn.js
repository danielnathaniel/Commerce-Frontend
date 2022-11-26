import PropTypes from "prop-types";
import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decrementByAmount } from "../features/cart/cartSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

const CartButton = ({ id }) => {
  const { getAccessTokenSilently } = useAuth0();
  const [token, setMessage] = useState("");
  useEffect(() => {
    const getApiData = async () => {
      const token = await getAccessTokenSilently();
      setMessage(token);
    };

    getApiData();
  }, []);

  // const count = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(addToCart({ id, token }))}>
        Add to Cart
      </button>
    </>
  );
};
CartButton.propTypes = {
  id: PropTypes.string.isRequired,
};
export default CartButton;
