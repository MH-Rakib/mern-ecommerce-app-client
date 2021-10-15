import React from "react";
import "./ProductCard.css";

const ProductCard = ({ obj }) => {
  return (
    <div classname="productCard">
      <img src={obj.image} className="img-fluid w-100" alt="" />
      <p className="productName">{obj.name}</p>
    </div>
  );
};

export default ProductCard;
