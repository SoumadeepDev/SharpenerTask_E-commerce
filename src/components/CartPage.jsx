import { useEffect, useState, useContext } from "react";
import { AppContext } from "../Context";
import CartItem from "./CartItem";

const CartPage = () => {
  const { cartElement } = useContext(AppContext);
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
            total <span>0</span>
          </h5>
        </div>
        <button className="clear-btn btn-hipster">clear cart</button>
      </footer>
    </section>
  );
};
export default CartPage;
