import React from "react";
import TestimonialsTextBlock from "../components/TestimonialsTextBlock";

const TestimonialsContainer = () => {
  return (
    <div className="testimonials-wrap">
      <img src="/svg/leftArrow.svg" />
      <TestimonialsTextBlock />
      <img src="/svg/rightArrow.svg" />
    </div>
  );
};
export default TestimonialsContainer;
