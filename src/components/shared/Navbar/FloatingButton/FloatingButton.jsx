import React from "react";
import "./FloatingButton.css";
import { foatingbutton } from "../../../../assets/getAssets";

const FloatingButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="floating-button">
      <img src={foatingbutton} alt="" />
    </button>
  );
};

export default FloatingButton;
