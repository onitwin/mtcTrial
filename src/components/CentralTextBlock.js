import React from "react";
import StandardButton from "./StandardButton";

const CentralTextBlock = () => {
  return (
    <div className="central-block-wrap">
      <div className="central-block">
        <h6 className="central-block-mini-title">
          Quality craftmanship from build to delivery
        </h6>
        <h2 className="central-block-title">
          Discover the beauty of a handmade kitchen
        </h2>
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
          est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu,
          feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna
          eu pharetra tincidunt, mauris purus ultrices.
        </article>
        <StandardButton text="about us" alt="main-btn" />
      </div>
    </div>
  );
};
export default CentralTextBlock;
