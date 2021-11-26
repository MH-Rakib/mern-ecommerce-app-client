import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ obj }) => {
  const { _id } = obj;

  return (
    <Link to={`/shop/product/${_id}`} style={{ textDecoration: "none" }}>
      <div classname="productCard">
        <img src={obj.image[0]} className="img-fluid w-100" alt="" />
        <p className="productName">{obj.name}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
