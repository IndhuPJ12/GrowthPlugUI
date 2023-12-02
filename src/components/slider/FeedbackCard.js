import React from "react";
import "./FeedbackCard.css";
import StarIcon from "../../assets/star.svg";

const renderStar = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(<img src={StarIcon} />);
  }
  return stars;
};

export const FeedbackCard = ({ feedback }) => {
  return (
    <div className="feedback-card-container">
      <div style={{ display: "flex" }}>{renderStar(5)}</div>
      <div>{feedback}</div>
    </div>
  );
};
export const FeedbackTitleCard = ({ title, description, icon, rating }) => {
  return (
    <div className="title-card-container">
      <div className="title-card-icon">
        <img src={icon} alt="feedbck" className="title-card-image" />
      </div>
      <div>
        <div>{title}</div>

        <div>{renderStar(rating)}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};
