import React, { useRef } from "react";
import { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import "./Login.css";
import { UserContext } from "../../App";

const Login = () => {
  const { user } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = user;

  const userName = useRef(null);
  const userEmail = useRef(null);
  const userPassword = useRef(null);
  // let history = useHistory();
  // let location = useLocation();
  // let { from } = location.state || { from: { pathname: "/" } };

  // const { user } = useContext(UserContext);

  const [newUser, setNewUser] = useState(false);
  const [wrongEmailMessage, setWrongEmailMessage] = useState("");
  const [wrongPasswordMessage, setWrongPasswordMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const redirect = (res) => {
  //   setUserInfo(res);
  //   setLoggedInUser(res);
  //   if (res.isSigned) {
  //     history.replace(from);
  //   }
  // };

  const toggleNewUser = (bool) => {
    setNewUser(bool);
  };

  const resetData = () => {
    newUser && (userName.current.value = "");
    userEmail.current.value = "";
    userPassword.current.value = "";

    newUser && setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // Register
    if (newUser) {
      const userInfo = { username, email, password };
      const url = `http://localhost:4000/api/auth/register`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const data = await response.json();
      if (data.error) {
        alert(data.message);
        resetData();
      } else {
        alert("Account Created Successfully");
        resetData();
        setNewUser(false);
      }
    }
    // User login
    if (!newUser) {
      const userInfo = { email, password };
      const url = `http://localhost:4000/api/auth/login`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const data = await response.json();
      if (data.error) {
        alert(data.message);
        resetData();
      } else {
        alert("Logged In Successfully");
        resetData();
        setLoggedInUser(data);
      }
    }
  };

  const handleOnBlur = (e) => {
    let isValid = false;

    if (newUser) {
      if (e.target.name === "username") {
        isValid = true;
        if (isValid) {
          setUsername(userName.current.value);
        }
      }
    }

    if (e.target.name === "email") {
      const re = /\S+@\S+\.\S+/;
      isValid = re.test(userEmail.current.value);
      if (!isValid) {
        setWrongEmailMessage("Please Enter a valid Email");
      } else {
        setWrongEmailMessage("");
        setEmail(userEmail.current.value);
      }
    }

    if (e.target.name === "password") {
      isValid = userPassword.current.value.length >= 6;
      if (!isValid) {
        setWrongPasswordMessage("Minimum length of password should be 6");
      } else {
        setWrongPasswordMessage("");
        setPassword(userPassword.current.value);
      }
    }
  };

  return (
    <div>
      <Container>
        <Row style={{ height: "85vh" }} className="d-flex align-items-center">
          <Col lg={6} className="mx-auto">
            <div className="main login">
              <p className="sign" align="center">
                {newUser ? <span>Sign Up</span> : <span>Log In</span>}
              </p>
              <form onSubmit={handleOnSubmit} className="form1">
                {newUser ? (
                  <input
                    onBlur={handleOnBlur}
                    className="un"
                    type="text"
                    placeholder="User Name"
                    name="username"
                    ref={userName}
                    required
                  />
                ) : (
                  ""
                )}
                <input
                  onBlur={handleOnBlur}
                  className="un "
                  type="email"
                  align="center"
                  placeholder="User Email"
                  name="email"
                  ref={userEmail}
                  required
                />

                <p style={{ marginTop: "-40px" }}>
                  <span style={{ opacity: 0 }}>*</span>
                  <span
                    style={{
                      color: "red",
                      lineHeight: "20px",
                      marginTop: "4px",
                    }}
                  >
                    {wrongEmailMessage}
                  </span>
                </p>

                <input
                  onBlur={handleOnBlur}
                  className="pass"
                  type="password"
                  align="center"
                  placeholder="Password"
                  name="password"
                  ref={userPassword}
                  required
                />
                {newUser && (
                  <p style={{ marginTop: "-40px" }}>
                    <span style={{ opacity: 0 }}>*</span>
                    <span
                      style={{
                        color: "red",
                        lineHeight: "20px",
                        marginTop: "4px",
                      }}
                    >
                      {wrongPasswordMessage}
                    </span>
                  </p>
                )}
                <br />
                {newUser ? (
                  <button type="submit" className=" submit" align="center">
                    Sign in
                  </button>
                ) : (
                  <button type="submit" className=" submit" align="center">
                    Log in
                  </button>
                )}

                {/* <p>{loggedInUser.message}</p> */}

                <div className="register">
                  {newUser ? (
                    <p>
                      Already a member?{" "}
                      <span onClick={() => toggleNewUser(false)}>Login</span>{" "}
                    </p>
                  ) : (
                    <p>
                      Not a member?{" "}
                      <span onClick={() => toggleNewUser(true)}>Sign Up</span>{" "}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
