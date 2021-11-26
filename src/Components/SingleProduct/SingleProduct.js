import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./SingleProduct.css";
import SingleProductAttributes from "./../SingleProductAttributes/SingleProductAttributes";
import { UserContext } from "../../App";

const SingleProduct = ({ data }) => {
  const { cart } = useContext(UserContext);
  const [cartData, setCartData] = cart;

  const {
    name,
    description,
    image,
    size,
    color,
    elevator,
    innerSole,
    outerHeel,
    price,
    inStock,
  } = data;

  console.log(elevator);

  const [productQuantity, setProductQuantity] = useState(1);
  const [productImage, setProductImage] = useState(image[0]);
  const [productColor, setProductColor] = useState(color[0]);
  const [productSize, setProductSize] = useState(size[0]);

  const [elevatorAvalable, setElevatorAvalable] = useState(elevator);

  const [productInnerSole, setProductInnerSole] = useState(innerSole[0]);
  const [productOuterHeel, setProductOuterHeel] = useState(outerHeel[0]);

  const handleProductColor = (index) => {
    setProductImage(image[index]);
    setProductColor(color[index]);
  };

  const handleProductAttribute = (subject, index) => {
    if (subject === "size") {
      setProductSize(size[index]);
    }
    if (subject === "innerSole") {
      setProductInnerSole(innerSole[index]);
    }
    if (subject === "outerHeel") {
      setProductOuterHeel(outerHeel[index]);
    }
  };

  const handleIncreaseQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };
  const handleDecreaseQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const handleAddToCart = (data) => {
    const duplicateData = cartData.find((item) => item.name === data.name);

    if (duplicateData) {
      const remainingItem = cartData.filter((item) => item.name !== data.name);

      const updatedItem = { ...duplicateData };
      updatedItem.selectedQuantity = productQuantity;
      updatedItem.image = productImage;
      updatedItem.selectedColor = productColor;
      updatedItem.selectedSize = productSize;
      updatedItem.elevatorAvailable = elevatorAvalable;

      if (updatedItem.elevator) {
        updatedItem.selectedInnerSole = productInnerSole;
        updatedItem.selectedOuterHeel = productOuterHeel;
      }

      updatedItem.selectedQuantity = productQuantity;
      setCartData([...remainingItem, updatedItem]);
      console.log(updatedItem);
    } else {
      const addedItem = {};
      addedItem.id = data._id;
      addedItem.name = data.name;
      addedItem.price = data.price;
      addedItem.image = productImage;
      addedItem.selectedColor = productColor;
      addedItem.selectedSize = productSize;
      addedItem.elevatorAvailable = elevatorAvalable;

      if (data.elevator) {
        addedItem.selectedInnerSole = productInnerSole;
        addedItem.selectedOuterHeel = productOuterHeel;
      }

      addedItem.selectedQuantity = productQuantity;
      setCartData([...cartData, addedItem]);
      console.log(addedItem);
    }
  };

  return (
    <div className="section">
      <Container>
        <Row className="d-flex align-items-center">
          <Col md={5}>
            <div className="singleProductimage">
              <img src={productImage} className="w-100 img-fluid" alt="" />
            </div>
          </Col>

          <Col md={6} className="offset-md-1">
            <div className="singleProductDescription">
              <h3 className="singleProductName">{name}</h3>
              <p className="singleProductDescription">{description}</p>
              <p className="singleProductPrice">BDT. {price}</p>

              <Row>
                <Col xs={12} style={{ padding: "8px 15px" }}>
                  <SingleProductAttributes
                    data={color}
                    subject={"color"}
                    handleProductattr={handleProductColor}
                    stateValue={productColor}
                  />
                </Col>

                <Col xs={12} style={{ padding: "8px 15px" }}>
                  <SingleProductAttributes
                    data={size}
                    subject={"size"}
                    handleProductattr={handleProductAttribute}
                    stateValue={productSize}
                  />
                </Col>

                {data.elevator && (
                  <>
                    <Col xs={12} style={{ padding: "8px 15px" }}>
                      <SingleProductAttributes
                        data={innerSole}
                        subject={"innerSole"}
                        handleProductattr={handleProductAttribute}
                        stateValue={productInnerSole}
                      />
                    </Col>

                    <Col xs={12} style={{ padding: "8px 15px" }}>
                      <SingleProductAttributes
                        data={outerHeel}
                        subject={"outerHeel"}
                        handleProductattr={handleProductAttribute}
                        stateValue={productOuterHeel}
                      />
                    </Col>
                  </>
                )}

                <Col>
                  <div className="productQuantity mt-4">
                    <p>
                      <span onClick={handleDecreaseQuantity}>
                        <button>−</button>
                      </span>
                      <span className="quantity">{productQuantity}</span>
                      <span onClick={handleIncreaseQuantity}>
                        <button>+</button>
                      </span>
                    </p>
                    <button
                      onClick={() => handleAddToCart(data)}
                      className="addToCartButton"
                    >
                      Add To Cart
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleProduct;
