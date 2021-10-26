import React from "react";
import StandardButton from "./StandardButton";

const BannerTextBox = () => {
  return (
    <div className="text-box-wrap">
      <h6>Design and order your new kitchen online today </h6>
      <h3>Bespoke & made to measure handmade kitchen design</h3>
      <StandardButton text={"order now"} alt={"main-btn"} />
    </div>
  );
};
export default BannerTextBox;
