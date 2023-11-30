import React from "react";
import BannerImg from "../../assets/banner2.jpg"
import  "./Banner.css"


const Banner =()=>{
    return(
        <div className="banner">
            <img src={BannerImg} className="banner-image"/>
        
            <div className="content">
            <div className="title">
                CREATING UNFORGETABLE SMILES
            </div>
            <div className="subtitle">
             Memphis, TN
            </div>
            <button >REQUEST AN APPOINMENT</button>
            </div>
            
        </div>
    )
}
export default Banner