import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { BASE_URL } from "../utils/api";
import { useAuth0 } from "@auth0/auth0-react";
//do we need componentdidmount
const DeleteProduct = () => {
  const { getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  const [token, setMessage] = useState("");
  useEffect(() => {
    const getApiData = async () => {
      const token = await getAccessTokenSilently();
      setMessage(token);
    };

    getApiData();
  }, []);

  return (
    <a href={`/delete/${id}`}>
      <button>Delete</button>
    </a>
  );
};
CartButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteProduct;
