import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const CartItem = ({ title, price, imageUrl, quantity }) => {
  return (
    <article className="cart-item">
      <img src={imageUrl} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">Rs.{price}</span>
        {/* remove button */}
        <button className="remove-btn">remove</button>
      </div>
      <div>
        {/* increase quantity */}
        <button className="amount-btn">
          <FaChevronUp className="amount-icon" />
        </button>
        {/* view quantity */}
        <span className="amount">{quantity}</span>
        {/* decrease quantity */}
        <button className="amount-btn">
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
