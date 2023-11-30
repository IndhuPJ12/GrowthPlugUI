import React from "react";
import DetailImage from "../../assets/detail.jpeg";
import "./Detail.css";

const Detail = () => {
  return (
    <div className="detail-wrapper">
      <div className="detail-title">
        Your Dentist im Memphis, TN, and Surrounding Areas of Mississippi and
        Arkansas
      </div>
      <div className="detail-content">
        <div className="detail-image-container">
          <img src={DetailImage} className="detail-image" />
        </div>
       <div className="detail-subcontent">
        <div className="detail-subtitle">
          WELCOME TO OUR PRACTICE DR. J. WHITLEY WILLS
        </div>
        <div className="detail-description">
          Welcome to the office of Dr. J Whitley Wills! Our dentist has been
          providing exceptional general cosmetic, implant restorative and
          prevantive debtistry in Memphis , Tennesse , and the surrounding areas
          since 1993, and he knows just how to take care of you. With his
          knowledge and experience , Dr J .Whitley Wills will work with you to
          help you achieve all your dental goals. Dr.Whitley Wills also utilizes
          some of the latest technology available to improve the health of your
          smile. Whether you are missing teeth and require dental implants or
          you are visiting for a routine exam , you know that you are in good
          hands at our office
        </div>
        </div>
      </div>
    </div>
  );
};
export default Detail;
