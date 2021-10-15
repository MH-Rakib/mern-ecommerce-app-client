import React from "react";
import HeaderMenu from "./../../Components/HeaderMenu/HeaderMenu";
import BannerSlider from "./../../Components/BannerSlider/BannerSlider";
import ProductCategories from "./../../Components/ProductCategories/ProductCategories";
import DisplayProducts from "./../../Components/DisplayProducts/DisplayProducts";
import bags from "../../Assets/FakeData/LeatherBags";
import boots from "./../../Assets/FakeData/LeatherBoots";

const Home = () => {
  return (
    <div className="home-page">
      <HeaderMenu></HeaderMenu>
      <BannerSlider></BannerSlider>
      <ProductCategories></ProductCategories>
      <DisplayProducts data={bags} heading={"Leather Bags"}></DisplayProducts>
      <DisplayProducts data={boots} heading={"Leather Shoes"}></DisplayProducts>
    </div>
  );
};

export default Home;
