import React from "react";
import StandardButton from "../components/StandardButton";

const GalleryContainer = () => {
  return (
    <div className="gallery">
      <h3 className="gallery-title">Customer Gallery</h3>
      <div className="gallery-wrap">
        <div className="gallery-grid">
          <img src="/kitchen2-small.png" alt="kitchen hob"></img>
          <img src="/kitchen3-small.png" alt="wide kitchen"></img>
          <img src="/kitchen4-small.png" alt="country kitchen"></img>
          <img src="/kitchen1-small.png" alt="modern kitchen"></img>
        </div>
      </div>
      <StandardButton text={"view more"} alt={"main-btn"} />
    </div>
  );
};
export default GalleryContainer;
