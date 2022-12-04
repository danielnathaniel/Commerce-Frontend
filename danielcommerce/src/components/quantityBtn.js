import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

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
  const addQuantity = quantity + 1;
  const subQuantity = quantity - 1;

  let decrementurl = `/cart/product/${id}/${subQuantity}`;
  if (quantity === 1) {
    decrementurl = `/delete/${id}`;
  }

  // const deletePath

  return (
    <>
      <a href={`/cart/product/${id}/${addQuantity}`}>
        <button>Increase quantity by 1</button>
      </a>
      <a href={decrementurl}>
        <button>Decrease quantity by 1</button>
      </a>

      <a href={`/delete/${id}`}>
        <button>Delete</button>
      </a>
    </>
  );
};
// below is representing the object key which is a string
QuantityButton.propTypes = {
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
export default QuantityButton;
