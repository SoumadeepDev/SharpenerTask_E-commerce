import { useContext } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { AppContext } from "../Context";

const CartItem = ({ id, title, price, imageUrl, quantity }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(AppContext);
  return (
    <article className="cart-item">
      <img src={imageUrl} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">Rs.{price}</span>
        {/* remove button */}
        <button className="remove-btn" onClick={() => removeFromCart(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase quantity */}
        <button className="amount-btn" onClick={() => increaseQuantity(id)}>
          <FaChevronUp className="amount-icon" />
        </button>
        {/* view quantity */}
        <span className="amount">{quantity}</span>
        {/* decrease quantity */}
        <button className="amount-btn" onClick={() => decreaseQuantity(id)}>
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
