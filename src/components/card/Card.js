import React from "react";
import "./Card.css";

const Card = ({ title, Image }) => {
  return (
    <div className="card-wrapper">
      <div className="card-title">{title}</div>
      <div>
        <img src={Image} className="card-image" />
      </div>
    </div>
  );
};
export default Card;
