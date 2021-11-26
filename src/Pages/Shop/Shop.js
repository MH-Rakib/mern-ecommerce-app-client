import React, { useEffect, useState } from "react";
import HeaderMenu from "./../../Components/HeaderMenu/HeaderMenu";
import Footer from "./../../Components/Footer/Footer";
import BreadCrumb from "./../../Components/BreadCrumb/BreadCrumb";
import AdjustProducts from "./../../Components/AdjustProducts/AdjustProducts";
import { useParams } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Shop = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const [filteredCategory, setFilteredCategory] = useState(id);
  const [products, setproducts] = useState([]);
  console.log(products);

  const handleFilterProduct = (e) => {
    setFilteredCategory(e.target.value);
  };

  useEffect(() => {
    let url = `http://localhost:4000/api/product`;
    if (filteredCategory !== "all") {
      url = `${url}?parentCategory=${filteredCategory}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
        console.log(data);
      });
    setLoading(false);
  }, [filteredCategory]);

  return (
    <div>
      <HeaderMenu></HeaderMenu>
      <BreadCrumb from={"Home"} to={"Shop"} />
      {!loading && (
        <>
          <AdjustProducts handleFilterProduct={handleFilterProduct} />
          <Container className="my-5" style={{ minHeight: "60vh" }}>
            <Row>
              {products.map((obj) => (
                <Col lg={3}>
                  <ProductCard key={obj} obj={obj}></ProductCard>
                </Col>
              ))}
            </Row>
          </Container>
        </>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Shop;
