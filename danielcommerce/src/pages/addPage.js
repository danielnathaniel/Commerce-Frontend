import { useState, useEffect, useRef } from "react";
import { useParams, Navigate } from "react-router-dom";
import { BASE_URL } from "../utils/api";
import { useAuth0 } from "@auth0/auth0-react";
//do we need componentdidmount
const AddPage = () => {
  const progress = useRef(false);
  const { getAccessTokenSilently } = useAuth0();
  //   const [token, setMessage] = useState("");
  // what is causing the re render
  const params = useParams();
  const fetchValidation = async () => {
    if (progress.current) {
      return console.log("progress.current is true");
    }
    progress.current = true;
    const token = await getAccessTokenSilently();
    const reqBody = { quantity: 1 };
    const data = await fetch(`${BASE_URL}/api/cart/product/${params.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(reqBody),
    });
  };

  //   return isValid ? <Navigate to="/" /> : fetchValidation();

  if (progress.current) {
    return (
      <>
        <Navigate to="/" />;
      </>
    );
  } else {
    console.log("fetval");
    fetchValidation();
  }
};

export default AddPage;
