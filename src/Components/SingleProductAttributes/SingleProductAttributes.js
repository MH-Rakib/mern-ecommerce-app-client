import React from "react";
import "./SingleProductAttributes.css";

const SingleProductAttributes = ({
  data,
  subject,
  handleProductattr,
  stateValue,
}) => {
  return (
    <div>
      <h3 className="attributeLabel">{subject}: </h3>
      {subject === "color" &&
        data.map((hexColorValue) => (
          <span
            className={
              stateValue === hexColorValue ? "activeAttributes" : "attributes"
            }
            style={{ color: hexColorValue, backgroundColor: hexColorValue }}
            onClick={() => handleProductattr(data.indexOf(hexColorValue))}
          >
            01
          </span>
        ))}
      {subject !== "color" &&
        data.map((attr) => (
          <span
            className={stateValue === attr ? "activeAttributes" : "attributes"}
            onClick={() => handleProductattr(subject, data.indexOf(attr))}
          >
            {attr}
          </span>
        ))}
    </div>
  );
};

export default SingleProductAttributes;
