import React from "react";

import "./ProductCategoryCard.css";
import { Link } from "react-router-dom";

const ProductCategoryCard = ({ obj }) => {
  const { parentCategory } = obj;
  return (
    <Link to={`/shop/${parentCategory}`} style={{ textDecoration: "none" }}>
      <div className="productCategoryCard">
        <img src={obj.image} alt="" className="w-100 img-fluid" />
        <div className="productCategoryCard-title">
          <h3>{obj.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProductCategoryCard;
