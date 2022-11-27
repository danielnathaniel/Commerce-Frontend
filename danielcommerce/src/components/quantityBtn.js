import PropTypes from "prop-types";
import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import { updateQuantity, deleteFromCart } from "../features/cart/cartSlice";

const QuantityButton = ({ id, quantity }) => {
  const { getAccessTokenSilently } = useAuth0();
  const [token, setMessage] = useState("");
  useEffect(() => {
    const getApiData = async () => {
      const token = await getAccessTokenSilently();
      setMessage(token);
    };

    getApiData();
  }, []);
  console.log("quantity", quantity);
  // const count = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          quantity = quantity + 1;
          window.location.reload(false);
          dispatch(updateQuantity({ id, token, quantity }));
        }}
      >
        Increase quantity by 1
      </button>
      <button
        onClick={() => {
          if (quantity > 1) {
            quantity = quantity - 1;
            dispatch(updateQuantity({ id, token, quantity }));
            window.location.reload(false);
          } else {
            dispatch(deleteFromCart({ id, token }));
          }
        }}
      >
        Decrease quantity by 1
      </button>
      <button onClick={() => dispatch(deleteFromCart({ id, token }))}>
        Delete product from cart
      </button>
    </>
  );
};
// below is representing the object key which is a string
QuantityButton.propTypes = {
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
export default QuantityButton;
