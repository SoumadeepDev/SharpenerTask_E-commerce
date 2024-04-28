import { createContext, useContext, useState, useEffect } from "react";
import { productsArr } from "./data";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cartElement, setCartElement] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(productsArr);
  }, []);

  const addToCart = (itemId) => {
    const itemToAdd = items.find((item) => item.id === itemId);
    const existingCartItem = cartElement.find((item) => item.id === itemId);

    if (itemToAdd && itemToAdd.stock > 0) {
      if (existingCartItem && existingCartItem.quantity >= itemToAdd.stock) {
        toast.error("Cannot add more than available stock!");
      } else {
        const updatedCart = existingCartItem
          ? cartElement.map((item) =>
              item.id === itemId
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...cartElement, { ...itemToAdd, quantity: 1 }];
        setCartElement(updatedCart);
        toast.dismiss();
        toast.success("Item added to cart!");
      }
    } else {
      toast.dismiss();
      toast.error("Item is out of stock!");
    }
  };

  const handleClearCart = () => {
    setCartElement([]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartElement.filter((item) => item.id !== itemId);
    setCartElement(updatedCart);
    toast.success("Item removed from cart!");
  };

  const increaseQuantity = (itemId) => {
    const itemToUpdate = cartElement.find((item) => item.id === itemId);
    if (itemToUpdate && itemToUpdate.quantity < itemToUpdate.stock) {
      const updatedCart = cartElement.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartElement(updatedCart);
    } else {
      toast.dismiss();
      toast.error("Cannot increase quantity, item stock is insufficient!");
    }
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cartElement.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartElement(updatedCart);
  };

  return (
    <AppContext.Provider
      value={{
        cartElement,
        items,
        addToCart,
        handleClearCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
