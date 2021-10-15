import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Newsletter = () => {
  return (
    <div className="section">
      <Container>
        <Row>
          <Col md={7}>
            <div className="newsletter"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Newsletter;
