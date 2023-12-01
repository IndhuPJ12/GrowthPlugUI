import React from "react";
import "./Header.css";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} className="header-img" />
      </div>
      <div className="header-content">
        <div className="header-line"></div>
        <div>J. WHITLEY WILLS, DDS</div>
        <div className="header-subtitle">"CREATING UNFORGETABLE SMILES"</div>
        <div className="header-line"></div>
      </div>
    </div>
  );
};
export default Header;
