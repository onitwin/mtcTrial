import React from "react";
import SocialNav from "./SocialNav";

const FooterLists = () => {
  return (
    <div className="list-wrap">
      <div className="all-lists">
        <div className="footer-list">
          <h3>About</h3>
          <h6>Shop</h6>
          <h6>Plan my kitchen</h6>
          <h6>About Us</h6>
          <h6>Gallery</h6>
        </div>
        <div className="footer-list">
          <h3>Service</h3>
          <h6>FAQ</h6>
          <h6>contact</h6>
          <h6>how to buy</h6>
          <h6>downloads</h6>
        </div>
        <div className="footer-list">
          <h3>Info</h3>
          <h6>Delivery</h6>
          <h6>Terms</h6>
          <h6>Privacy</h6>
        </div>
        <div className="footer-list">
          <h3>Follow</h3>
          <SocialNav />
        </div>
      </div>
    </div>
  );
};
export default FooterLists;
