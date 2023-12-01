import React from "react";
import  "./FeedbackCard.css"
import StarIcon from "../../assets/star.svg"

export const FeedbackCard = ({feedback}) => {
    return (
            <div className="feedback-card-container">
             {feedback}
           </div>
    )
}
const renderStar = (count)=>{
    const stars = []
 for(let i=0;i<count;i++) {
  stars.push(
<img src={StarIcon} />
  )
 }
 return stars
}

export const FeedbackTitleCard =({title,description,icon,rating})=>{
    return (
        <div className="title-card-container">
          <div className="title-card-icon">
            <img src={icon} className="title-card-image"/>
        </div>  
        <div>   
        <div>{title}</div>
        
        <div>{renderStar(rating)}</div>
        <div>{description}</div>
        </div>
        </div>
    )
}