import React from "react";
import "./Navbar.css";
import ContactIcon from "../assets/contactIcon.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">OUR PRACTICE</a>
        </li>
        <li>
          <a href="#">SERVICES</a>
        </li>
        <li>
          <a href="#">REVIEWS</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
        <li>
          <button>REQUEST AN APPOINMENT</button>
        </li>
        <li>
          <img src={ContactIcon} className="contact-icon" />
          <a href="#">(901) 726-9525</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
