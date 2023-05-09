import PropTypes from "prop-types";
// import { useDispatch } from "react-redux";
// import {addToCart, updateQuantity} from "../features/cart/cartSlice";
import {useAuth0} from "@auth0/auth0-react";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

const CartButton = ({id, quantity}) => {
  const {getAccessTokenSilently} = useAuth0();
  const navigate = useNavigate();
  const [token, setMessage] = useState("");
  useEffect(() => {
    const getApiData = async () => {
      const token = await getAccessTokenSilently();
      setMessage(token);
    };

    getApiData();
  }, []);
  if (quantity === 0) {
    return (
      <a href={`/addproduct/${id}`}>
        <button>Add to cart</button>
      </a>
    );
  } else {
    const addQuantity = quantity + 1;
    return (
      <a href={`/cart/product/${id}/${addQuantity}`}>
        <button>Add to cart</button>
      </a>
    );
  }
};
CartButton.propTypes = {
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
export default CartButton;
