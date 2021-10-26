import React from "react";
import BannerTextBox from "../components/BannerTextBox";

const HeaderContainer = () => {
  return (
    <div className="banner-image-wrapper">
      <div className="banner-image"></div>
      <div className="banner-background-color"></div>
      <BannerTextBox />
    </div>
  );
};
export default HeaderContainer;
