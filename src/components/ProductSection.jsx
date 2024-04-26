import { useState, useEffect, useContext } from "react";
import ProductsCardPage from "./ProductsCardPage";
import { AppContext } from "../Context";

const ProductSection = () => {
  const { items } = useContext(AppContext);
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
