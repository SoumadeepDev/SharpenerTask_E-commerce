import { productsArr } from "../data";
import { useState, useEffect } from "react";
import ProductsCardPage from "./ProductsCardPage";

const ProductSection = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(productsArr);
  }, []);
  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="card-container">
        {items.map((item) => (
          <ProductsCardPage key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default ProductSection;
