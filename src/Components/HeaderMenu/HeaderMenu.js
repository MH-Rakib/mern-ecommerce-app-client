import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./HeaderMenu.css";

const HeaderMenu = () => {
  return (
    <div className="sticky-top bg-light mb-5">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <h2 className="header-brand-logo">IMMADE</h2>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className="menu-items">Home</Nav.Link>
            <Nav.Link className="menu-items">Shop</Nav.Link>
            <Nav.Link className="menu-items">Tutorials</Nav.Link>
            <Nav.Link className="menu-items me-5">Contact</Nav.Link>
            <Nav.Link className="menu-items text-danger">Register</Nav.Link>
            <Nav.Link className="menu-items text-danger">Login</Nav.Link>

            <Nav.Link href="#pricing" className="cart">
              <FaShoppingCart className="cart_icon" />
              <span className="cart_count">{"2"}</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Navbar>
        <Container>
          <Navbar.Brand to={"/"}></Navbar.Brand>

          <div>
            <div>
              <p>Hello</p>
            </div>
            {false ? (
              <div>
                <div className="loged_in_user">
                  <FaUserCircle className="user_icon" /> &nbsp;
                  <span className="user_name">{"loggedInUser.name"}</span>
                </div>

                <div className="cart">
                  <FaShoppingCart className="cart_icon" />
                  <span className="cart_count">{"cartData.length"}</span>
                </div>
              </div>
            ) : (
              <div>
                <div className="login_signin_button">
                  <button className="btn signin_button">Log In</button>
                </div>

                <div className="cart">
                  <FaShoppingCart className="cart_icon" />
                  <span className="cart_count">{"2"}</span>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Navbar> */}
    </div>
  );
};

export default HeaderMenu;
