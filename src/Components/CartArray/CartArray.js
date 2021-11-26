import React, { useContext } from "react";
import { NavItem, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { UserContext } from "../../App";
import { MdOutlineDelete } from "react-icons/md";
import "./CartArray.css";

const CartArray = () => {
  const { cart } = useContext(UserContext);
  const [cartData, setCartData] = cart;

  const handleDeleteCartItem = (name) => {
    const newCart = cartData.filter((item) => item.name !== name);
    setCartData([...newCart]);
  };

  return (
    <div>
      <Row>
        <Col md={12}>
          <div className="cartSingleItem my-0">
            <Row className="d-flex align-items-center cartItemsHeader">
              <Col md={3}>
                <p>Product Image</p>
              </Col>
              <Col md={3}>
                <p>Product Info</p>
              </Col>
              <Col md={2}>
                <p>Price</p>
              </Col>
              <Col md={2}>
                <p>Total</p>
              </Col>
              <Col md={2}>
                <p>Delete</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={12}>
          {cartData.map((item) => (
            <div className="cartSingleItem">
              <Row className="d-flex align-items-center">
                <Col md={3}>
                  <div className="cartItemImage">
                    <img src={item.image} className="img-fluid w-100" alt="" />
                  </div>
                </Col>
                <Col md={3}>
                  <div className="cartItemInfo" style={{ paddingLeft: "5px" }}>
                    <p
                      className="selectedAttribute name"
                      style={{ textAlign: "left", fontSize: "20px" }}
                    >
                      {item.name}
                    </p>
                    <p
                      className="selectedAttribute "
                      style={{ textAlign: "left" }}
                    >
                      Color: &nbsp;&nbsp;
                      <span
                        className="color"
                        style={{
                          backgroundColor: item.selectedColor,
                          color: item.selectedColor,
                        }}
                      >
                        12
                      </span>
                    </p>
                    <p
                      className="selectedAttribute size"
                      style={{ textAlign: "left" }}
                    >
                      Size: &nbsp;&nbsp;{item.selectedSize}
                    </p>
                    {item.elevatorAvailable && (
                      <>
                        <p
                          className="selectedAttribute innerHeel"
                          style={{ textAlign: "left" }}
                        >
                          InnerHeel: {item.selectedInnerSole} inch
                        </p>
                        <p
                          className="selectedAttribute outerSole"
                          style={{ textAlign: "left" }}
                        >
                          OuterHeel: {item.selectedOuterHeel} inch
                        </p>
                      </>
                    )}
                  </div>
                </Col>
                <Col md={2}>
                  <p className=" selectedAttribute price">
                    {item.price} * {item.selectedQuantity}
                  </p>
                </Col>
                <Col md={2}>
                  <p className=" selectedAttribute total">
                    {" "}
                    {parseFloat(item.price) * parseFloat(item.selectedQuantity)}
                  </p>
                </Col>
                <Col md={2}>
                  <p
                    className=" selectedAttribute delete"
                    onClick={() => handleDeleteCartItem(item.name)}
                  >
                    <MdOutlineDelete
                      style={{
                        color: "red",
                        fontSize: "28px",
                        cursor: "pointer",
                      }}
                    />
                  </p>
                </Col>
              </Row>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default CartArray;
