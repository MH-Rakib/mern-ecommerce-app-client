import React from "react";

import "./ProductCategoryCard.css";

const ProductCategoryCard = ({ obj }) => {
  return (
    <div className="productCategoryCard">
      <img src={obj.image} alt="" className="w-100 img-fluid" />
      <div className="productCategoryCard-title">
        <h3>{obj.name}</h3>
      </div>
    </div>
  );
};

export default ProductCategoryCard;
