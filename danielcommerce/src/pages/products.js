import React from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import styled from "styled-components";
import Products from "../data/productList";
import { Link } from "react-router-dom";
import CartButton from "../components/cartBtn";

const ProductPage = () => {
  return (
    <>
      <h2>
        <Link to="/cart" className="cart-btn">
          VIEW CART
        </Link>
      </h2>
      <h2>
        <Link to="/login" className="login-btn">
          LOG IN
        </Link>
      </h2>
      {Products.map((product) => {
        return (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <CartButton id={product.id} />
          </div>
        );
      })}
    </>
  );
};

export default ProductPage;
