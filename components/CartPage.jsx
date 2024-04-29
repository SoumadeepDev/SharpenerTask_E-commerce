import { useEffect, useState, useContext } from "react";
import { AppContext } from "../Context";
import CartItem from "./CartItem";
import { useLocation } from "react-router-dom";
import "../components/Swiper.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { totalAmount, cartElement, handleClearCart } = useContext(AppContext);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/cart") {
      document.body.classList.add("about-bg");
      document.body.classList.remove("home-bg");
    } else {
      document.body.classList.remove("about-bg");
      document.body.classList.remove("home-bg");
    }
  }, [location.pathname]);

  if (cartElement.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your Cart is Empty</h2>
        <br />
        <Link to="/store">
          <button
            style={{
              background: "green",
              width: "400px",
              margin: "2rem auto",
              border: "none",
              padding: "20px 30px",
              color: "white",
              fontSize: "1rem",
              fontFamily: "monospace",
            }}
          >
            Fill It
          </button>
        </Link>
      </div>
    );
  }

  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartElement.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>{totalAmount}</span>
          </h5>
        </div>
        <button className="clear-btn btn-hipster" onClick={handleClearCart}>
          clear cart
        </button>
        <Link to="/" className="Link">
          <div>
            <button className="continue">Continue Shopping</button>
          </div>
        </Link>
      </footer>
    </section>
  );
};

export default CartPage;
