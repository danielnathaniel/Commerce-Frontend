import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart, updateQuantity } from "../features/cart/cartSlice";
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
      <button
        onClick={() => {
          dispatch(addToCart({ id, token }));
          // console.log("added to cart");
          // alert("Total Quantity Added To Cart");
          // } else {
          //   quantity = quantity + 1;
          //   console.log("updated quantity", quantity);
          //   dispatch(updateQuantity({ id, token, quantity }));
          // }
        }}
      >
        Add to Cart
      </button>
    </>
  );
};
CartButton.propTypes = {
  id: PropTypes.string.isRequired,
};
export default CartButton;
