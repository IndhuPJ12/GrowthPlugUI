import React from "react";
import "./CircleContainer.css"
import ToothIcon from "../../assets/tooth.svg"

const CircleContainer =({icon})=>{
    return (
        <div className="circle-container">
         <div>
          <img src={icon} className="circle-image"/>
         </div>
        </div>
    )
}
export default CircleContainer