import { createContext, useContext, useState, useEffect } from "react";
import { productsArr } from "./data";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cartElement, setCartElement] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setCartElement(cartElement);
  }, []);

  // Save cart data to localStorage whenever cartElement changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartElement));
  }, [cartElement]);

  useEffect(() => {
    setItems(productsArr);
  }, []);

  useEffect(() => {
    // Calculate total amount whenever cartElement changes
    console.log("Cart Element Before Saving to Local Storage:", cartElement);
    const calculatedTotal = cartElement.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalAmount(calculatedTotal);

    // //calculate total quantity in the cart
    // const totalQuantity = cartElement.reduce(
    //   (total, item) => total + item.quantity,
    //   0
    // );

    // Save cart data to localStorage
    localStorage.setItem("cart", JSON.stringify(cartElement));
    console.log("Cart Element After Saving to Local Storage:", cartElement);
  }, [cartElement]);

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
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        toast.dismiss();
        toast.success(`${itemToAdd.title} added to cart!`);
      }
    } else {
      toast.dismiss();
      toast.error(`${itemToAdd.title} Ticket is not available!`);
    }
  };

  const handleClearCart = () => {
    setCartElement([]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartElement.filter((item) => item.id !== itemId);
    setCartElement(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Ticket removed from cart!");
  };

  const increaseQuantity = (itemId) => {
    const itemToUpdate = cartElement.find((item) => item.id === itemId);
    if (itemToUpdate && itemToUpdate.quantity < itemToUpdate.stock) {
      const updatedCart = cartElement.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartElement(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      toast.dismiss();
      toast.error("Cannot increase quantity, no more tickets available!");
      setTimeout(() => {
        toast.info("To get a ticket, please check later!");
      }, 2500);
    }
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cartElement.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartElement(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
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
        totalAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
