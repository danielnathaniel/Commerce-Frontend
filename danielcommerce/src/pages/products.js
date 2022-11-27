import { useState, useEffect } from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import styled from "styled-components";
// import Products from "../data/productList";
import { Link } from "react-router-dom";
import CartButton from "../components/cartBtn";
import ProductButton from "../components/ProductButton";

import { BASE_URL } from "../utils/api";

const ProductPage = () => {
  const [returnedmsg, setMessage] = useState([]);
  useEffect(() => {
    const getApiData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/products`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
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

  return (
    <>
      <h1>DANIEL COMMERCE</h1>
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
      {returnedmsg.map((product) => {
        return (
          <div key={product._id}>
            <h3>{product.name}</h3>
            {/* https://stackoverflow.com/questions/57114044/how-to-add-a-route-to-image-in-react-js{" "} */}
            <br></br>
            <Link to={`/product/${product._id}`} className="product-btn">
              <img src={product.image} alt={product.name} />
            </Link>
            <br></br>
            <CartButton id={product._id} />
            <br></br>
            <br></br>
          </div>
        );
      })}
    </>
  );
};
export default ProductPage;
