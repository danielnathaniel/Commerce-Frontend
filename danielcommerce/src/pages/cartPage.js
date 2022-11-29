import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import styled from "styled-components";
import QuantityButton from "../components/quantityBtn";
import { BASE_URL } from "../utils/api";
// import CartStyle from "../components/CartStyled";
// https://auth0.com/docs/quickstart/spa/react/01-login#install-the-auth0-react-sdk
const CartPage = () => {
  const { getAccessTokenSilently } = useAuth0();

  const [returnedmsg, setMessage] = useState([]);
  useEffect(() => {
    const getApiData = async () => {
      const token = await getAccessTokenSilently();
      try {
        const res = await fetch(`${BASE_URL}/api/cart/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.ok) {
          const jsonResp = await res.json();
          setMessage(jsonResp);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getApiData();
  }, []);

  return Object.entries(returnedmsg).map(([itemId, data]) => {
    return (
      <div key={data._id}>
        {/* <CartStyle /> */}
        {/* <h3>{itemId}</h3> */}
        <>
          <h4 style={{ color: "blue" }}>{data.name}</h4>
        </>
        <img src={data.image} alt={data.name} />
        <h4>Quantity: {data.quantity}</h4>
        <QuantityButton id={data._id} quantity={data.quantity} />
      </div>
    );
  });
};

export default CartPage;
