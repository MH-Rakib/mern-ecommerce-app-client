import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./BreadCrumb.css";

const BreadCrumb = ({ from, to }) => {
  return (
    <div className="section">
      <Container>
        <Row>
          <Col className="breadCrumb">
            <h2 className="text-center text-uppercase">
              {from} {`>`} {to}
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BreadCrumb;
