import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ProductCategoryCard from "./../ProductCategoryCard/ProductCategoryCard";
import catagories from "./../../Assets/FakeData/Categories";
import "./ProductCategories.css";

const ProductCategories = () => {
  return (
    <div className="productCategories section">
      <Container>
        <h2 className="heading">Product Categories</h2>
        <Row>
          {catagories.map((obj) => (
            <Col md={4}>
              <ProductCategoryCard obj={obj}></ProductCategoryCard>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductCategories;
