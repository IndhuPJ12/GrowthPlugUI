import React from "react";
import IntroductionImage from "../../assets/wills.jpeg";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div>
      <div className="introduction-title">MEET THE DOCTOR</div>
      <div className="introduction-container">
        <div className="introduction-wrapper">
          <div>DR.Whitley Wills, DDS</div>
          <div className="introduction-content">
            {" "}
            After studying biology at Ole Miss, Dr. J Whitley Wills graduated
            from the University of Tennessee College of Dentistry in 1989. Since
            graduating, Dr. Wills has continued his education through the
            prestigious L. D. Pankey Institute in Florida, taking courses on
            cosmetic, implant, and restorative dentistry to ensure that his
            patients receive the most up-to-date dental care possible. A member
            of the American Dental Association®, the Tennessee Dental
            Association, the Memphis Dental Society, and the L. D. Pankey Alumni
            Association, dentistry is Dr. Wills’ passion. He also teaches at the
            University of Tennessee College of Dentistry in the Restorative
            Dentistry department. Dr. Wills was the 2011 president of the
            Memphis Dental Study Club and a past dental director of the St.
            Ignatius Haiti Medical Missions. He believes in helping people get
            the smiles they’ve always wanted, and he enjoys getting to know his
            patients.
          </div>
        </div>
        <div className="introduction-image-container">
          <img
            src={IntroductionImage}
            alt="whitley wills"
            className="introduction-image"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default Introduction;
