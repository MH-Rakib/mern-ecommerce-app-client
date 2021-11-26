import React, { useContext, useEffect, useState } from "react";
import bags from "../../Assets/FakeData/LeatherBags";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ProductCard from "./../ProductCard/ProductCard";
import "./DisplayProducts.css";
import { MdCategory } from "react-icons/md";
import { UserContext } from "../../App";

const DisplayProducts = ({ subcategory, heading }) => {
  const { products } = useContext(UserContext);
  const [allProducts, setAllProducts] = products;
  const [subcatagoryProducts, setSubcatagoryProducts] = useState([]);

  useEffect(() => {
    const subCategoryProduct = allProducts.filter(
      (product) => product.subCategory === subcategory
    );
    setSubcatagoryProducts(subCategoryProduct);
  }, [allProducts]);

  return true ? (
    <div className="section">
      <Container>
        <Row>
          <Col>
            {heading ? (
              <h3 className="" style={{ textAlign: "center" }}>
                {heading}
              </h3>
            ) : (
              <h3 className="" style={{ textAlign: "left" }}>
                {subcategory}
              </h3>
            )}
          </Col>
        </Row>
        <Row>
          {subcatagoryProducts.map((obj) => (
            <Col lg={3}>
              <ProductCard key={obj} obj={obj}></ProductCard>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  ) : (
    <p></p>
  );
};

export default DisplayProducts;
