import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FeedbackCard, FeedbackTitleCard } from "./FeedbackCard";
import "./FeedbackCard.css";
import ProfileIcon from "../../assets/wills.jpeg";

const Feedbak = () => {
  const feedback = [
    {
      id: 1,
      feedback: `I joined them after the pandemeic, Very responsive,
        helpful, and their dental hygenists are gentle when performing routine
        work. I would recommend this office to anyone needing dental work.`,
    },
    {
      id: 2,
      feedback: `I joined them after the pandemeic, Very responsive,
        helpful, and their dental hygenists are gentle when performing routine
        work. I would recommend this office to anyone needing dental work.`,
    },
    {
      id: 3,
      feedback: `I joined them after the pandemeic, Very responsive,
        helpful, and their dental hygenists are gentle when performing routine
        work. I would recommend this office to anyone needing dental work.`,
    },
    {
      id: 4,
      feedback: `I joined them after the pandemeic, Very responsive,
        helpful, and their dental hygenists are gentle when performing routine
        work. I would recommend this office to anyone needing dental work.`,
    },
  ];

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 100000,
    centerPadding: 0,
    style: { marginRight: "10px", padding: "0", width: "62%" },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          style: { margin: "10px", width: "50%" },
        },
      },
    ],
  };
  return (
    <div className="feedback-wrapper">
      <div>OUR REVIEWS</div>
      <div>
        <FeedbackTitleCard
          title={"J. WHITLEY WILLS, DDS"}
          description={"Based on 6 reviews"}
          icon={ProfileIcon}
          rating={5}
        />
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {feedback?.map((item) => (
            <div>
              <FeedbackCard feedback={item.feedback} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Feedbak;
