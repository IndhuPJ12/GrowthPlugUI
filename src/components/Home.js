import React from "react";
import Card from "./card/Card";
import Image1 from "../assets/card1.jpg";
import "./Home.css";
import Detail from "./detail/Detail";
import CircleContainer from "./circleContainer/CircleContainer";
import ToothIcon from "../assets/tooth.svg";
import Feedbak from "./slider/Slider";
import Header from "./Header";
import Navbar from "./Navbar";
import Banner from "./banner/Banner";
import Gallery from "./gallery/Gallery";
import Insurance from "./insurance/Insurance";
import Introduction from "./introduction/Introduction";
import Footer from "./footer/Footer";
import GalleryImage1 from "../assets/gallery1.jpeg";
import GalleryImage2 from "../assets/gallery2.jpeg";
import GalleryImage3 from "../assets/gallery3.jpeg";
import GalleryImage4 from "../assets/gallery4.jpeg";
import GalleryImage5 from "../assets/gallery5.jpeg";
import GalleryImage6 from "../assets/gallery6.jpeg";
import GalleryImage7 from "../assets/gallery7.jpeg";
import GalleryImage8 from "../assets/gallery8.jpeg";
import GalleryImage9 from "../assets/gallery9.jpeg";
import GalleryImage10 from "../assets/gallery10.jpeg";

const Home = () => {
  const images = [
    GalleryImage1,
    GalleryImage2,
    GalleryImage3,
    GalleryImage4,
    GalleryImage5,
    GalleryImage6,
    GalleryImage7,
    GalleryImage8,
    GalleryImage9,
    GalleryImage10,
  ];
  const services = [
    {
      icon: ToothIcon,
      label: "IMPLANT DENTISTRY",
    },
    {
      icon: ToothIcon,
      label: "GLO TEETH WHITENING",
    },
    {
      icon: ToothIcon,
      label: "REVEAL CLEAR ALIGNERS",
    },
    {
      icon: ToothIcon,
      label: "PORCELAIN DENTAL VENERS",
    },
    {
      icon: ToothIcon,
      label: "DENTAL CROWN AND BRIDGE",
    },
  ];
  const cards = [
    {
      image: Image1,
      label: "ONLINE FORMS",
    },
    {
      image: Image1,
      label: "MEET DR.WILLS",
    },
    {
      image: Image1,
      label: "PATIENT REVIEWS",
    },
    {
      image: Image1,
      label: "FUN TEAM PHOTOS",
    },
  ];

  return (
    <div className="home-container">
      <Header />
      <Navbar />
      <Banner />
      <div className="card-container">
        {cards?.map((cardItems) => (
          <Card title={cardItems?.label} Image={cardItems?.image} />
        ))}
      </div>
      <Detail />
      <Introduction />
      <div className="icon-wrapper">
        <span className="icon-container-title">SERVICES</span>
        <div className="icon-container">
          {services?.map((serviceItems) => (
            <div className="icon-content">
              <CircleContainer icon={serviceItems?.icon} />
              <div className="icon-label">{serviceItems?.label}</div>
            </div>
          ))}
        </div>
      </div>
      <Feedbak />
      <Insurance />
      <Gallery images={images} />
      <Footer />
    </div>
  );
};
export default Home;
