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

  return (
    <div>
      <Header />

      <Navbar />

      <Banner />
      <div className="card-container">
        <Card title={"ONLINE FORMS"} Image={Image1} />
        <Card title={"MEET DR.WILLS"} Image={Image1} />
        <Card title={"PATIENT REVIEWS"} Image={Image1} />
        <Card title={"FUN TEAM PHOTOS"} Image={Image1} />
      </div>
      <Detail />
      <Introduction />
      <div className="icon-wrapper">
        <span className="icon-container-title">Dental Services</span>
        <div className="icon-container">
          <div className="icon-content">
            <CircleContainer icon={ToothIcon} />
            <div className="icon-label">IMPLANT DENTISTRY</div>
          </div>
          <div className="icon-content">
            <CircleContainer icon={ToothIcon} />
            <div className="icon-label">GLO TEETH WHITENING</div>
          </div>
          <div className="icon-content">
            <CircleContainer icon={ToothIcon} />
            <div className="icon-label">REVEAL CLEAR ALIGNERS</div>
          </div>
          <div className="icon-content">
            <CircleContainer icon={ToothIcon} />
            <div className="icon-label">PORCELAIN DENTAL VENERS</div>
          </div>
          <div className="icon-content">
            <CircleContainer icon={ToothIcon} />
            <div className="icon-label">DENTAL CROWN AND BRIDGE</div>
          </div>
        </div>
      </div>
      <Feedbak />
      {/* <Gallery/> */}
      <Insurance />
      <Gallery images={images} />
      <Footer />
    </div>
  );
};
export default Home;
