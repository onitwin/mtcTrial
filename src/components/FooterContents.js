import React from "react";
import FooterTitle from "./FooterTitle";
import FooterLists from "./FooterLists";

const FooterContents = () => {
  return (
    <div className="footer-contents-wrap">
      <FooterTitle />
      <FooterLists />
      <div className="copyright-wrap">
        <h6 className="copyright-text">
          Copyright Online MTC Home Kitchens 2018 - All rights reserved.
          Responsive website design, Development & Hosting by mtc.
        </h6>
      </div>
      <div className="footer-head-align">
        <div className="foot-line-bottom"></div>
      </div>
    </div>
  );
};
export default FooterContents;
