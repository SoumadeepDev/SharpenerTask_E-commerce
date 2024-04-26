import { createContext, useContext, useState, useEffect } from "react";
import { cartElements, productsArr } from "./data";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cartElement, setCartElement] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(productsArr);
  }, []);

  useEffect(() => {
    setCartElement(cartElements);
  }, []);

  return (
    <AppContext.Provider value={{ cartElement, items }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
