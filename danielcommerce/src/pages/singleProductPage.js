import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { BASE_URL } from "../utils/api";

const SingleProductPage = () => {
  console.log("test123", useState());
  const params = useParams();
  const BASE_URL = "http://127.0.0.1:6060";
  console.log(params.id);
  const [returnedmsg, setMessage] = useState([]);
  useEffect(() => {
    const getApiData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/products/${params.id}`, {
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
    <div key={returnedmsg._id}>
      {/* <h3>{itemId}</h3> */}
      <h4>{returnedmsg.name}</h4>
      <img src={returnedmsg.image} alt={returnedmsg.name} />
      <h4>
        DESCRIPTION: <br></br>
        {returnedmsg.description}
      </h4>
    </div>
    // return Object.entries(returnedmsg).map(([itemId, data]) => {

    //   );
    // });
  );
};

export default SingleProductPage;
