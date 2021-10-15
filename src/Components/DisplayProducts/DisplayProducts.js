import React from "react";
import bags from "../../Assets/FakeData/LeatherBags";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ProductCard from "./../ProductCard/ProductCard";
import "./DisplayProducts.css";

const DisplayProducts = ({ data, heading }) => {
  return (
    <div className="section">
      <Container>
        <Row>
          <Col>
            <h3 className="heading">{heading}</h3>
          </Col>
        </Row>
        <Row>
          {data.map((obj) => (
            <Col lg={3}>
              <ProductCard obj={obj}></ProductCard>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default DisplayProducts;
