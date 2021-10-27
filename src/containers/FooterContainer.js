import React from "react";
import FooterContents from "../components/FooterContents";

const FooterContainer = () => {
  return (
    <div>
      <div className="footer-image-wrapper">
        <div className="footer-image"></div>
        <div className="footer-background-color"></div>
        <FooterContents />
      </div>
    </div>
  );
};
export default FooterContainer;
