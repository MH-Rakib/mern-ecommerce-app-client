import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <p className=" footer-text text-center">
              © 2020 Copyright: immade.net
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
