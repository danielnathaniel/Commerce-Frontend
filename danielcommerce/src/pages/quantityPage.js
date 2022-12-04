import { useRef, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { BASE_URL } from "../utils/api";
import { useAuth0 } from "@auth0/auth0-react";
//do we need componentdidmount
const QuantityPage = () => {
  const progress = useRef(false);
  const { getAccessTokenSilently } = useAuth0();
  //   const [token, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  // what is causing the re render
  const { id, quantity } = useParams();
  const fetchValidation = async () => {
    if (progress.current) {
      return console.log("progress.current is true");
    }
    progress.current = true;
    const token = await getAccessTokenSilently();
    const data = await fetch(`${BASE_URL}/api/cart/product/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ quantity: quantity }),
    }).then((response) => console.log(response.json()));
    setIsValid(true);
  };

  if (isValid) {
    return (
      <>
        <Navigate to="/cart" />;
      </>
    );
  } else {
    console.log("fetval");
    fetchValidation();
  }
};

export default QuantityPage;
