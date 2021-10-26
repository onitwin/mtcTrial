import React from "react";

const StandardButton = ({ text, alt }) => {
  return <button className={`${alt}`}>{text}</button>;
};
export default StandardButton;
