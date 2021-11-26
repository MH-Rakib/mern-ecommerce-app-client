import React, { useContext, useEffect, useState } from "react";
import HeaderMenu from "../../Components/HeaderMenu/HeaderMenu";
import Footer from "../../Components/Footer/Footer";
import DisplayProducts from "../../Components/DisplayProducts/DisplayProducts";
import boots from "../../Assets/FakeData/LeatherBoots";
import singleProductData from "../../Assets/FakeData/SignleProductData";
import SingleProduct from "./../../Components/SingleProduct/SingleProduct";
import { useParams } from "react-router";

const SingleProductPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(data.subCategory);

  useEffect(() => {
    fetch(`http://localhost:4000/api/product/find/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [id]);

  return (
    !loading && (
      <div>
        <HeaderMenu></HeaderMenu>
        <SingleProduct data={data} />
        <DisplayProducts
          subcategory={data.subCategory}
          heading={"Product You May Like"}
        ></DisplayProducts>
        <Footer></Footer>
      </div>
    )
  );
};

export default SingleProductPage;
