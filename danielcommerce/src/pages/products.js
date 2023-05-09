import {useState, useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";

import {Link} from "react-router-dom";
import CartButton from "../components/cartBtn";
import {BASE_URL} from "../utils/api";
import GlobalProductStyle from "../components/Container.styled";

const ProductPage = () => {
  const {getAccessTokenSilently} = useAuth0();

  console.log("url", BASE_URL);
  const [returnedmsg, setMessage] = useState([]);
  useEffect(() => {
    // async = must return a promise because
    //https://www.robinwieruch.de/react-hooks-fetch-data/
    const getApiData = async () => {
      try {
        // Await = waited for promise from async
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
  const [returnCart, setCart] = useState([]);

  useEffect(() => {
    // async = must return a promise because
    //https://www.robinwieruch.de/react-hooks-fetch-data/
    const getApiData = async () => {
      const token = await getAccessTokenSilently();

      try {
        // Await = waited for promise from async
        const res = await fetch(`${BASE_URL}/api/cart/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.ok) {
          const jsonResp = await res.json();
          setCart(jsonResp);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getApiData();
  }, []);
  const mapOfCart = returnCart.reduce((map, obj) => {
    map.set(obj._id, obj.quantity);
    return map;
  }, new Map());

  return (
    <>
      <GlobalProductStyle />
      <h3>
        <Link to="/cart" className="cart-btn">
          VIEW CART
        </Link>
      </h3>
      <h3>
        <Link to="/login" className="login-btn">
          LOG IN
        </Link>
      </h3>

      {returnedmsg.map((product) => {
        let productQuantity = mapOfCart.get(product._id);
        if (typeof productQuantity === "undefined") {
          productQuantity = 0;
        }
        console.log(productQuantity, "productQuantity");
        let quantity = parseInt(productQuantity);
        console.log(returnCart, "returncart");
        return (
          <div key={product._id}>
            <br></br>
            <br></br>
            {/* https://stackoverflow.com/questions/57114044/how-to-add-a-route-to-image-in-react-js{" "} */}
            <br></br>
            <Link to={`/product/${product._id}`} className="product-btn">
              <h4 style={{color: "blue"}}>{product.name}</h4>
              <img src={product.image} alt={product.name} />
            </Link>
            <br></br>
            <CartButton id={product._id} quantity={quantity} />
            <br></br>
            <br></br>
          </div>
        );
      })}
    </>
  );
};
export default ProductPage;
