import React from "react";
import DisplayProducts from "../DisplayProducts/DisplayProducts";

const CategoryProducts = ({ parentCategory }) => {
  const { subCategory } = parentCategory;

  return (
    <div>
      <h2>{parentCategory.name}</h2>
      {subCategory.map((subcategory) => (
        <DisplayProducts subcategory={subcategory}></DisplayProducts>
      ))}
    </div>
  );
};

export default CategoryProducts;
