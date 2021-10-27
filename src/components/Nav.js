import React from "react";
import SocialNav from "./SocialNav";
import StandardButton from "./StandardButton";

const Nav = () => {
  return (
    <nav>
      <div className="nav-wrap">
        <SocialNav />
        <div className="nav-zone1">
          <p>shop</p>
          <p>plan my kitchen</p>
        </div>
        <img src="/svg/mk.svg" />
        <div className="nav-zone2">
          <p>about us</p>
          <p>gallery</p>
        </div>
        <StandardButton text="my order" alt="order-btn" />
      </div>
    </nav>
  );
};
export default Nav;
