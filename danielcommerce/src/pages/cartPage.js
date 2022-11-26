import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import styled from "styled-components";
import QuantityButton from "../components/quantityBtn";
import { BASE_URL } from "../utils/api";

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

  // return (
  //   <>
  //     {returnedmsg.map((product) => {
  //       const productDetails = FindProductDetails(product._id);
  //       return (
  //         <div key={product._id}>
  //           {/* <h3>{itemId}</h3> */}
  //           <h3>{productDetails.name}</h3>
  //           <img src={productDetails.image} alt={productDetails.name} />
  //           <h4>Quantity: {product.quantity}</h4>
  //           <QuantityButton id={product._id} />
  //         </div>
  //       );
  //     })}
  //   </>
  // );
  // state.cart, the cart portion is coming from the name from cart slice
  // const cart = useSelector((state) => state.cart);
  return Object.entries(returnedmsg).map(([itemId, data]) => {
    // console.log("quantity", data, "itemid", itemId);
    // const foundProduct = returnedmsg.find((product) => product._id == itemId);
    // const productDetails = FindProductDetails(foundProduct._id);
    // console.log({ foundProduct });

    return (
      <div key={data._id}>
        {/* <h3>{itemId}</h3> */}
        <h3>{data.name}</h3>
        <img src={data.image} alt={data.name} />
        <h4>Quantity: {data.quantity}</h4>
        <QuantityButton id={data._id} />
      </div>
    );
  });
};
//moved below logic to backend
// const FindProductDetails = (productId) => {
//   console.log(productId);
//   const [returnedmsg, setMessage] = useState({});
//   useEffect(() => {
//     const getApiData = async () => {
//       try {
//         const res = await fetch(`${BASE_URL}/api/products/${productId}`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         if (res.ok) {
//           const jsonResp = await res.json();
//           setMessage(jsonResp);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     getApiData();
//   }, []);
//   return returnedmsg;
// };

export default CartPage;
