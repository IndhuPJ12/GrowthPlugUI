import React from "react";
import "./Header.css";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} className="img" />
      </div>
      <div className="content">
        <div className="line"></div>
        <div>J. WHITLEY WILLS, DDS</div>
        <div className="subtitle">"CREATING UNFORGETABLE SMILES"</div>
        <div className="line"></div>
      </div>
    </div>
  );
};
export default Header;
