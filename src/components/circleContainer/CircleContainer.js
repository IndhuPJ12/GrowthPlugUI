import React from "react";
import "./CircleContainer.css";

const CircleContainer = ({ icon }) => {
  return (
    <div className="circle-container">
      <div>
        <img src={icon} alt='icons' className="circle-image" />
      </div>
    </div>
  );
};
export default CircleContainer;
