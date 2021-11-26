import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { MdOutlineExitToApp } from "react-icons/md";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./HeaderMenu.css";

const HeaderMenu = () => {
  const { cart, user } = useContext(UserContext);
  const [cartData, setCartData] = cart;
  const [loggedInUser, setLoggedInUser] = user;
  return (
    <div className="sticky-top bg-light mb-5">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h2 className="header-brand-logo">IMMADE</h2>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="menu-items">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shop/all" className="menu-items">
              Shop
            </Nav.Link>
            <Nav.Link className="menu-items">Tutorials</Nav.Link>
            <Nav.Link className="menu-items me-5">Contact</Nav.Link>

            {loggedInUser.email ? (
              <>
                {loggedInUser.isAdmin ? (
                  <Nav.Link
                    as={Link}
                    to={"/admin"}
                    className="menu-items me-2 text-danger"
                  >
                    {" "}
                    <FaUserCircle
                      style={{ fontSize: "20px", marginTop: "-3px" }}
                    />{" "}
                    Admin
                  </Nav.Link>
                ) : (
                  <Nav.Link className="menu-items me-2 text-danger">
                    {" "}
                    <FaUserCircle
                      style={{ fontSize: "20px", marginTop: "-3px" }}
                    />{" "}
                    {loggedInUser.username}
                  </Nav.Link>
                )}
                <Nav.Link className="menu-items me-5">
                  <MdOutlineExitToApp
                    className="text-danger"
                    onClick={() => setLoggedInUser({})}
                    style={{ fontSize: "26px" }}
                  />
                </Nav.Link>
              </>
            ) : (
              <Nav.Link
                as={Link}
                to="/login"
                className="menu-items text-danger"
              >
                Login
              </Nav.Link>
            )}

            <Nav.Link as={Link} to="/cart" className="cart">
              <FaShoppingCart className="cart_icon" />
              <span className="cart_count">{cartData.length}</span>
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
