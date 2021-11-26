import React, { useContext } from "react";
import HeaderMenu from "./../../Components/HeaderMenu/HeaderMenu";
import DisplayProducts from "./../../Components/DisplayProducts/DisplayProducts";
import Footer from "./../../Components/Footer/Footer";
import boots from "./../../Assets/FakeData/LeatherBoots";
import { Container, Row, Col } from "react-bootstrap";
import CartArray from "./../../Components/CartArray/CartArray";
import { UserContext } from "./../../App";
import BreadCrumb from "./../../Components/BreadCrumb/BreadCrumb";
import CartSummary from "./../../Components/CartSummary/CartSummary";
import "./CartPage.css";

const CartPage = () => {
  const { cart } = useContext(UserContext);
  const [cartData, setCartData] = cart;
  return (
    <div>
      <HeaderMenu></HeaderMenu>
      <BreadCrumb from={"Home"} to={"Cart"} />
      <Container className="section" style={{ minHeight: "60vh" }}>
        <Row>
          <Col
            lg={8}
            className={cartData.length > 0 ? "cartItemsArea" : "emptyCart"}
          >
            {cartData.length > 0 ? (
              <CartArray></CartArray>
            ) : (
              <h2 className="emptyCartMessage"> Your Cart Is Empty </h2>
            )}
          </Col>
          <Col lg={4}>
            <CartSummary></CartSummary>
          </Col>
        </Row>
      </Container>
      {/* <DisplayProducts
        data={boots}
        heading={"Products You May Like"}
      ></DisplayProducts> */}
      <Footer></Footer>
    </div>
  );
};

export default CartPage;
