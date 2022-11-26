import React from "react";
import { useSelector } from "react-redux";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import styled from "styled-components";
import productList from "../data/productList";
import QuantityButton from "../components/quantityBtn";

const SingleProductPage = () => {
  // state.cart, the cart portion is coming from the name from cart slice
  const cart = useSelector((state) => state.cart);
  return Object.entries(cart).map(([itemId, quantity]) => {
    const foundProduct = productList.find((product) => product.id == itemId);
    // console.log({ foundProduct });

    return (
      <div key={itemId}>
        {/* <h3>{itemId}</h3> */}
        <h3>{foundProduct.name}</h3>
        <img src={foundProduct.image} alt={foundProduct.name} />
        <h4>Quantity: {quantity}</h4>
        <QuantityButton id={parseInt(itemId)} />
      </div>
    );
  });
};
export default SingleProductPage;
