import { useState } from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import styled from "styled-components";
import QuantityButton from "../components/quantityBtn";
import { BASE_URL } from "../utils/api";
// import CartStyle from "../components/CartStyled";

const CheckCartButton = () => {
  const [returnedmsg, setMessage] = useState([]);

  return Object.entries(returnedmsg).map(([data]) => {
    if (data.quantity > 0) {
      alert("Item previously added cart, no changes to cart have been made");
    }
    return (
      <div key={data._id}>
        {/* <h4>{data.name}</h4>
        <img src={data.image} alt={data.name} />
        <h4>Quantity: {data.quantity}</h4> */}
      </div>
    );
  });
};

export default CheckCartButton;
