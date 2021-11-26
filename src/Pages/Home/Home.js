import React, { useEffect, useState } from "react";
import HeaderMenu from "./../../Components/HeaderMenu/HeaderMenu";
import BannerSlider from "./../../Components/BannerSlider/BannerSlider";
import ProductCategories from "./../../Components/ProductCategories/ProductCategories";
import DisplayProducts from "./../../Components/DisplayProducts/DisplayProducts";
import bags from "../../Assets/FakeData/LeatherBags";
import boots from "./../../Assets/FakeData/LeatherBoots";
import Newsletter from "./../../Components/Newsletter/Newsletter";
import Footer from "./../../Components/Footer/Footer";
import catagories from "../../Assets/FakeData/Categories";
import CategoryProducts from "../../Components/CategoryProducts/CategoryProducts";

const Home = () => {
  return (
    <div className="home-page">
      <HeaderMenu></HeaderMenu>
      <BannerSlider></BannerSlider>
      <ProductCategories></ProductCategories>

      {catagories.map((parentCategory) => (
        <CategoryProducts
          key={parentCategory}
          parentCategory={parentCategory}
        ></CategoryProducts>
      ))}

      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
