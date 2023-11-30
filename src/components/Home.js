import React from "react";
import Card from "./card/Card";
import Image1 from "../assets/card1.jpg";
import "./Home.css";
import Detail from "./detail/Detail";
import CircleContainer from "./circleContainer/CircleContainer";
import ToothIcon from "../assets/tooth.svg";

const Home = () => {
  return (
    <div>
      <div className="card-container">
        <Card title={"ONLINE FORMS"} Image={Image1} />
        <Card title={"MEET DR.WILLS"} Image={Image1} />
        <Card title={"PATIENT REVIEWS"} Image={Image1} />
        <Card title={"FUN TEAM PHOTOS"} Image={Image1} />
      </div>
      <Detail />
      <div className="icon-wrapper">
      <span className="icon-container-title">Dental Services</span>
      <div className="icon-container">
      
        <div className="icon-content">
          <CircleContainer icon={ToothIcon} />
          <div className="icon-label">IMPLANT DENTISTRY</div>
        </div>
        <div className="icon-content">
          <CircleContainer icon={ToothIcon} />
          <div className="icon-label">GLO TEETH WHITENING</div>
        </div>
        <div className="icon-content">
          <CircleContainer icon={ToothIcon} />
          <div className="icon-label">REVEAL CLEAR ALIGNERS</div>
        </div>
        <div className="icon-content">
          <CircleContainer icon={ToothIcon} />
          <div className="icon-label">PORCELAIN DENTAL VENERS</div>
        </div>
        <div className="icon-content">
          <CircleContainer icon={ToothIcon} />
          <div className="icon-label">DENTAL CROWN AND BRIDGE</div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Home;
