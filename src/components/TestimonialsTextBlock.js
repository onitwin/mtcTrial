import React from "react";
import StandardButton from "./StandardButton";

const TestimonialsTextBlock = () => {
  return (
    <div className="testimonials-block-wrap">
      <div className="testimonials-block">
        <h6 className="testimonials-block-mini-title">
          What Our Customers Say
        </h6>
        <h2 className="testimonials-block-title">
          Over 35 years experience designing handmade kitchens
        </h2>
        <article>
          Since my first contact I have received a very high level of customer
          service and advice with my kitchen plans. Ben responded very quickly
          to all of my emails and delivery of the kitchen was as planned.
        </article>
        <StandardButton text={"frequently asked questions"} alt={"main-btn"} />
      </div>
    </div>
  );
};
export default TestimonialsTextBlock;
