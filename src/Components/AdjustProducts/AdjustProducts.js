import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AdjustProducts.css";

const AdjustProducts = ({ handleFilterProduct }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col className=" d-flex justify-content-between">
            <div className="adjust-attributes">
              <span>Filter Products: </span>

              <select
                onChange={handleFilterProduct}
                name="cars"
                id="cars"
                form="carform"
              >
                <option value="all">All Products</option>
                <option value="tShirt">T-shirts</option>
                <option value="bags">Leather Bags</option>
                <option value="shoes">Leather Boots</option>
              </select>
            </div>
            <div className="adjust-attributes">
              <span>Sort By Price: </span>
              <select name="cars" id="cars" form="carform">
                <option value="volvo">Default</option>
                <option value="saab">Low To High</option>
                <option value="opel">High To Low</option>
              </select>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdjustProducts;
