import React from "react";
import BannerTextBox from "../components/BannerTextBox";
import Navbar from "../components/Nav";

const HeaderContainer = () => {
  return (
    <div className="banner-image-wrapper">
      <Navbar />
      <div className="banner-image"></div>
      <div className="banner-background-color"></div>
      <BannerTextBox />
    </div>
  );
};
export default HeaderContainer;
