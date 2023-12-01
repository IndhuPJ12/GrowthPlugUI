import React from 'react'
import "./Insurance.css"
import InsuranceImage from "../../assets/insurance.jpg"


const Insurance =()=>{
    return (
        <div className='insurance-container'>
            <div className='insurance-content'>
             <div className='insurance-title'>
                INSURANCE INFORMATION
             </div>
             <div className='insurance-description'>
                In the network with delta dental premiere provider and Cigna DPPO Provider
             </div>
             <div className='insurance-link'>
                <a href>APPLY FOR FINANCING</a>
             </div>
            </div>
            <div className='insurance-image-wrapper'>
                <img src={InsuranceImage} className='insurance-image'/>
            </div>
        </div>
    )
}
export default Insurance