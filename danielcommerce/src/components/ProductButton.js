import PropTypes from "prop-types";

import { addToCart } from "../features/cart/cartSlice";

const CartButton = ({ id }) => {
  // const count = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(addToCart(id))}>Add to Cart</button>
    </>
  );
};
CartButton.propTypes = {
  id: PropTypes.number.isRequired,
};
export default CartButton;
